//for anyone edits this, DO NOT TOUCH IT for WEB configs.
//go to webpack.config.js and apply it there instead.
//changing this file may cause IOS build to completely broken, so be aware.

module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
