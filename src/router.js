import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
Vue.use(VueRouter)
const routes = [
  {path: '/login',component:Login},
  {path:'/',redirect:'/login'},
  {path:'/home',component:Home}
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to代表将要访问的路径
  //from代表从哪个路径跳转而来
  //next是一个函数,表示放行
  //next()放行 next('/login)强制跳转
  if(to.path==='/login')return next()
  //获取token token存在则放行,不存在则强制跳转登录页面
  const tokenStr= window.sessionStorage.getItem('token')
  if(!tokenStr)return next('/login')
  next ()
})


export default router
