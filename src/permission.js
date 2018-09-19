import router from './router'
import store from './store/'
import { getToken } from '@/utils/utils'
import { Message, LoadingBar } from 'iview'

// m模拟后台返回的路由规则
const permissionList = [{
  menu_name: '注册',
  menu_code: 1010,
  is_show: false
}]

const whiteList = ['/login', '/register'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  if (getToken('loginNews')) {
    if (to.path === '/login' || to.path === '/register') {
      next({ path: '/' })
    } else {
      if (store.getters.GetRoles.length === 0) { // 判断用户信息是否拉取完成
        console.log(1111111)
        store.dispatch('login_userInfo', permissionList).then(res => { // 拉取用户信息
          store.dispatch('GenerateRoutes', permissionList).then(res => {
            console.log(store.getters.GetRoles)
            router.addRoutes(store.getters.GetRoles) // 动态添加可访问的路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.warning('请重新登录!')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1 || whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to) => {
  LoadingBar.finish()
})
