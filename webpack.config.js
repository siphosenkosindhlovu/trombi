const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    filename: 'main.js'
  },
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
  ]
}
