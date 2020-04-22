<template>
  <div class="bottombar">
    <div class="optionicon">
      <span>
        <div class="icon service"></div>
        <div>客服</div>
      </span>
      <span>
        <div class="icon store"></div>
        <div>店铺</div>
      </span>
      <span>
        <div class="icon collect"></div>
        <div>收藏</div>
      </span>
    </div>
    <div class="optionbtn">
      <span @click="addshop" class="shopcar">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addshop () {
      this.$emit('addgoodcar')
    }
  }
}
</script>

<style lang='less'>
.bottombar {
  height: 55px;
  width: 100%;
  position: fixed;
  text-align: center;
  bottom: 0;
  background-color: skyblue;
  display: flex;
  border-top: 1px solid #ededed;
  .optionicon {
    background-color: #fff;
    width: 50%;
    display: flex;
    padding: 5px 0;
    span {
      flex: 1;
      text-align: center;
      font-size: 14px;
    }
    .icon {
      margin: 3px auto;
      width: 25px;
      height: 25px;
      background-size: cover;
      margin-bottom: 3px;
      background-image: url("../../../assets/img/img/detail/detail_bottom.png");
    }
    .service {
      background-position: 0 -60px;
    }
    .store {
      background-position: 0 -112px;
    }
    .collect {
      background-position: 0 0px;
    }
  }
  .optionbtn {
    line-height: 55px;
    width: 50%;
    display: flex;
    text-align: center;
    .shopcar {
      background-color: #ffdd10;
      padding: 0 10px;
      color: black;
    }
    .buy {
      background-color: #ff7798;
      flex: 1;
      color: #fff;
    }
  }
}
</style>