// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
        splitChunks: false
    }
  },  
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Kurs Kayıt'
      return args
    })
  },
  transpileDependencies: []
}