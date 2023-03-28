module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    //path: '/dist',
    filename: 'igc-xc-score.js',
    libraryTarget: 'var',
    library: 'IGCScore'
  }
};