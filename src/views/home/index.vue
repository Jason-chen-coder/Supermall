<template>
  <div id="home">
    <!-- 导航 -->
    <navbar class="homenav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll
      class="scrollspace"
      ref="scroll"
      :probeType="3"
      @scrollposition="scrollposition"
      @pullingUp="loadmore"
      :pullUpLoad="true"
    >
      <!-- 轮播图 -->
      <swiper>
        <swiper-item v-for="(item) in banner" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt />
          </a>
        </swiper-item>
      </swiper>
      <!-- 推荐 -->
      <recommendview :recommend="recommend" />
      <div class="part2">
        <!-- 本周流行 -->
        <feature-view />
        <!-- 流行/新款/精选 -->
        <tab-control @changetype="changetype" class="tabcontrol" :title="['流行','新款','精选']" />
        <div class="tablist">
          <GoodList :goodslist="goodslist" />
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
import { Swiper, SwiperItem } from '../../components/common/swiper/index'
import GoodList from '../../components/content/goods/GoodList'
import TabControl from '../../components/content/tabControl/TabControl'
import { getHomeMultidata, apiGetHomeGoods } from '@/network/home'
export default {
  components: {
    navbar,
    Swiper,
    SwiperItem,
    recommendview,
    FeatureView,
    TabControl,
    GoodList,
    scroll,
    backtop
  },
  computed: {
    goodslist () {
      return this.goods[this.currentType]
    }
  },
  data () {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      showbacktop: false
    }
  },
  methods: {
    loadmore () {
      // 加载更多
      this.getHomeGoods(this.currentType)
      //
      this.$refs.scroll.finishpullup()
      // 当dom(图片)加载完之后要手动刷新一下bscroll的滚动距离
      this.$nextTick(() => {
        this.$refs.scroll.scroll.refresh()
      })
    },
    scrollposition (position) {
      // console.log(position)
      if (position.y < -1800) {
        this.showbacktop = true
      }
    },
    backclick () {
      // console.log('返回顶部')
      // 调用scroll组建的scrollToTop方法
      this.$refs.scroll.scrolltotop(0, 0)
    },
    changetype (value) {
      this.currentType = value
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      apiGetHomeGoods(type, page).then(res => {
        // console.log(res)
        // 将获取的商品列表数据保存
        this.goods[type].list.push(...res.data.list)
        // 将该类别的商品页数加1 ,方便下次查询时,查询下一级的产品
        this.goods[type].page++
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
  }
}
</script>

<style lang='less'>
#home {
  height: 100vh;
  padding-top: 44px;
  padding-bottom: 49px;
  background-color: #ededed;
  .homenav {
    background-color: var(--color-tint);
    color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  .part2 {
    margin-top: 20px;
    background-color: #fff;
  }
  .tabcontrol {
    position: sticky;
    top: 0px;
  }
  .scrollspace.wraper {
    width: 100%;
    position: fixed;
    overflow: hidden;
    top: 44px;
    bottom: 50px;
  }
  .backtop {
    position: absolute;
    right: 20px;
    bottom: 60px;
    z-index: 1100;
  }
}
</style>