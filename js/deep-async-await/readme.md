## async
async 函数就是 Generator 函数的语法糖。

## Generator 函数
```js
function* test() {
      function foo() {
        console.log(789);
        return 123;
      }
      console.log(1);
      let a = yield foo()
      console.log('a',a)
      let b = yield 2
      // yield 2 => 10 let b = 10 传参b才有值
      console.log('b',b)
      let c = yield 3
      console.log('c',c)
      // yield 1
      // yield 2
      // yield 3
    }
    // 惰性的函数
    var g = test();
```
next调用可以传值，传给上一个yield
通过 g.next()一步一步调用  每一步调用执行到 yield 关键词
通过传参 可作为上一个 yield 语句的返回值

## 
{
  test:/\.js$/
  use:['babel-loader']
}
.babelrc

## Promise.resolve
返回 Promise
1. 如果是接收一个promise 返回该 promise
2. 如果是一个值 那么resolve(该值)