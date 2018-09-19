import { httpJson } from './request'

// 按组件导出
export const LOGIN = {
  login (params) {
    return httpJson.post('/springboot/login', params)
  }
}
export const HELLO = {
  register (params) {
    return httpJson.post('/springboot/register', params)
  }
}
