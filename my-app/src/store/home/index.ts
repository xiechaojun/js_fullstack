import {State} from '@/store/interface';
import {Commit} from 'vuex';
import {getMovieList} from '@/api/movie';
const getters = {

}

// const a:String = '1';
const state: State = {
  movieList:[
    {
      name:'扫毒2',
      title:"刘德华",
      id:"1373745413"
    }
  ]
}

const mutations = {

};

const actions = {
  //跟api的交流  前后端的分离点 
  //commit mutations
  async movieList(context:{commit:Commit},cate:string){
    const res = await getMovieList(cate)
      .then((response) => response)
    return res;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}