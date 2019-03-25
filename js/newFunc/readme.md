new是JS中的一个关键字
new运算符创建一个用户定义的对象类型的实例
1. 构造函数上有prototype属性，值为对象
2. 类 由 构造函数 + prototpe原型对象 组成
3. typeof 类型 instanceof 实例

1. new结果是返回一个新的对象，具有构造函数里的属性？
2. 对象要有原型对象，指向构造函数的原型对象

1. 空对象来了 new Object()
2. 如何将构造函数里的属性交给空对象呢？
contructor本身就是为他人服务的 实例服务？ 还是为任何对象服务，都可以
函数内部的this是由函数运行时的方式决定的 new Otaku()
Otaku.call(obj,...);就是作为普通函数被运行
call apply可以指定函数运行时this,手动指向obj
3. Contructor构造函数 拥有prototpe属性，在上面添加属性和方法，可以被实例引用到。
对象上有__prototype__ 属性 这个对象的原型对象是谁？对象也可以拿到原型对象行的属性或方法

JS的面向对象是基于原型的

什么叫对象？ 对象是属性和方法的集合
构造函数可以给些属性，其它的通过原型对象来拿到
obj.__proto__ 指定的话= Otaku.prototpe 不指定的话就是Object（顶端）
对象一定有一个__proto__属性