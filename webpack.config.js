const path = require('path');
const pkg = require('./package.json')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './min'),
    publicPath: '/min/',
    filename: `${pkg.name}.min.js`,
    library: pkg.name,
    libraryTarget: 'umd'
  }
}