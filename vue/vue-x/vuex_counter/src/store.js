import Vuex from 'vuex';
import Vue from 'vue'
import { resolve } from 'url';

Vue.use(Vuex);
// CEO 
const state = {
  count:0
}
// 组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
//改变  唯一可以修改状态 state
// 职责 财务
const mutations = {
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}
// 动作 部门 不能修改state
const actions = {
  increment:({ commit }) => commit('increment'),
  decrement:({ commit }) => commit('decrement'),
  // actions里不可以修改state，但是可以读
  incrementIfOdd({commit,state}){
    if ((state.count+1) % 2 === 0){
      commit('increment');
    }
  },
  incrementAsync () {
    // actions axios 异步取数据.....
    setTimeout(() => {
      commit('increment');
      resolve();
    },2000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})