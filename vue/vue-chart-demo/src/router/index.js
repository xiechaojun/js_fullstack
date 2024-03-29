import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import {getToken} from '@/utils/auth';
Vue.use(Router)

// 当进入/  实现 如果没有toke 就去登录
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')  //进入login页面才加载
    }
  ]
})

let token = getToken();
const whiteList = ['/login','/signup','/auth-redirect']
router.beforeEach((to,from,next) => {
  if (token){

  } else {
    console.log(to.path);
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router;

// to from $router path / 

