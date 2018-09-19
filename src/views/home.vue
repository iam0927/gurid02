<template>
  <div>
    <navBar />
    <router-link :to="{ path: '/userDetails' }">用户详情</router-link>
    <router-view/>
  </div>
</template>

<script>
import navBar from '../components/navBar/navBar'
export default {
  components: {
    navBar
  }
}
</script>

<style lang="less" scoped>
  div {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      border: 1px solid #000;
      width: 100%;
      height: 80px;
      background: green;
    }
  }
</style>
