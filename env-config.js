const prod = process.env.NODE_ENV === 'production';

module.exports = {
    BACKEND_URL: prod ? 'https://stars-website-react-2.ue.r.appspot.com' : 'http://localhost:8000',
    RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
    PIXEL_ID: "339821513993100",
    GA_ID: "UA-129107246-1",
    ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db",
};