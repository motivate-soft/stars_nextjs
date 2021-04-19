import React, {useEffect} from 'react';
import Router from "next/router";
import ReactGA from "react-ga";
import {GA_ID} from "../../env-config";

const logPageView = () => {
    console.log(`react-ga pageview for ${window.location.pathname}`)
    ReactGA.set({page: window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}

export default (WrappedComponent) => (props) => {
    useEffect(() => {
        console.log("initGA", GA_ID)
        ReactGA.initialize(GA_ID)
        // `routeChangeComplete` won't run for the first page load unless the query string is
        // hydrated later on, so here we log a page view if this is the first render and
        // there's no query string
        if (!Router.asPath.includes('?')) {
            logPageView()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // Listen for page changes after a navigation or when the query changes
        Router.events.on('routeChangeComplete', logPageView)
        return () => {
            Router.events.off('routeChangeComplete', logPageView)
        }
    }, [Router.events])

    return <WrappedComponent {...props} />;
};
