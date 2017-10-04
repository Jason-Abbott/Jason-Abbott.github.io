const source = "./src/";
const target = "./";
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
const context = path.join(__dirname, source);

module.exports = {
   entry: {
      app: source + "app.tsx"
   },
   output: {
      path: path.join(__dirname, target),
      filename: target + "[name].js",
      publicPath: "/"
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: [/node_modules/, /test\.tsx?$/, /src\/types\//],
            loader: ["awesome-typescript-loader"]
         },
         // Extract CSS and SASS imports into separate combined files.
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
               fallback: "style-loader",
               // disable URL following (fonts and images)
               // https://github.com/webpack/css-loader
               use: ["css-loader?-url&minimize", "sass-loader"]
            }),
         },
         // Do not bundle image references but leave them as regular URLs.
         {
            test: /\.(jpg|jpeg|gif|png)$/,
            exclude: /node_modules/,
            use: "url-loader?limit=1024&name=img/[name].[ext]"
         }
      ]
   },
   resolve: {
      extensions: [".js", ".ts", ".tsx", ".json", ".sass"],
      plugins: [new TsConfigPathsPlugin()]
   },
   plugins: [
      new CheckerPlugin(),
      new ExtractTextPlugin({
         filename: "[name].css",
         allChunks: true
      }),
      new webpack.LoaderOptionsPlugin({
         minimize: true,
         debug: false,
         sassLoader: {
            includePaths: [ path.resolve(__dirname, source) ]
         }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.SourceMapDevToolPlugin({
         test: [/\.js$/],
         exclude: [/common\./],
         filename: target + "[name].js.map",
      }),
      new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: false,
            screw_ie8: true
         },
         // mangled variables are trouble for source maps
         mangle: false,
         output: { comments: false },
         sourceMap: true
      }),
      // production Node environment needed to trigger optimized React build
      new webpack.DefinePlugin({
         "process.env.NODE_ENV": JSON.stringify("production")
      })
   ]
};