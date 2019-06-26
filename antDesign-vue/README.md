## mapState辅助函数

```	js
import { mapState } from 'vuex' 
// computed: mapState(['app']), //如果名称是对应的话，可以直接这样写
  computed: mapState({
    appTwo: state => state.app
  })
上面2种引入方法的结果是一致的

----------------------调用-------------------
  methods: {
    test() {
      this.$store.commit('testDelete','test');
      console.log(this.appTwo.test,'-===->>>')
      我们可以直接从this.appTwo里面拿到state.app这个对象
    }
  }
```



## getter函数

```	js
目录结构为 
src
└─ store
   ├─ getters.js
   └─ index.js

const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  welcome: state => state.user.welcome,
  roles: state => state.user.roles,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab
}

export default getters

------------------------调用-------------------------
  import store from './store'
  store.getters.roles
```



## G2应用

```	js
安装2个包 g2-vue @antv/g

--------------------------模板文件如下-----------
<template>
  <div>
    <LineChart
      :data="lineData"
    />
  </div>
</template>
<script>
import createG2 from 'g2-vue'

let nowData = new Date()
let lineData = [
  {'time': (nowData.getMonth()+1)+"-"+(nowData.getDate() - 1), 'pm25': 10},
  {'time': (nowData.getMonth()+1)+"-"+nowData.getDate(), 'pm25': 20},
  {'time': (nowData.getMonth()+1)+"-"+(nowData.getDate()+1), 'pm25': 40}
]

const LineChart = createG2(chart => {
  chart.line().position('time*pm25').color('pm25').shape('spline').size(2)
  chart.render()
})

export default {
  components: {
    LineChart
  },
  data () {
    return {
      lineData: lineData
    }
  }
}
</script>
```



## 路由判断

步骤如下： 登录，赋值decide,判断store.length

if need request

1. 获取个人信息(name,avatar,role...)

2. 生成路由表, addRoutes()

summary: 因为路由表里面的信息就是对应url的输入地址，如果生成的路由表里面没有用户所输入的值，那么默认返回404页面。如果使用history模式，后端需要返回首页地址给前端进行处理