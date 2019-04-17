目录 ，最像哪种数据结构 树
DOM 标签节点， 文本节点
一个目录下的所有文件/目录

- readdir 目录下的所有子元素
 I/O 耗时异步 callback解决回调 promise更好
 js是单线程，前端JS在DOM里 Ajax 异步，要把线程的控制权交给主线程

 js通过node来到了后端  整台服务器
 promise可以解决异步变同步，可不可以直接同步呢？
 readdirSync
 Sync同步 ， Asyna异步

 判断是否是js文件'a.js'.slice(-3) === 'js'
    /\.js/.test('aaaa.jsbbb')判断是否有.js  也为true 所以要匹配到结束的最后  加上$   /\.js￥/.test('aaaa.jsbbb') false
    /^1[0-10]$/^开始 $结束

- 正则表达式
 验证或匹配字符串或文本的规则是Object的一种
 用于快速检索文本，// ^开始 []{}范围 $结束 
 有test match exec方法
- 递归是树遍历的要素
        Root
   L          R
ll   lr    rl   rr
目录下有子目录，。。。。
目录下的所有文件
    文件以及交给子目录重复这件事。
复杂的事情分成N件简单的类似的事情  并且有退出条件 是文件，