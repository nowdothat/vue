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

#升级webpack4的流程分析
  first
    ``将build/config文件夹下的文件全部删掉了，因为@vue/cli-service，支持0配置``
  second
    ``新建vue.config.js--@vue/cli-service的需要
    新建babel.config.js--@vue/cli-plugin-babel的需要
    ``
  third
    修改package.json的内容及启动方式

#postcss
vue-loader 支持通过 postcss-loader 自动加载同一个配置文件：

postcss.config.js
.postcssrc
package.json 中的 postcss
