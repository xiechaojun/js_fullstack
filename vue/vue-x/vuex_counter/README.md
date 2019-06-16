vue 开发 两部分
组件开发（协作） vuex 数据管理
（应用程序的数据流 难）

store 超市 new VuexStore({
  state
})
中央 组件 地方
读 this.$store.state.count

写 actions,mutations getters
vuex不是什么时候都要 大项目离不开
公司的概念 
CEO 旅梦 state 100W
财务 mutations 唯一可以修改state的地方
审核一下，对状态的修改是否是被允许的

- Vue 实现核心mvvm,其他的通过Vue.use()插入进去
  this.$store
  this.$router
读
写？