数组的时候
const this_age = ages.find((age)=>age > 18);
对象的时候
const this_age = ages.find((age)=>age.age > 18);
区别多了一个age.age  也可以写成age.['']

数组有顺序，对象没有顺序要求