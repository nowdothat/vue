module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev, // 模板css文件是否要抽离
    cssModules: {
      //'localIdentName': 定义vue中 css中，可以将某个类名 编译为对应的一个独有类名（实现样式独立模块化）
      localIdentName: isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',//生产环境可以直接用hash来命名类，减少文件体积 
      camelCase: true, // 使用 驼峰法 将 ‘xxx-xxx’形式的类名 转化为 驼峰写法‘’ 
    }
  }
}