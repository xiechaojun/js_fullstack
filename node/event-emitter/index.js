const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev = new Ev();



// 绑定事件
['search','choose'].forEach(key => {
  //search = key 
  //...arg把所有剩余的函数参数整理为数组
  //args - []; 处理参数不固定
  //...args 的作用 fn(arg1,arg2,arg3);   打散
  ev.on(key,async function (...args) {
    const fn = require(`./lib/${key}`);
    const res = await fn(...args);
    // console.log(...args);
    console.log('res 执行的结果',res);
    ev.emit('handle',key,res,...args);
  })
})
ev.on('afterSearch',function (data,keyword) {
  if (!data || !data.result || !data.result.songs) {
    console.log(`没搜索到 ${keyword} 的相关结果`)
    return;
  }
  const songs = data.result.songs
  ev.emit('choose', songs)
})
ev.on('handle',function (key,res,...args) {
  switch(key){
    case 'search':
      return ev.emit('afterSearch',res,args[0]);
  }
})
function main(arg){
  let keyword = arg[2];
  // console.log(keyword);
  ev.emit('search',keyword);
}
// function main(arg) {
//   console.log(arg);
//   if(!arg || !arg.length) {
//     let arg = arg[2];
//   }
//   console.log(argv);
// }
main(process.argv);