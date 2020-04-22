<template>
  <div class="detailnav">
    <navbar>
      <template slot="left" class="left">
        <img @click="back()" src="../../../assets/img/img/common/back.svg" alt />
      </template>
      <template v-slot:center class="center">
        <span
          v-for="(item, index) in titles"
          :class="{'active':currentindex===index}"
          @click="changedetail(index)"
          :key="index"
        >{{item}}</span>
      </template>
      <div slot="right" class="right"></div>
    </navbar>
  </div>
</template>

<script>
import navbar from '../../../components/common/navbar/index'
export default {
  props: ['topdistance'],
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentindex: 0
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    changedetail (index) {
      this.currentindex = index
      // 点击第一个时返回顶部
      // 点击参数时跳转至详情
      // 点击评论是跳转至评论
      // 点击推荐时跳转至推荐
      // 输出参数,评论,推荐的距离顶部的距离
      this.$parent.$refs.scroll.scrolltotop(0, -this.topdistance[index], 500)
    }
  },
  components: {
    navbar
  }
}
</script>

<style lang='less'>
.detailnav {
  height: 44px;
  width: 100%;
  line-height: 44px;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ededed;
  .left,
  .right {
    text-align: center;
    display: inline-block;
    line-height: 44px;
    width: 60px;
    img {
      margin-top: 10px;
    }
  }
  .center {
    display: flex;
    justify-content: space-around;
    span {
      // flex: 1;
      text-align: right;
    }
  }
  .active {
    color: #fb7299;
  }
}
</style>