import React, { useEffect } from "react";
import App from "next/app";
import { createWrapper } from "next-redux-wrapper";
import ThemeProvider from "../containers/Admin/ThemeProvider";
import initStore from "../redux/store";
import "antd/dist/antd.css";
import "react-phone-input-2/lib/bootstrap.css";
import "react-dates/lib/css/_datepicker.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/global.css";
import GuestThemeProvider from "../containers/Guest/GuestThemeProvider";
import { SearchProvider } from "@context/SearchProvider";
import { BookingProvider, initBooking } from "@context/BookingProvider";
import GlobalStyles from "../style/GlobalStyles";
import {
  NEXTSEO_DEFAULT_DESCRIPTION,
  NEXTSEO_DEFAULT_TITLE,
} from "./../next-seo.config";
import { DefaultSeo } from "next-seo";
import TagManager from 'react-gtm-module'


const CustomApp = ({Component, router, pageProps, store}) => {
  const { query } = router;
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-P5PGM3G" })
  }, [])

  if (router?.pathname.split("/")[0] === "admin") {
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }

  return (
    <GuestThemeProvider>
      <SearchProvider query={query}>
        <BookingProvider booking={initBooking}>
          <GlobalStyles />
          <DefaultSeo
            title={NEXTSEO_DEFAULT_TITLE}
            description={NEXTSEO_DEFAULT_DESCRIPTION}
            openGraph={{
              type: "website",
              locale: "en_US",
              url: "https://www.url.ie/",
              site_name: "starsofboston",
            }}
          />
          <Component {...pageProps} />
        </BookingProvider>
      </SearchProvider>
    </GuestThemeProvider>
  );
}

const wrapper = createWrapper(initStore, { debug: false });
export default wrapper.withRedux(CustomApp);

/**
 *  import for legacy version of next-redux-wrapper
 */
// import {Provider} from 'react-redux';
// import withRedux from 'next-redux-wrapper';

// return (
//   <Provider store={store}>
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   </Provider>
// );

// export default withRedux(initStore)(CustomApp);
