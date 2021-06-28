const prod = process.env.NODE_ENV === "production";

module.exports = {
  BACKEND_URL: prod
    ? "https://short-term-apartments-boston.com"
    : "http://localhost:8000",
  RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
  PIXEL_ID: "339821513993100",
  GA_ID: "UA-129107246-1",
  ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db",
  GOOGLE_MAP_API_KEY: "AIzaSyCijXJZhd5zTCfVlViXKWVGOn1d9hJmVTI",
  // PAYPAL_CLIENT_ID:
  //   "AVGSCRet9DZ7Ct0uNXIXGlZDO4EIlbnmGty4_jUvnG5Wn0GPTYJudDiB1tqkM2srJGWNZPEE1ZKt4_71", // production
  // PAYPAL_CLIENT_ID:
  //   "AQod8JtRRk59F5HjcGOH7ZNymA7N6s2B1WhXH_g_UCBY40Y1LPSt0fxhdaR2rYmIQPNP2k7uZ5gL95Oe", // sandbox
  PAYPAL_CLIENT_ID:
    "AX13y8rAWuqgOE9pVpAM__dMWFzkjG89bHU-ulECTDkjM13a0yoj3_R39ezdoJMOBQNtEGTBn4VWvxKa", // sandbox
};
