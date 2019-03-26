三角恋
三者？构造函数 Constructor 函数是构造类的基石
prototype属性 原型 
实例 instance 

其实Js没有类，只有对象，所有的一切都是通过原型来拿到的

通过构造函数Person 生成了person（对象）这个实例，同时我们在Person的原型Person.prototype上
定义了getName方法

构造函数 运行的 ，new Person() this->新的实例，空对象Person{} .name
实例怎么拿到原型对象的方法或属性？  
1. 任何对象都有__proto__私有属性，会告诉你这个对象的出处是哪。实例跟类之间没有血缘关系，__proto__
2. 构造函数有prototype属性
3. 原型对象上有constructor属性指向构造函数

js面向对象是基于原型的

原型链