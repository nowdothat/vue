# postcss

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#postcss 转换px单位设置
first:
  安装postcss-px2rem 插件
second:
  在build/vue-loader.conf.js里面添加
  var px2rem = require('postcss-px2rem')
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
    或者
        postcss: [
          require('autoprefixer')({
            browsers: ['iOS >= 7', 'Android >= 4.1']
          }),
          px2rem({remUnit: 75})
        ]
third:
  在入口文件添加script即可实现px自动转rem操作
  <script>
    document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth ||  document.body.clientWidth) /10 + 'px';
    // 我直接设置成75px
  </script>
fourth:
  不想进行编译的，第一个首字母大写： example: h1{font-size:12Px}

#表格转换excel
  first:
　　npm install -S file-saver xlsx
　　npm install -D script-loader

  second:
    导入文件，调用库

#打包去除console.log
  first:
    npm i drop-console-webpack-plugin --save-dev
  second:
    const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin')
    new DropConsoleWebpackPlugin({
      drop_log    : true, 
      drop_info   : true,
      drop_warn   : false,
      drop_error  : false,
      exclude     : ['manifest']
    })
  third: 参数说明
    Name | type | default | Description
    ---- | ---- | ------- | -----------
    drop_log | Boolean | true | remove console.log(...)
    drop_info | Boolean | true | remove console.info(...)
    drop_warn | Boolean | false | remove console.warn(...)
    drop_error | Boolean | false | remove console.error(...)
    exclude   | Array | [] | exclude chunk