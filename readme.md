1 == true    true 
2 == true    false 
1 === true    false 
2 == false    false 
"0"  == false  true
[] == ![]  true
![]   false 


js里面有7个假值
undefined
null 
+0
-0
NaN
""
false


[] == false    true

this在全局指向window 在构造函数下指向调用它的对象

--save生产环境 会打包上线的
--dev开发环境 不会上线


- 43道javescript面试题
 1. 对于箭头函数，this关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！
 2. 一元加号会尝试将boolean类型转换为数字类型。 true被转换为1，false被转换为0。
 3. 译者注：==会引发隐式类型转换，右侧的对象类型会自动拆箱为Number类型。当我们使用==运算符时，它只检查它是否具有相同的值。 他们都有3的值，所以它返回true。
 4. 您不能像使用常规对象那样向构造函数添加属性。 如果要一次向所有对象添加功能，则必须使用原型。
    Person.prototype.getFullName = function () {
      return `${this.firstName} ${this.lastName}`;
    }
  5. 