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
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');



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

        return config;
    }
}))));


module.exports = {
    ...webpackConfig,
    distDir: 'build',
}
