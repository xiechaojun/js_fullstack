大前端全栈开发思路 

在前端vue或react项目目录下建一个server  用来做mvc就好了

- 前后端分离 
  后端负责提供/api 在server目录下
  前端在src/
  后端就负责 API 服务

1. 后端在3000，未来等着ngnix 80 -> 3000
  / api API服务，等着前端调用  / vue打包好的dist 目录 index.html readFile返回
2. 前端一般在8080 vue-router vuex axios
3. 前后端连调 合作需求是 api 数据->vue 组件的 data
4. 跨域问题 前端面试最重要的问题 
  domain 域名，
  端口，cross domain
  前端不允许 安全问题
  前端考虑， 页面上显示的要安全
  后端考虑


- 前端
  subdomain domain port 都一样
  js 同源机制，相同的源是值得信赖的，可以通信 
  前后端 8080:3000 跨域了
  先不跨域 fetch('/api/user/login') 404   补全8080
  3000  /api/  proxy代理解决 
  匹配/api/ 去到target:http"//localhost:3000/api,
  changeOrigin:true
  发出去的请求也不跨域