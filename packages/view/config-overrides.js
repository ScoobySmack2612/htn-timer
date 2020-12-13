const { override, addBabelPlugin, addBabelPreset, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addBabelPlugin('babel-plugin-styled-components'),
    addWebpackModuleRule({ test: /\.tsx?$/, use: 'ts-loader' })
);
