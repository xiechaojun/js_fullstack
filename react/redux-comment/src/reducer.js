/**
 * [
 * {userName:'',content:''}
 * ]
 * type:
 */
export default function(state = [],action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      const {userName,content} = action;
      return [{userName,content},...state]; //插到数组的第一项
      default:
        return state
  }
}