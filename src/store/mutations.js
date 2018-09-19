import * as types from './mutation-types'
export default {
  [types.IMG_URL] (state, msg) {
    state.img_url = msg
  },
  [types.SET_USER] (state, msg) {
    state.registerMsg.calendar = msg.calendar
    state.registerMsg.email = msg.email
    state.registerMsg.hobby = msg.hobby
    state.registerMsg.phoneNumber = msg.phoneNumber
    state.registerMsg.sex = msg.sex
    state.registerMsg.studyExperience = msg.studyExperience
  },
  [types.LOGIN_OUT] (state, msg) {
    state.userInfo = msg
  },
  [types.SET_ROLES] (state, msg) {
    state.roles = msg
  }
}
