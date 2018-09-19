import Vue from 'vue'
import Router from 'vue-router'
// import register from '@/views/register'
// import Login from '@/views/login'
// import userDetails from '@/views/userDetails'
// import Home from '@/views/home'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/testRouter',
    name: 'testRouter',
    component: (resolve) => require(['@/views/test_router'], resolve),
    meta: {
      hidden: true,
      menu_code: 1010
    }
  }
]

const asyncRouter = [
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/views/login'], resolve)
  },
  {
    path: '/',
    redirect: '/userDetails',
    component: (resolve) => require(['@/views/home'], resolve),
    children: [{
      path: '/userDetails',
      name: 'userDetails',
      component: (resolve) => require(['@/views/userDetails'], resolve)
    }]
  },
  {
    path: '/register',
    name: 'register',
    component: (resolve) => require(['@/views/register'], resolve)
  },
  {
    path: '*',
    redirect: '/404'
  },
  { path: '/404', component: () => import('@/views/404') }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRouter
})
