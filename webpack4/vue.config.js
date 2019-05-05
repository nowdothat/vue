const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
function resolveDist(dir) {
  return path.posix.join('../../',dir)
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/static/admin'
  //   : '/',
  lintOnSave: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // indexPath: resolve('../../admin/index.html'),
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
    config.module
      .rule('svg')
      .uses.clear()
    config.module
      .rule('svg1')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
        publicPath: '/'
      })
      .end()
      .include
      .add(resolve('src/icons'))
      .end()
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8089,
    https: false,
    hotOnly: false,
    before: app => { }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
