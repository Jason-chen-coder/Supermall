<template>
  <div class="recommend">
    <div class="one" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommend']
}
</script>

<style lang='less'>
.recommend {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  .one {
    width: 25%;
    text-align: center;
    img {
      width: 80%;
      margin-bottom: 5px;
      margin-top: 15px;
    }
  }
}
</style>