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


<h1>该项目应用了postcss 转换px单位设置</h1>
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

<h1>表格转换excel</h1>
