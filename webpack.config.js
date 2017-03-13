var path = require("path");
module.exports = {
  entry: {
    app: ["./app/index.js"]
  },

  module: {
   loaders: [
     {
       test: /\.js|.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-0'],
         plugins: ['react-html-attrs', 'transform-class-properties']
       }
     }
   ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    port: 9090,
    host: '127.0.0.1',
    hot: true,
    contentBase: 'build/',
    stats: { colors: true },
    historyApiFallback: true
  }
};
