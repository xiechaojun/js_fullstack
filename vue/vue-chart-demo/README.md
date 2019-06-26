- vuex 大型化 由modules 来支持，
  数据通过this.$store.user.    来找到
- user 
  state  info 登录 注册 退出
  actions 
  mutations 
  getters 返回值是一个函数 所以要这么获取const getters = {   
  token:state => state.user.token,
  avatar:state => state.user.avatar
}
  vuex 先设计  搭好结构 围绕着我们的状态token令牌环  this.$store.user.token
  跳转到登录页？
- 登录鉴权
  1. 延迟加载路由，性能优化