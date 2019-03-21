# 清除浮动的几种方法
1. 在父元素底部加上一行代码 <div style="clear:left或者 both"></div> both为左右浮动都清除
2.  在父元素css中加上
div.content(看情况){
    float: left;
}
在content父容器父元素里面加一个clearFix （不建议用）
.clearFix {
            float: left;
        }
3. 使用css中的伪类after，给父元素div添加一个clearFix的class类
.clearFix::after{
            content:'';
            clear: both;
            display: block;
            /* 如果content里面有东西，则设置以下 */
            height:0;
            visibility: hidden;
        }
4. 利用BFC简称（块级格式化上下文）的效果来弥补父容器的高度塌陷
  .content {
            /* overflow: hidden scroll auto;BFC概念 */
        }
5. 尼古拉斯大师 方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果(最不推荐使用的)
.content{
    display:table;
}