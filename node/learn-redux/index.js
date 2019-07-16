const { createStore,combineReducers } = require('redux');
// action.type  是一个常量 决定了这次dispatch要干什么
// reducer可以收到action的信息
const add = {
  type:'INCREMENT'
}
const reduce = {
  type:'DECREMENT'
}
// 第一步设置默认值 然后加 设置action.type  ADD_FILM
// type + payload
function filmReducer(state = [],action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state,action.film];
    default :
      return state;
  }
}
function reducer (state,action) {  // 一定要返回值
  console.log('reducer->>>>',action)
  // console.log('reducer触发了')
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
const index = combineReducers({
  count:reducer,
  films:filmReducer
})
// createStore 只接收reducer
const store = createStore(index);  // createStore时先触发一次
store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());  // 0 
store.dispatch(add);
store.dispatch(add);
// console.log(store.getState()); 
store.dispatch(reduce);
// console.log(store.getState()); 
store.dispatch({
  type:'ADD_FILM',
  a:1,
  b:2,
  id:0,
  film:{name:'猪猪侠大战葫芦娃'}
})