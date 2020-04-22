<template>
  <div class="theshopcar">
    <!-- 导航栏 -->
    <navbar class="topnavbar">
      <div slot="center">购物车({{goodscount}})</div>
    </navbar>
    <!-- 商品列表 -->
    <shopcarlist ref="shopcarlist" @allgoodcount="allgoodcount"></shopcarlist>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/index'
import shopcarlist from './com/goodlist'
export default {
  name: 'shopcar',
  components: {
    navbar,
    shopcarlist
  },
  data () {
    return {
      goodscount: 0
    }
  },
  methods: {
    allgoodcount (num) {
      this.goodscount = num
    }
  }
}
</script>

<style lang='less' scoped>
.theshopcar {
  .topnavbar {
    background-color: #ff7798;
    color: #fff;
    font-weight: bold;
  }
}
</style>