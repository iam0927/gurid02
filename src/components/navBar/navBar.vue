<template>
    <nav>
      <h2>个人中心</h2>
      <div class="demo-avatar">
        <Avatar icon="person" size="large" :src="imgUrl"/>
        <Button type="error" @click="logOut">注销</Button>
      </div>
    </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      theme1: 'dark'
    }
  },
  computed: {
    ...mapGetters(['imgUrl'])
  },
  methods: {
    ...mapActions(['FedLogOut']),
    logOut () {
      this.FedLogOut().then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style lang="less" scoped>
  nav {
    height: 80px;
    padding-right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5cadff;
    h2 {
      flex: 1;
      padding-left: 50px;
    }
    .demo-avatar {
      flex: 1;
      text-align: right;
      button {
        margin-left: 20px;
      }
    }
  }
</style>
