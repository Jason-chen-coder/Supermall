<template>
  <div class="gooditem">
    <img :src="good.show.img" alt />
    <p class="title">{{good.title}}</p>
    <span class="price">{{good.price}}</span>
    <span class="collect">{{good.cfav}}</span>
  </div>
</template>

<script>
export default {
  props: ['good'],
  mounted () {
    console.log('单个产品信息', this.good)
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