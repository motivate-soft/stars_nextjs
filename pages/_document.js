import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>

                    <meta name="author" content="Stars of Boston"/>
                    <meta name="keywords" content=""/>
                    <meta name="description"
                          content="Your short-term apartment rental solution in the greater Boston area"/>
                    <link
                        rel="icon"
                        href="/static/image/favicon.png"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=PT+Serif:wght@400;700&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>

                    <script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCijXJZhd5zTCfVlViXKWVGOn1d9hJmVTI&libraries=places"></script>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
