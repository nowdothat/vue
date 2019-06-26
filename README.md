# master分支手动编写webpack4实例

# 其他分支为cli生成文件及升级和一些常用功能案例

-  webpack-cli3分支是3.6cli生成及一些常用功能
-  webpack4分支 是cli3.6升级至webpack4的项目实例

# 新增ant Design和路由判断
步骤如下： 登录，赋值decide,判断store.length

if need request

1. 获取个人信息(name,avatar,role...)
2. 生成路由表, addRoutes()



summary: 因为路由表里面的信息就是对应url的输入地址，如果生成的路由表里面没有用户所输入的值，那么默认返回404页面。如果使用history模式，后端需要返回首页地址给前端进行处理