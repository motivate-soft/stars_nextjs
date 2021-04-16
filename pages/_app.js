import React from 'react';
import App from 'next/app';
/**
 *  import for legacy version of next-redux-wrapper
 */
// import {Provider} from 'react-redux';
// import withRedux from 'next-redux-wrapper';

import {createWrapper} from 'next-redux-wrapper';
import ThemeProvider from '../containers/Admin/ThemeProvider';
import initStore from '../redux/store';
import 'antd/dist/antd.css';
import 'react-phone-input-2/lib/bootstrap.css';
import 'react-dates/lib/css/_datepicker.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/global.css';
import GuestThemeProvider from "../containers/Guest/GuestThemeProvider";
import {SearchProvider} from "@context/SearchProvider";
import {BookingProvider, initBooking} from "@context/BookingProvider";
import GlobalStyles from "../style/GlobalStyles";
import WithGATracker from "@components/HOC/WithGATracker";
import WithPixel from "@components/HOC/WithPixel";


class CustomApp extends App {
    render() {
        const {Component, router, pageProps, store} = this.props;
        const {query} = router

        if (router.pathname.split('/')[0] === 'admin') {
            return (
                // <Provider store={store}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
                // </Provider>
            );
        }
        return (
            <GuestThemeProvider>
                <SearchProvider query={query}>
                    <BookingProvider booking={initBooking}>
                        <GlobalStyles/>
                        <Component {...pageProps} />
                    </BookingProvider>
                </SearchProvider>
            </GuestThemeProvider>
        )
        // return WithGATracker(WithPixel((
        //     // <Provider store={store}>
        //     <GuestThemeProvider>
        //         <SearchProvider query={query}>
        //             <BookingProvider booking={initBooking}>
        //                 <GlobalStyles/>
        //                 <Component {...pageProps} />
        //             </BookingProvider>
        //         </SearchProvider>
        //     </GuestThemeProvider>
        //     // </Provider>
        // )))
    }
}

const wrapper = createWrapper(initStore, {debug: true})
export default wrapper.withRedux(CustomApp)

// export default withRedux(initStore)(CustomApp);

