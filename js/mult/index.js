// 缓存计算结果 不要重复计算 计算了的保存 哪里？ 方式？
let cache = {};
// key string  变成 arguments 类数组
function mult(){
    // 参数数量是不定的
    let a = 1;
    let key = Array.prototype.join.call(arguments,',');
    // args 相关 数组 => string key?
    // [1,2,3,] => "1,2,3," "1-2-3"
    if (cache [key]) {
        console.log('从缓存中取');
        return cache[key];
    }
    for (var i = 0,l = arguments.length;i < l;i++){
        a = a * arguments[i];
    }
    cache[key] = a;
    return a;
};
console.log(mult(1,2,3));