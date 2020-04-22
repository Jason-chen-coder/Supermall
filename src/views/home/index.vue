<template>
  <div id="home">
    <!-- 导航 -->
    <navbar class="homenav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control
      v-show="istarfix"
      @changetype="changetype"
      ref="tabcontrol2"
      class="tabcontrol tabcontrol2"
      :title="['流行','新款','精选']"
    />
    <scroll
      class="scrollspace"
      ref="scroll"
      :probeType="3"
      @scrollposition="scrollposition"
      @pullingUp="loadmore"
      :pullUpLoad="true"
    >
      <!-- 轮播图 -->
      <homeswiper :banner="banner" @swiperimgload="swiperimgload" />
      <!-- 推荐 -->
      <recommendview :recommend="recommend" />
      <div class="part2">
        <!-- 本周流行 -->
        <feature-view />
        <!-- 流行/新款/精选 -->
        <tab-control
          @changetype="changetype"
          ref="tabcontrol1"
          class="tabcontrol"
          :title="['流行','新款','精选']"
        />

        <div class="tablist">
          <GoodList :goodslist="goodslist" :iscommend="iscommend" />
        </div>
      </div>
    </scroll>
    <!-- 返回顶部按钮 -->
    <backtop @click.native="backclick" class="backtop" v-if="showbacktop" />
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/index'
import recommendview from './com/recommendview'
import FeatureView from './com/FeatureView'
import scroll from '../../components/common/scroll/scroll'
import backtop from '../../components/content/backTop/backtop'
// import { Swiper, SwiperItem } from '../../components/common/swiper/index'
import homeswiper from './com/homeswiper'
import GoodList from '../../components/content/goods/GoodList'
import TabControl from '../../components/content/tabControl/TabControl'
import { getHomeMultidata, apiGetHomeGoods } from '@/network/home'
// import { fangdou } from '../../common/utils/utils'
import { itemListenerMixin } from '../../common/utils/maxin'
export default {
  components: {
    navbar,
    homeswiper,
    recommendview,
    FeatureView,
    TabControl,
    GoodList,
    scroll,
    backtop
  },
  mixins: [itemListenerMixin],
  computed: {
    goodslist () {
      return this.goods[this.currentType]
    }
  },
  activated () {
    // 注意要刷新scroll的状态
    this.$refs.scroll.scroll.refresh()
    // 进到页面时瞬间滚动到上一次保存的位置
    this.$refs.scroll.scrolltotop(0, this.scrolly, 0)
    // console.log(this.scrolly)
  },
  deactivated () {
    // 离开页面时记住当前页面的y值
    this.scrolly = this.$refs.scroll.scroll.y
    this.$bus.$off('imageloaded', this.itemimglistener)
  },
  data () {
    return {
      banner: [],
      recommend: [],
      scrolly: 0,
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      showbacktop: false,
      tabaroffsetTop: 0,
      istarfix: false,
      iscommend: false,
    }
  },
  methods: {
    swiperimgload () {
      // 当图片都加载完之后获取tabar距离顶部的距离
      this.$nextTick(() => {
        this.tabaroffsetTop = this.$refs.tabcontrol1.$el.offsetTop
        console.log(this.tabaroffsetTop)
      })
    },
    loadmore () {
      // 加载更多
      this.getHomeGoods(this.currentType)
    },
    scrollposition (position) {
      // console.log(position)
      // 判断滚动距离,显示返回顶部按钮
      if (position.y < -1000) {
        this.showbacktop = true
      } else {
        this.showbacktop = false
      }
      if ((-position.y) > this.tabaroffsetTop) {
        // console.log('吸顶开启')
        this.istarfix = true
      } else {
        this.istarfix = false
      }
    },
    backclick () {
      console.log('调用backtop')
      // 调用scroll组建的scrollToTop方法
      this.$refs.scroll.scrolltotop(0, 0)
    },
    changetype (value) {
      this.currentType = value.type
      this.$refs.tabcontrol2.currentindex = value.index
      this.$refs.tabcontrol1.currentindex = value.index
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      apiGetHomeGoods(type, page).then(res => {
        // console.log(res)
        // 将获取的商品列表数据保存
        this.goods[type].list.push(...res.data.list)
        // 将该类别的商品页数加1 ,方便下次查询时,查询下一级的产品
        this.goods[type].page++
        // 告诉scroll已完成上拉加载更多,防止下次无法加载更多
        this.$refs.scroll.finishpullup()
      })
    }
  },
  mounted () {
    // 1.进入首页就申请数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    // 2.获取商品列表数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // // 3.监听事件总线的事件（函数防抖）
    // const debunce = fangdou(() => {
    //   // 刷新scroll的高度
    //   // 当dom(图片)加载完之后要手动刷新一下bscroll的滚动距离
    //   this.$refs.scroll.scroll.refresh()
    // }, 100)
    // this.itemloading =function(){
    //   debunce()
    // }
    // this.$bus.$on("imageloaded", this.itemloading)
  },
}
</script>

<style lang='less'>
#home {
  height: 100vh;
  // padding-top: 44px;
  padding-bottom: 49px;
  background-color: #ededed;
  .homenav {
    background-color: var(--color-tint);
    color: #fff;
    // width: 100%;
    // position: fixed;
    // top: 0;
    // z-index: 1000;
  }
  .part2 {
    margin-top: 20px;
    background-color: #fff;
  }

  .scrollspace.wraper {
    width: 100%;
    // position: fixed;
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 50px;
  }
  .tabcontrol2 {
    position: fixed;
    top: 44px;
    width: 100%;
    z-index: 100;
  }
  .backtop {
    position: absolute;
    right: 20px;
    bottom: 60px;
    z-index: 1100;
  }
}
</style>