<template>
  <div class="tabcontrol">
    <div class="tabtitle">
      <div
        @click="changetype(index)"
        :class="{'active':currentindex===index}"
        v-for="(item, index) in title"
        :key="index"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      currentindex: 0,
      type: ['pop', 'new', 'sell']
    }
  },
  methods: {
    changetype (index) {
      this.currentindex = index
      this.$emit('changetype', this.type[index])
    }
  }
}
</script>

<style lang='less'>
.tabcontrol {
  background-color: #fff;
  // margin-top: 10px;
  .tabtitle {
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: 16px;
    line-height: 40px;
  }
  span {
    padding: 10px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
}
</style>