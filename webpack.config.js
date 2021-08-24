const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  modules: {
      rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: 'asset/resource',
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
           },
      ],
  },
};