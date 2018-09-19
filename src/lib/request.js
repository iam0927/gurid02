import axios from 'axios'
import qs from 'qs'

// const testURL = process.env.testUrl
// const preURL = process.env.preUrl
// const proURL = process.env.proUrl

const baseURL = process.env.baseUrl
const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Pragma': 'no-cache',
  'Expires': 0
}
// 这个方法是返回一个axios实例
const httpCreate = (baseURL, transformRequest) => {
  const config = {}
  if (transformRequest) {
    config.transformRequest = transformRequest
  }
  return axios.create(Object.assign({
    baseURL,
    timeout: 20000,
    withCredentials: true,
    headers
  }, config))
}
export const httpForm = httpCreate(baseURL, [function (data, headers) {
  return qs.stringify(data)
}])
export const httpJson = httpCreate(baseURL)
