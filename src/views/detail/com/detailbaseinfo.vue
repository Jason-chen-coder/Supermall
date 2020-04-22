<template>
  <div class="detailbaseinfo">
    <!-- 商品标题 -->
    <div class="title">
      <h3>{{goods.title}}</h3>
    </div>
    <!-- 价格部分 -->
    <div class="price">
      <span class="newprice">{{goods.newprice}}</span>
      <span class="oldprice">{{goods.oldprice}}</span>
      <span class="discountdesc">{{goods.discountDesc}}</span>
    </div>
    <!-- 销量收藏发货时间 -->
    <div class="columns">
      <span v-for="(item, index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <!-- 服务 -->
    <div class="services">
      <span class="service" v-for="(item, index) in goods.services" :key="index">
        <div v-if="item.icon">
          <img :src="item.icon" alt />
          {{item.name}}
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goods']
}
</script>

<style lang='less'>
.detailbaseinfo {
  width: 90%;
  padding: 10px;
  border-bottom: 1px solid #ededed;
  // overflow: hidden;
  background-color: #fff;
  .title {
    color: rgb(46, 46, 46);
  }
  .price {
    padding: 10px 0;
    .newprice {
      color: #ff6d7e;
      margin-right: 10px;
      font-size: 25px;
    }
    .oldprice {
      text-decoration: line-through;
      margin-right: 5px;
    }
    .discountdesc {
      background-color: #ff6d7e;
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 10px;
      vertical-align: top;
    }
  }
  .columns {
    display: flex;
    justify-content: space-between;
    color: rgb(134, 133, 133);
    font-size: 15px;
    margin: 20px 0;
  }
  .services {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    color: rgb(37, 37, 37);
    margin: 30px 0;
    .service {
      font-size: 14px;
      margin: 5px 0;
      img {
        width: 15px;
      }
    }
  }
}
</style>