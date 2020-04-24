<template>
  <div class="category">
    <!-- 头部导航栏 -->
    <navbar class="topnavbar">
      <div slot="center">商品分类</div>
    </navbar>
    <!-- 分类列表 -->
    <div class="shopclass">
      <!-- 左侧所有类别 -->
      <div class="allclass">
        <div
          class="subclass"
          @click="chooseclass(index,item,)"
          :class="{active:item.ischoosed}"
          v-for="(item, index) in allclass"
          :key="index"
        >{{item.title}}</div>
      </div>
      <div class="right">
        <classitem :currentclassmaitKey="currentclassmaitKey"></classitem>
      </div>
    </div>
  </div>
</template>

<script>
import classitem from './com/classitem'
import navbar from '../../components/common/navbar/index'
import { apiGetAllClass } from '../../network/class'
export default {
  data () {
    return {
      // ischoosed: true,
      allclass: [],
      currentclassmaitKey: null
    }
  },
  methods: {
    chooseclass (index) {
      this.allclass.map(item => {
        return item.ischoosed = false
      })
      this.allclass[index].ischoosed = true
      // console.log(this.allclass[index].maitKey)
      // 获取当前的类别maitKey
      this.currentclassmaitKey = this.allclass[index].maitKey
    }

  },
  async mounted () {
    try {
      // 获取所有的商品分类
      var res = await apiGetAllClass()
      this.allclass = res.data.category.list
      this.allclass.forEach(item => {
        this.$set(item, 'ischoosed', false)
      });
      // 默认第一项被选中
      this.chooseclass(0)
    } catch (error) {
      console.log(error)
      console.log('获取所有类别失败')
    }
  },
  components: {
    navbar,
    classitem
  }
}
</script>

<style lang='less'>
.category {
  position: relative;
  background-color: #ff8a9d;
  .topnavbar {
    color: #fff;
    font-size: 18px;
    background-color: #ff8a9d;
  }
  .shopclass {
    width: 100%;
    // overflow: auto;
    position: fixed;
    top: 44px;
    bottom: 50px;
    // height: 2000px;
    background-color: skyblue;
    display: flex;
    .allclass {
      height: 100%;
      background-color: #f7f7f7;
      .subclass {
        line-height: 40px;
        background-color: #f7f7f7;
        text-align: center;
        font-size: 18px;
        color: black;
      }
      overflow: auto;
      width: 25%;
      // background-color: #f7f7f7;
      .active {
        background-color: #fff;
        border-left: 5px solid #ff8a9d;
        font-size: 20px;
        color: #ff8a9d;
      }
    }
    .right {
      height: 100%;
      flex: 1;
      background-color: #ededed;
    }
  }
}
</style>