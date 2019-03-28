类型 typeof 
复杂数据类型就是 object 
Array 是可遍历的对象 数组
Function 是可运行的对象
JSON Object对象字面量是可枚举的对象 for(keyin)
typeof 半吊子，typeof[] =>object没有办法跟JSON区分开来
有一个方法可以区分Array 和JSON Object

1. 用对象字面量来做面向对象 区别于原型式的 它没有被实例化的需要 Type. 将在程序中就做类型检测
var Type = {};组织代码
2. 使用for循环来一次性加完；会出现同步异步问题（异步调用），所以使用闭包来将type作用域封闭起来，使用立即执行函数同步执行类型检测函数的定义，因为函数嵌套形成了闭包，当函数再被调用时（异步），会找到定义时刻的type
3. Object.prototype.toString.call(obj)
Object?祖先，顶级对象 函数才有prototype属性，原型上有这样的toString方法（toString指向this），解决typeof的尴尬，toString会返回一个字"[object object]"
数组为[object Array] 方法的执行方式可以被改变  Object.prototype.toString.call(obj)



JSON不需要被new
String字符串

Object.prototype.toString()
Object.prototype.toString.call([]) //[object Array]
Object.prototype.toString.call(123) //[object Number]
Object.prototype.toString.call("李老板有钱") //[object String]