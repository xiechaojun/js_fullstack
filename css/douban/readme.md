标题H1-5 段落P
- css 命名词汇
feeds微博豆瓣等向下划加载更多的  feed-item *-item content
a标签为行内元素，做内容
- html结构及布局
从上到下，从左到右，语义化和功能性 
1. 结构套路
content>h3+p
2. 要舍得做盒子
3. a 作为盒子，在移动端是很正常的，
display:block行内转块级
4. 盒子模型 
文字line-height padding margin
5. 文字截断
tmall 商铺信息是由商家填的，它的高度，不被限制
display:-webkit-box;新的盒子模型，像flex（弹性布局）来划分父元素的空间，
overflow:hidden超出的隐藏
-webkit-line-clamp行数
—webkit-box-orient:vertical（垂直方向上约束）
6. 浮动 float:left right 图片等
离开文档流
在一个盒子里，将要浮动的元素写在最前面，左右布局
在flex（弹性）布局之前，我们一般借助于float来布局
图片的宽高？宽带用百分比，自适应的需求
高度怎么做？div padding-top：根据自身的宽度来做比例 100% 正方形
自适应设备里盒子的等比例设置 width百分比，高度用padding-top