<template>
  <div class="goodsrate" v-if='goodsrate'>
    <p style='borderBottom:1px solid #ededed;paddingBottom:10px'>
      <b>买家评价</b> <b style='float:right'>更多</b>
    </p>
  <div v-if='goodsrate'>
    <div class="subgoodsrate" v-for="(item, index) in goodsrate" :key="index">
      <div class="rateuser">
        <img :src="item.user.avatar" />
        <span class="username">{{item.user.uname}}</span>
      </div>
      <div class="ratecontent">
        <p>{{item.content}}</p>
        <img :src="imgitem" v-for="(imgitem, imgindex) in item.images" :key="imgindex" />
      </div>
      <div class="ratedata">{{item.created|timefilter}} <span>{{item.style}}</span> </div>
    </div>
  </div>
  <div v-else><p style='textAlign:center'>还没有买家评论哦,快来评论吧!</p></div>
    <!-- {{goodsrate[0].created}} -->
  </div>
</template>
<script>
export default {
  props: ['goodsrate']
}
</script>
<style lang="less">
.goodsrate {
  background: #fff;
  padding: 20px 20px;
margin-top:10px;
  .subgoodsrate {
    padding: 20px 10px;
    border-bottom: 1px solid #ededed;
    .rateuser {
      margin-bottom: 10px;
      img {
        margin-right: 10px;
        width: 40px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .username {
        font-size: 16px;
        color: black;
      }
    }
    .ratecontent {
      p {
        line-height: 22px;
      }
      img {
        width: 100px;
        margin-top: 20px;
        margin-right: 10px;
      }
    }
    .ratedata {
      margin-top: 20px;
    }
  }
}
</style>