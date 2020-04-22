<template>
  <div class="gooditem" @click="showgood()">
  <img :src="good.image" v-if='iscommend' alt @load="loaded()" />
    <img :src="good.show.img" v-else alt @load="loaded()" />
    <p class="title">{{good.title}}</p>
    <span class="price">{{good.price}}</span>
    <span class="collect">{{good.cfav}}</span>
  </div>
</template>

<script>
export default {
  props: ['good','iscommend'],
  mounted () {
    // console.log('单个产品信息', this.good)
  },
  methods: {
    showgood () {
      // 去商品详情页
      // console.log(this.good.iid)
      this.$router.push(`/detail?iid=${this.good.iid}`)
    },
    loaded () {
      // console.log('load')
      this.$bus.$emit('imageloaded')
    }
  }
}
</script>

<style lang='less'>
.gooditem {
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0;
  }
  .collect {
    position: relative;
    margin-left: 30px;
  }
  .collect::before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url("../../../../assets/img/img/detail/detail_bottom.png");
    // background-color: red;
    background-position: 0 0;
    left: -20px;
    top: -1px;
    background-size: cover;
    position: absolute;
  }
}
</style>