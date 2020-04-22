<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  props: ['banner'],
  components: {
    Swiper, SwiperItem
  },
  data () {
    return {
      isload: false
    }
  },
  methods: {
    imgload () {
      if (!this.isload) {
        this.$emit('swiperimgload')
        this.isload = true
      }
    }
  }
}
</script>

<style>
</style>