# 清除浮动的几种方法
1. 在父元素底部加上一行代码 <div style="clear:left或者 both"></div> both为左右浮动都清除
2.  在content父容器里面加一个clearFix （不建议用）
.clearFix {
            float: left;
        }