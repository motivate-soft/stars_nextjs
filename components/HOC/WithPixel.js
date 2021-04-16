import React, {useEffect} from 'react';
import {PIXEL_ID} from "../../env-config";
import Router from "next/router";

export default (Component) => (props) => {
    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init(PIXEL_ID);
                ReactPixel.pageView();

                Router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView();
                });
            });
    }, [])
    return <Component {...props} />;
};
