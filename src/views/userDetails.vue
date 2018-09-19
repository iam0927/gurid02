<template>
  <div class="user_info">
    <section class="user_card">
      <Tabs>
        <TabPane label="手机号" icon="iphone" class="tabs_item">{{getUser.phoneNumber}}</TabPane>
        <TabPane label="性别" icon="transgender" class="tabs_item">{{getUser.sex}}</TabPane>
        <TabPane label="邮箱" icon="email" class="tabs_item">{{getUser.email}}</TabPane>
        <TabPane label="日期" icon="android-calendar" class="tabs_item">{{getUser.calendar}}</TabPane>
        <TabPane label="爱好" icon="heart" class="tabs_item">{{getUser.hobby}}</TabPane>
        <TabPane label="学历" icon="ios-book" class="tabs_item">{{getUser.studyExperience}}</TabPane>
    </Tabs>
    </section>
    <router-link :to="{name:'testRouter'}" class="test">点击跳转</router-link>
    <router-view class="test" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>

<style lang="less" scoped>
.user_info {
  width: 100%;
  height: 100%;
  .user_card {
    .tabs_item {
      height: 100px;
      background: #ed3f14;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1c2438;
      font-size: 26px;
    }
  }
  .test {
    display: block;
    width: 200px;
    height: 50px;
    border: 1px solid #000;
    font-size: 26px;
  }
}
</style>
