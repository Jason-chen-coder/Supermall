<template>
  <div class="detailshop">
    <!-- 店铺名字/logo -->
    <div class="shoptitle">
      <a :href="shopinfo.url">
        <img :src="shopinfo.logo" alt />
        {{shopinfo.name}}
      </a>
    </div>
    <!-- 店铺信息 -->
    <div class="shopinfo">
      <div class="left">
        <span>
          <div>{{shopinfo.sells|countfilter}}</div>
          <div>总销量</div>
        </span>
        <span>
          <div>{{shopinfo.goodscount}}</div>
          <div>全部宝贝</div>
        </span>
      </div>
      <div class="right">
        <div v-for="(item, index) in shopinfo.score" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span :class="{'high':item.isBetter,'low':!item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <!-- 进店逛逛 -->
    <div class="goin">
      <a :href="shopinfo.url">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shopinfo'],
  filters: {
    countfilter (num) {
      if (num > 10000) {
        var num1 = num / 10000
        num1 = Math.floor(num1 * 100) / 100
        return num1.toFixed(2) + '万'
      }

    }
  }
}
</script>

<style lang='less'>
.detailshop {
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
  .shoptitle {
    padding: 10px 0;
    // background-color: pink;
    line-height: 100%;
    font-size: 17px;
    padding-left: 25px;
    img {
      width: 50px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .shopinfo {
    color: black;
    height: 100px;
    width: 100%;
    // background-color: skyblue;
    .left {
      width: 50%;
      display: flex;
      text-align: center;
      justify-content: space-between;
      margin-top: 25px;
      border-right: 1px solid rgb(204, 201, 201);
      span {
        width: 50%;
      }
    }
    .right {
      width: 50%;
      text-align: center;
      padding: 0 30px;
      margin-top: 5px;
      font-size: 14px;
      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        span {
          text-align: left;
        }
      }
    }
    .low {
      background-color: green;
      color: #fff;
    }
    .high {
      background-color: red;
      color: #fff;
    }
  }
  .goin {
    width: 40%;
    background-color: #ededed;
    font-size: 18px;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    margin: 0 auto;
  }
}
</style>