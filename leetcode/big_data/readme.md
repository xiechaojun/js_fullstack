一万条数据 要插入网页中 怎么做?
DOM展示 

- 内存开销最大的在动态的DOM上
    DOM开销是最耗内存的
    createElement被调用了一万次
    优化？
    cloneNode 节点克隆
- innerHTML
    10000条DOM显示是负担
    延迟加载 图片
    分屏加载 html
    浏览器的负担是绘制html 重绘和重排 导致网页卡顿的原因 

- 不能一下搞定 分屏加载 
    10000 
    - 数据分页 page 上一页的数据 当前页数据 下一页的数据 
        前端自主分页
    - 防抖 + onscroll?
        跟onReachBottom 一样 
        当前的数据是否超出了视窗 viewport 