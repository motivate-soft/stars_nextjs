const withPlugins = require('next-compose-plugins');
const path = require('path');
const withTM = require('next-transpile-modules')([
    '@iso/components',
    '@iso/assets',
    '@iso/config',
    '@iso/lib',
    '@iso/ui',
    '@iso/redux',
    '@iso/containers',
]);
const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const prod = process.env.NODE_ENV === 'production';

// next.js custom configuration goes here
const nextConfig = {
    env: {
        // BACKEND_URL: prod ? 'http://localhost:8000' : 'http://localhost:8000',
        RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
        PIXEL_ID: "339821513993100",
        GA_ID: "UA-129107246-1",
        ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db",
    },
    distDir: 'build'
};

// fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => {};
// }

const webpackConfig = withTM(withFonts(withSass(withCSS({
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i,
            loader: "file-loader",
            options: {
                outputPath: '../static/assets/', // if you don't use ../ it will put it inside ".next" folder by default
                publicPath: '/static/assets/',
            }
        });

        const {resolve: {alias}} = config
        config.resolve.alias = {
            ...alias,
            "@components": path.join(__dirname, "components"),
            "@containers": path.join(__dirname, "containers"),
            "@redux": path.join(__dirname, "redux"),
            "@context": path.join(__dirname, "context"),
            "@styled": path.join(__dirname, "styled"),
            '@iso/assets': path.join(__dirname, 'shared/assets'),
            '@iso/redux': path.join(__dirname, 'shared/redux'),
            '@iso/config': path.join(__dirname, 'shared/config'),
            '@iso/components': path.join(__dirname, 'shared/components'),
            '@iso/containers': path.join(__dirname, 'shared/containers'),
            '@iso/lib': path.join(__dirname, 'shared/library'),
            '@iso/ui': path.join(__dirname, 'shared/UI'),
        }

        return config;
    }
}))));


module.exports = {
    ...webpackConfig,
    distDir: 'build',
}


// module.exports = withPlugins(
//     [
//         withTM,
//         // withOptimizedImages,
//         withFonts,
//         withSass,
//         withCSS,
//         [
//             withBundleAnalyzer,
//             {
//                 analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//                 analyzeBrowser: ['browser', 'both'].includes(
//                     process.env.BUNDLE_ANALYZE
//                 ),
//                 bundleAnalyzerConfig: {
//                     server: {
//                         analyzerMode: 'static',
//                         reportFilename: '../bundles/server.html',
//                     },
//                     browser: {
//                         analyzerMode: 'static',
//                         reportFilename: '../bundles/client.html',
//                     },
//                 },
//             },
//         ],
//     ],
//     nextConfig
// );
