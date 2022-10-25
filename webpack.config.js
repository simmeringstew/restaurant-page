const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    remove: "./src/remove.js",
    createHome: "./src/createHome.js",
    createMenu: "./src/createMenu.js",
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};