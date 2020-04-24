<template>
  <div class="classitem">
    <div class="subclass" v-for="(item, index) in classgoodslist" :key="index">
      <a :href="item.link">
        <img class="classimg" :src="item.image" alt />
        <div class="classname">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { apiGetClassGoods } from '../../../network/class'
export default {
  props: ['currentclassmaitKey']
  ,
  data () {
    return {
      currentclass: null,
      classgoodslist: []
    }
  },
  methods: {
    async getclassgoods (key) {
      var res = await apiGetClassGoods(key)
      console.log(res)
      this.classgoodslist = res.data.list
    }
  },
  watch: {
    currentclassmaitKey (newName) {
      console.log('选中了新类别', newName)
      this.currentclass = newName
      // 查询新类别的内容
      this.getclassgoods(this.currentclass)
    }
  }
}
</script>

<style lang='less'>
.classitem {
  width: 100%;
  background-color: #fff;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  .subclass {
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    .classimg {
      width: 100%;
    }
    .classname {
      width: 100%;
      text-align: center;
    }
  }
}
</style>