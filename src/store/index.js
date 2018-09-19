import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { getToken } from '@/utils/utils'

Vue.use(Vuex)

const state = {
  img_url: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=6df7edf1123853438ccf8027ab12b01f/2e2eb9389b504fc28dbfae98e7dde71191ef6d4e.jpg',
  registerMsg: {
    calendar: '',
    email: '',
    hobby: '',
    phoneNumber: '',
    sex: '',
    studyExperience: ''
  },
  userInfo: getToken('loginNews'),
  roles: []
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
