const prod = process.env.NODE_ENV === "production";

module.exports = {
  SITE_URL: "www.starsofboston.com",
  BACKEND_URL: prod ? "https://www.starsofboston.com" : "http://localhost:8000",
  RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
  PIXEL_ID: "339821513993100",
  GA_ID: "UA-129107246-1",
  GT_ID: "AW-775813485",
  ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db",
  GOOGLE_MAP_API_KEY: "AIzaSyD9hE5SVxx97vM6tVn979OjeoB58ZGgyWI",
  // PAYPAL_CLIENT_ID:
  //   "AVGSCRet9DZ7Ct0uNXIXGlZDO4EIlbnmGty4_jUvnG5Wn0GPTYJudDiB1tqkM2srJGWNZPEE1ZKt4_71", // production
  PAYPAL_CLIENT_ID:
    // "AQod8JtRRk59F5HjcGOH7ZNymA7N6s2B1WhXH_g_UCBY40Y1LPSt0fxhdaR2rYmIQPNP2k7uZ5gL95Oe", // sandbox
    "AXwTk5K-0VZOiWTVSwdWmS-qTtcZlr_lj3LGOZiXnlCCBrUCnon1YEoBy0aeThSEz_DDv0ja5P4MYkg_", // card supported sandbox
};
