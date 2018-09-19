<template>
  <div class="login_paper">
    <div class="login_form">
      <h1>你好世界</h1>
      <p>
        <span>手机号:</span>
        <Input v-focus v-model="phoneNumber" placeholder="请输入手机号" style="width: 300px"></Input></p>
      <p>
        <span>密 码:</span>
        <Input v-model="password" type="password" placeholder="请输入密码" style="width: 300px"></Input></p>
      <div class="submit_menue">
        <Button type="success" @click="login">登录</Button>
        <router-link :to="{name: 'register'}">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneNumber: '',
      password: ''
    }
  },
  directives: {
    focus: {
      inserted: function (el, binding, vnode) {
        console.log(el)
        console.log(binding)
        console.log(vnode)
        vnode.child.$refs.input.autofocus = true
      }
    }
  },
  methods: {
    login () {
      if (!this.phoneNumber || !this.password) {
        this.$Message.warning('请输入账号或密码！')
        return
      }
      this.loginSy()
    },
    loginSy () {
      let obj = {
        phoneNumber: this.phoneNumber,
        password: this.password
      }
      this.$store.dispatch('get_userInfo', obj).then((data) => {
        console.log(data)
        this.$router.push({ path: '/' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_paper {
  background: url('../assets/images/login_bac.jpg') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .login_form {
    width: 500px;
    padding: 50px;
    transform: translateY(-120px);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    h1 {
      color: white;
    }
    p {
      margin-top: 15px;
      span {
        display: inline-block;
        width: 50px;
        color: white;
      }
    }
    p:nth-of-type(2) {
      margin-bottom: 15px;
    }
    .submit_menue {
      display: flex;
      justify-content: space-around;
      a {
        color: white;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
}
</style>
