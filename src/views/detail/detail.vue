<template>
  <div class="detail">
    <!-- 顶部导航栏 -->
    <detailnavbar ref="detailnavbar" :topdistance="topdistance" class="detailnavbar" />
    <scroll ref="scroll" class="wrapper" @scrollposition="contentscroll" :probeType="3">
      <!-- 轮播图 -->
      <detailswiper ref="topswiper" :topimages="topimages" />
      <!-- 商品基本信息 -->
      <detailbaseinfo class="detailbaseinfo" :goods="goods" />
      <!-- 店铺信息 -->
      <detailshop :shopinfo="shopinfo" />
      <!-- 商品详情 -->
      <detailgoodinfo @shopinfoimgload="shopinfoimgload" :detailinfo="detailinfo"></detailgoodinfo>
      <!-- 尺码说明/产品参数 -->
      <detailparams ref="detailparams" :goodsparams="goodsparams"></detailparams>
      <!-- 商品评论 -->
      <detailgoodsrate ref="goodsrate" :goodsrate="goodsrate" />
      <!-- 商品推荐 -->
      <good-list class="goodlist" ref="goodlist" :goodslist="goodslist" :iscommend="iscommend" />
    </scroll>
    <!-- 返回顶部按钮 -->
    <backtop @click.native="gotop()" v-if="showbacktop" class="backtop" ref="backtop" />
    <!-- 视窗底部的购物车/购买/收藏/店铺-->
    <bottombar ref="bottombar" @addgoodcar="addgoodcar"></bottombar>
  </div>
</template>

<script>
import { apiGoodDetail, Goods, Shop, Goodsparams, apiGetCommend } from '../../network/detail'
import detailnavbar from './com/detailnav'
import detailswiper from './com/detailswiper'
import detailbaseinfo from './com/detailbaseinfo'
import detailshop from './com/detailshop'
import scroll from '../../components/common/scroll/scroll'
import detailgoodinfo from './com/detailgoodinfo'
import detailparams from './com/detailparams'
import detailgoodsrate from './com/goodsrate'
import bottombar from './com/bottombar'
import backtop from '../../components/content/backTop/backtop'
import GoodList from "../../components/content/goods/GoodList"
import { itemListenerMixin } from '../../common/utils/maxin'
// import { fangdou } from '../../common/utils/utils'
export default {
  name: 'detail',
  data () {
    return {
      id: null,
      topimages: [],
      goods: {},
      shopinfo: {},
      detailinfo: {},
      goodsparams: {},
      goodsrate: {},
      goodslist: null,
      iscommend: true,
      topdistance: [],
      timer: null,
      currentindex: 0,
      showbacktop: false
    }
  },
  maxins: [itemListenerMixin],
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshop,
    scroll,
    detailgoodinfo,
    detailparams,
    detailgoodsrate,
    GoodList,
    bottombar,
    backtop
  },
  mounted () {
    // console.log('详情页加载')
    this.id = this.$route.query.iid
    // 发起请求,请求商品详情
    apiGoodDetail(this.id).then(res => {
      console.log('商品详情', res)
      const data = res.result
      // 获取轮播图图片
      this.topimages = res.result.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.goods.iid = res.iid
      this.goods.img = res.result.itemInfo.topImages[0]
      // console.log(this.goods)
      // 获取店铺信息
      this.shopinfo = new Shop(data.shopInfo)
      // console.log(this.shopinfo)
      // 获取商品详情
      this.detailinfo = data.detailInfo
      // 获取商品参数/尺码说明
      this.goodsparams = new Goodsparams(data.itemParams)
      // 获取商品评论
      if (data.rate.list.length > 0) {
        this.goodsrate = data.rate.list
      }
      // 获取推荐商品
      this.getcommend()

    })

  },
  destroyed () {
    this.$bus.$off('imageloaded', this.itemimglistener)
  },
  methods: {
    // 点击了加入购物车
    addgoodcar () {
      console.log('加入购物车的商品', this.goods)
      // 将该商品加入到store中
      this.$store.dispatch('addgood', this.goods)
      console.log('store中的内容', this.$store.state.goodlist)
      // 弹出提示加入购物车成功
    },
    gotop () {
      // 返回顶部
      // console.log('返回顶部')
      this.$refs.scroll.scrolltotop(0, 0, 1000)
    },
    contentscroll (value) {
      var nowy = Math.floor(-value.y)
      if (nowy > 500) {
        this.showbacktop = true
      } else {
        this.showbacktop = false
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        var nowy = Math.floor(-value.y)
        // console.log('nowy', nowy)
        if (this.topdistance[1] > nowy && nowy >= this.topdistance[0]) {
          this.$refs.detailnavbar.currentindex = 0
        } else if (this.topdistance[2] > nowy && nowy >= this.topdistance[1]) {
          this.$refs.detailnavbar.currentindex = 1
        } else if (this.topdistance[3] > nowy && nowy >= this.topdistance[2]) {
          this.$refs.detailnavbar.currentindex = 2
        } else {
          this.$refs.detailnavbar.currentindex = 3
        }
      }, 30)
      // var nowy = Math.floor(-value.y)
      // console.log('nowy', nowy)
      // this.topdistance.forEach((item, index) => {
      //   if (this.currentindex !== index && (nowy >= item && nowy < this.topdistance[index + 1])) {
      //     this.$refs.detailnavbar.currentindex = index
      //     this.currentindex = index
      //   }
      // })
    },
    shopinfoimgload () {
      // 商品详情的图片记载完毕,刷新scroll
      this.$refs.scroll.scroll.refresh()
      // 获取距离顶部的距离
      // console.log("顶部轮播图说明的距离", this.$refs.topswiper.$el.offsetTop)
      // console.log("尺码说明的距离", this.$refs.detailparams.$el.offsetTop)
      // console.log("评论的距离", this.$refs.goodsrate.$el.offsetTop)
      // console.log("商品推荐的距离", this.$refs.goodlist.$el.offsetTop)
      this.topdistance = []
      this.topdistance.push(0)
      this.topdistance.push(this.$refs.detailparams.$el.offsetTop)
      this.topdistance.push(this.$refs.goodsrate.$el.offsetTop)
      this.topdistance.push(this.$refs.goodsrate.$el.offsetTop + this.$refs.goodsrate.$el.offsetHeight)
      this.topdistance.push(Number.MAX_VALUE)
      console.log(this.topdistance)
    },
    async getcommend () {
      try {
        var res = await apiGetCommend()
        // console.log('推荐商品', res.data)
        // res.data.list.forEach(item => {
        //  this.goodslist.list.push(new Commend(item))
        // });
        this.goodslist = res.data
        // console.log('推荐商品', this.goodslist.list)
      } catch (error) {
        console.log(error)
        return error
      }
    }
  }
}
</script>

<style lang='less'>
.detail {
  height: 100vh;
  .detailnavbar {
    z-index: 2000;
    position: absolute;
    top: 0;
  }
  position: relative;
  z-index: 888;
  background-color: #ededed;
  .detailbaseinfo {
    width: 100%;
  }
  .wrapper {
    width: 100%;
    position: fixed;
    top: 44px;
    bottom: 0px;
  }
  .goodlist {
    background: #fff;
    padding-bottom: 50px;
  }
  .backtop {
    position: absolute;
    right: 20px;
    bottom: 60px;
    z-index: 1100;
  }
}
</style>