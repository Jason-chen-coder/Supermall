<template>
  <div class="detailgoodinfo">
    <!-- 商品desc -->
    <div class="detailtitle">
      <div class="detailtitlelinestart">
        <i class="detailtitlepoint"></i>
      </div>
      <div class="shoptitle">{{detailinfo.desc}}</div>
      <div class="detailtitlelineend">
        <i class="detailtitlepoint"></i>
      </div>
    </div>
    <!-- 图片 -->
    <div class="detailinfo" v-for="(item, index) in detailinfo.detailImage" :key="index">
      <p class="detailinfodesc">{{item.desc}}</p>
      <p class="detailinfokey">{{item.key}}</p>
      <span v-for="(subitem, subindex) in item.list" :key="subindex">
        <img :src="subitem" alt @load="loadimg" />
      </span>
    </div>
  </div>
</template>

<script>
// import { fangdou } from '../../../common/utils/utils'
export default {
  props: ['detailinfo'],
  data () {
    return {
      timer: null
    }
  },
  methods: {
    loadimg () {
      // 防抖处理
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        console.log('详情图片加载完毕,刷新父组件的scroll组件')
        this.$emit("shopinfoimgload")
      }, 200)
    }
  }
}
</script>

<style lang='less'>
.detailgoodinfo {
  padding-top: 20px;
  background-color: #fff;
  width: 100%;
  .detailinfo {
    .detailinfodesc,
    .detailinfokey {
      margin: 10px 0;
    }
    img {
      width: 100%;
    }
  }
  .detailtitle {
    padding: 0 10px;
    margin-bottom: 20px;
    .shoptitle {
      padding: 10px;
    }
    .detailtitlelinestart {
      width: 30%;
      height: 1px;
      background: #a3a3a5;
      position: relative;
      .detailtitlepoint {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        top: -2px;
      }
    }
    .detailtitlelineend {
      width: 30%;
      height: 1px;
      background: #a3a3a5;
      position: relative;
      float: right;
      .detailtitlepoint {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #000;
        border-radius: 50%;
        position: absolute;
        top: -2px;
        right: 0;
      }
    }
  }
}
</style>