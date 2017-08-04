module.exports = (options, req) => ({
  sourceMap: options.mode === 'development',
  presets: [
    require('poi-preset-typescript')()
  ]
})