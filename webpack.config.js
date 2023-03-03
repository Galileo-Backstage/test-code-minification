const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "galileo",
    projectName: "react-single-spa-starter",
    webpackConfigEnv,
    argv,
  });

  const updated = merge(defaultConfig, {
    // modify the webpack config however you"d like to by adding to this object
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [new Dotenv()],
    output: {
      filename: "main-es2015.js",
      // libraryTarget: "umd",
    },
  });

  /*Need to remove @galileo/* packages*/
  updated.externals = ["single-spa", "react", "react-dom"];

  return updated;
};
