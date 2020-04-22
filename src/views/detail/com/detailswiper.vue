<template>
  <div class="detailswiper">
    <swiper class="theswiper">
      <swiper-item v-for="(item, index) in topimages" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'
export default {
  props: ['topimages'],
  components: {
    Swiper, SwiperItem
  }
}
</script>

<style lang='less'>
.detailswiper {
  .theswiper {
    height: 300px;
  }
}
</style>