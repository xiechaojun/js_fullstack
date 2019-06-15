import Vue from 'vue';
import Vuex from 'vuex';
// 启用状态应用管理
Vue.use(Vuex);
// 全局共享状态
const state = {
  count:0
}
// 中央,
// state要改，actions 是交给你调用的，actions（上报） 名字是 increment(交给你调用的) 不能直接修改state.count
// state.count++ 只有mutations才可以修改
// 只有actions 才可以触发同mutations改变，
// 只有mutations 才可以修改state
// 直接修改状态
const mutations = {
  increment (state) {
    state.count++;
  }
}
const actions = {
  increment:({ commit }) => commit('increment')
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})