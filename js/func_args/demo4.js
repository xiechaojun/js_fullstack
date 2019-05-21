// function sum(a,b){
//     return a + b;
// }
// console.log(sum(1,2))  //希望返回3
// console.log(sum(undefined,10))  //希望返回 报错，第一个参数为空
// console.log(sum(10)) //报错，第二个参数为空
// // 不允许改写函数体
function err(msg){
    throw new Error(msg);
}
function sum(a = err('第一个参数为空'),b = err('第二个参数为空')){
    return a + b;
}
console.log(sum(1,2))  
console.log(sum(undefined,10))  
console.log(sum(10)) 
