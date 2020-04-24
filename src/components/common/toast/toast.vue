<template>
  <transition name="toastbox">
    <div class="toast" v-if="isshow">{{message}}</div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      isshow: false,
      message: ''
    }
  },
  methods: {
    showtoast (showmessage, duration = 1500) {
      this.isshow = true
      this.message = showmessage
      setTimeout(() => {
        this.isshow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>
<style lang='less'>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 2000;
  padding: 10px 15px;
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  border-radius: 5px;
}
.toastbox-enter-active,
.toastbox-leave-active {
  transition: all 1s;
}
.toastbox-enter {
  opacity: 0;
}
.toastbox-leave-to {
  opacity: 0;
}
</style>