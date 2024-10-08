const path = require('path');

module.exports = {
  entry: './src/index.jsx', // your main file where you import the component
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // Output file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development' // Change to 'production' when ready
};