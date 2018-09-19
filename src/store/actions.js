import { LOGIN } from '../lib/axios'
import { setToken, removeToken } from '@/utils/utils'
import { Message } from 'iview'
import { constantRouterMap } from '../router/index'

// console.log(constantRouterMap)

// 模拟后台返回的路由规则
// const permissionList = [{
//   menu_name: '注册',
//   menu_code: 1010,
//   is_show: false
// }]

// 根据路由规则筛选路由
let permissionRouter = function (role, router) {
  var accessedRouters = router.filter((item, index) => {
    if (item.meta) {
      for (var i = 0; i < role.length; i++) {
        if (item.meta.menu_code === role[i].menu_code) {
          return item
        }
      }
    }
  })
  return accessedRouters
}

export default {
  // 手动登录
  get_userInfo ({ commit }, obj) {
    return new Promise((resolve, reject) => {
      LOGIN.login(obj).then(res => {
        var data = res.data
        if (data.statusCode === '1') {
          commit('SET_USER', data.registerMsg)
          setToken('loginNews', { 'phoneNumber': obj.phoneNumber, 'password': obj.password }, { expires: 1 })
          resolve(data)
        } else {
          Message.warning('手机号或密码错误!')
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 自动登录
  login_userInfo ({ commit, state }, obj) {
    return new Promise((resolve, reject) => {
      LOGIN.login(state.userInfo).then(res => {
        var data = res.data
        commit('SET_USER', data.registerMsg)
        commit('SET_ROLES', obj)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 注销登录
  FedLogOut ({commit}) {
    return new Promise(resolve => {
      commit('LOGIN_OUT', '')
      removeToken('loginNews')
      commit('SET_ROLES', [])
      resolve()
    })
  },
  // 根据获取的路由规则，异步返回路由
  GenerateRoutes ({ commit }, data) {
    return new Promise((resolve, reject) => {
      // 根据路由规则处理路由
      var accessedRouters = permissionRouter(data, constantRouterMap)
      commit('SET_ROLES', accessedRouters)
      resolve()
    })
  }
}
