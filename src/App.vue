<template>
  <div id="app">
    <keep-alive exclude="detail,shopcar">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from '../src/components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import "../src/assets/css/base.css";
</style>
