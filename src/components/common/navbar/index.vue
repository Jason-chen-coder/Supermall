<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 44px;
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 -5px 10px 1px;
}
.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: pink; */
}
</style>