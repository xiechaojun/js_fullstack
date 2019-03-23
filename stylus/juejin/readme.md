## css 预编译语言stylus
写的是stylus.styl 在浏览器端运行的是.css
前端工作流在发生改变
界面开发工作被重新定义了，从小米加步枪变生产线
stylus main.css -o main.css
stylus起到了编译功能 -o 输出
stylus 提供了css不具备的变量定义，模块化，函数,快捷，新的语法
-w watch 监听文件的修改
vertical-align middle图片居中
 1.img
      vertical-align middle
2.display inline-flex
    align-items center 垂直方向上居中

1. 可以定义变量
2. 可以减少输入{}：；
3. 函数
4. 允许嵌套
.book-bought购买模块
    .label
        img

&引用上一级的层次类名，同时可以缩进，
省去重复上一次的选择

flex（弹性布局）是css在移动时代最爽的布局方案，适用于手机端
flex 1占据除了兄弟元素外的一整行flex-grow 1同理
子元素们对齐方式，水平主轴上 justify-content flex-end
纵轴 align-items center
传统方案是img+兄弟节点 vertical-align middle（纵？）

flex的考点 自适应，多设备跨终端访问宽度
1. flex:1比例划分，只给一个元素设置，那他将占据其它元素之外的所有
2. 弹性布局是父元素与多个子元素之间的关系
    水平对齐justify-content
    垂直对齐align-items
3. 剩余空间 flex-grow 可以用来分配空间 flex-grow：1 只给一个元素设置，那他将占据其它元素之外的所有