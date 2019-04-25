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
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
third:
  在入口文件添加script即可实现px自动转rem操作
  <script>document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth ||  document.body.clientWidth) /10 + 'px';</script>

#表格转换excel
  first:
　　npm install -S file-saver xlsx
　　npm install -D script-loader

  second:
    导入文件，调用库

