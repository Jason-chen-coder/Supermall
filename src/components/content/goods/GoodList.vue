<template>
  <div class="goodslist">
    <goodsitem class="goodsitem"  :iscommend='iscommend' v-for="(item, index) in goodslist.list" :good="item" :key="index"></goodsitem>
  </div>
</template>

<script>
import goodsitem from './com/goodsitem'
export default {
  props: ['goodslist','iscommend'],
  components: {
    goodsitem
  }
}
</script>

<style lang='less'>
.goodslist {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .goodsitem {
    width: 45%;
    margin: 10px 0;
  }
}
</style>