/**
 * @type {Cypress.PluginConfig}
 */
const path = require('path');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const webpackLocaleConfig = require('../../webpack.config');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    const options = {
        webpackOptions: webpackLocaleConfig,
        watchOptions: {},
    };
    allureWriter(on, config);
    on('file:preprocessor', webpackPreprocessor(options));
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name==="chrome") {
            launchOptions.args.push('--use-fake-ui-for-media-stream')
            launchOptions.args.push('--use-fake-device-for-media-stream')
            launchOptions.args.push(`--use-file-for-fake-video-capture=C:\\ProgrammingProject\\WebStormProj\\Cypress e2e\\cypress\\fixtures\\akiyo_cif.y4m`)
        }
        return launchOptions
    })
}
