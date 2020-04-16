<template>
  <div id="app">
    <router-view></router-view>
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
