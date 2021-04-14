import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import {GA_ID} from "../../env-config";

ReactGA.initialize(GA_ID);

export default (WrappedComponent, options = {}) => {
    const trackPage = (page) => {
        ReactGA.set({
            page,
            ...options
        });
        ReactGA.pageview(page);
    };

    const HOC = (props) => {
        // useEffect(() => trackPage(props.location.pathname), [props.location.pathname]);
        useEffect(() => {
            console.log("__ReactGA", props)
        });

        return <WrappedComponent {...props} />;
    };

    return HOC;
};
