<template>
  <div class="wraper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  // 从外部接收probeType,pullUpLoad属性
  props: ['probeType', 'pullUpLoad'],
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    // 对外提供返回顶部方法
    scrolltotop (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishpullup () {
      this.scroll.finishPullUp()
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听上拉加载事件
    this.scroll.on('pullingUp', () => {
      // 告诉外部已经触发上拉加载事件
      this.$emit('pullingUp')

    })
    // 监听滚动事件
    this.scroll.on('scroll', (position) => {
      this.$emit('scrollposition', position)
    })
  }
}
</script>

<style>
</style>