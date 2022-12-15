import React, {useEffect} from 'react';
import Router from "next/router";
import ReactGA from "react-ga";
import {GA_ID} from "../../env-config";

const logPageView = () => {
    ReactGA.set({page: window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}

export default (WrappedComponent) => (props) => {
    useEffect(() => {
        ReactGA.initialize(GA_ID)
        if (!Router.asPath.includes('?')) {
            logPageView()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        Router.events.on('routeChangeComplete', logPageView)
        return () => {
            Router.events.off('routeChangeComplete', logPageView)
        }
    }, [Router.events])

    return <WrappedComponent {...props} />;
};
