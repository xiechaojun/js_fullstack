小程序的架构
/js
游戏的一部分 main.js是入口
支持 es6 模块化 
每个模块都是一个类 最新的，
require module.exports es5 commonJS node

libs/ game engine
- adapter.js 适配
    小程序是使用canvas来写游戏的 
    小游戏里不支持DOM BOM 
    开发方式和h5游戏一样，