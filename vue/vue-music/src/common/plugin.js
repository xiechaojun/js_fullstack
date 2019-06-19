let Toast = {}
Toast.install = function (Vue,options) {
  let opt = {
    defaultType:'center', //默认显示的位置
    duration:'1500'  //持续的时间
  }
  for (let property in options){  //对象
    opt[property] = options[property]  //使用options的配置 把options里面的东西完整的拿出来给opt用
  }
  Vue.prototype.$toast = (tips,type) => {
    if (type) {
      opt.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length){   //document.getElementsByClassName获取下来的是数组
      return //如果toats此时在页面上是出现状态就return 
    }
    let toastTpl = Vue.extend({
      template:'<div class="vue-toast toast-' + opt.defaultType +'">' + tips +'</div>'
    })
    let tpl = new toastTpl.$mount().$el
    document.body.appendChild(tpl)
    setTimeout(() => {
    document.body.removeChild(tpl)
    },opt.duration)
  }
  ['bottom','center','top'].forEach(type => {
    Vue.prototype.$tast[type] = (tips => {
      return Vue.prototypr.$toast(tips,type)
    })
  })
}