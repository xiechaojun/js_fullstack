// [1,2,3,4] 求出它的平均值
const average = (...nums) => nums.reduce((acc,val) => acc+val,0) / nums.length // rest 运算符
console.log(average(...[1,2,3,4])) // ...是spread 运算符