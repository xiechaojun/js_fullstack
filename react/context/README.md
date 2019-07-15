## context 
跨组件之间数据传递
this.props 父组件向子组件再向孙组件传递
context 可以跳过子组件直接传向后代组件(孙组件及以下)
被react-router  react-redux 广泛使用
## 问题
shouldComponentUpdate生命周期  默认 return true
false 不更新 
尽可能少渲染 
如果中间某个组件 shouldComponentUpdate  return false 了  后代组件不会更新

## context 16
