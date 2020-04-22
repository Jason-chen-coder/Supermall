<template>
  <div class="shopcarlist">
    <div v-if="allgoods.length!==0">
      <!-- 商品列表模块 -->
      <div class="thegood" v-for="(item, index) in allgoods" :key="index">
        <div>
          <input
            @change="selectgood(index)"
            :checked="allgoodstate[index]"
            type="checkbox"
            class="tui-checkbox"
          />
        </div>
        <img :src="item.img" alt class="shopimg" />
        <div class="shopinfo">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="price">
            ${{item.realprice}}
            <span
              style="float:right;color:black;fontWeight:normal"
            >×{{item.count}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img
        style="width:100%;margin:20px 0 0"
        src="../../../assets/img/img/cart/gouwuc.47203924.png"
        alt
      />
    </div>
    <!-- 结算模块 -->
    <div class="countall">
      <div class="checkpoint">
        <input type="checkbox" class="tui-checkbox" :checked="ischeckall" @change="sellectall" />
        全选
      </div>
      <div class="allmoney">合计${{countprice}}</div>
      <div class="count" @click="gocount">去计算({{goodnum}})</div>
    </div>
    <!-- 购物车商品列表{{allgoods}} -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      allgoods: [],
      select: [],
      ischeckall: false,
      countprice: 0
    }
  },
  mounted () {
    this.$store.state.goodlist.forEach(item => {
      this.$set(item, 'selected', false)
    });
    this.allgoods = this.$store.state.goodlist
    this.$emit('allgoodcount', this.allgoods.length)
  },
  computed: {
    allgoodstate () {
      var goodstate = []
      this.allgoods.forEach(item => {
        goodstate.push(item.selected)
        // this.$set(item, 'selected', false)
      })
      return goodstate
    },
    goodnum () {
      var num = 0
      this.allgoods.forEach(item => {
        if (item.selected === true) {
          num++
        }
      })
      return num
    }
  },
  methods: {
    // 计算总值
    countallprice () {
      this.countprice = 0
      //遍历allgoods中,selected为true就加起来
      this.allgoods.forEach(item => {
        if (item.selected == true) {
          this.countprice += item.realprice * item.count
        }
      })
    },
    sellectall () {
      if (this.ischeckall) {
        this.allgoods.forEach(item => {
          item.selected = false
        });
        console.log('取消全选')
        this.ischeckall = false
      } else {
        this.allgoods.forEach(item => {
          item.selected = true
        });
        console.log('选中全部商品')
        this.ischeckall = true
      }
      console.log(this.allgoods)
      this.countallprice()
    },
    selectgood (index) {
      if (this.allgoods[index].selected === false) {
        this.allgoods[index].selected = true
        console.log('选中了商品', this.allgoods[index])
      } else {
        this.allgoods[index].selected = false
        console.log('取消选中了商品', this.allgoods[index])
      }
      // 每次勾选时都将全选状态设置为true,然后判断时候allgoods每一项的selected都为false如果是则设置全选状态为true
      this.ischeckall = true
      console.log(this.allgoods)
      // 判断allgoods的所有selected属性都为false值
      this.allgoods.forEach(item => {
        if (item.selected === false) {
          console.log('存在没被选的产品', item)
          this.ischeckall = false
        }
      });
      this.countallprice()
    },
    gocount () {
      console.log(this.select)
    }
  }
}
</script>

<style lang='less'>
.shopcarlist {
  margin: 0;
  width: 100%;
  overflow: auto;
  background-color: #f2f2f2;
  position: fixed;
  top: 44px;
  bottom: 50px;
  .thegood {
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    width: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
    .shopimg {
      width: 25%;
      // width: 90px;
      height: 120px;
      margin: 0 10px;
      border-radius: 10px;
    }
    .shopinfo {
      // flex: 1;
      height: 120px;
      width: 65%;
      padding-right: 10px;
      .title {
        font-weight: bold;
        font-size: 15px;
      }
      .desc {
        font-size: 14px;
        margin: 10px 0 20px;
      }
      .title,
      .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .price {
        margin: 50px 0 0;
        color: #ff6d2d;
        font-weight: bold;
      }
    }
  }
  .tui-checkbox:checked {
    background: #ff7798;
    border: solid 1px #ff7798;
  }
  .tui-checkbox {
    outline: none;
    width: 20px !important;
    height: 20px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    position: relative;
    display: inline-block;
    vertical-align: top;
    cursor: default;
    -webkit-appearance: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-transition: background-color ease 0.6s;
    transition: background-color ease 0.6s;
  }
  .tui-checkbox:checked::after {
    content: "";
    top: 0.1rem;
    left: 0.09rem;
    position: absolute;
    background: transparent;
    border: #fff solid 2px;
    border-top: none;
    border-right: none;
    height: 10px;
    width: 16px;
    font-weight: bold;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .countall {
    position: fixed;
    display: flex;
    background-color: #ededed;
    width: 100%;
    height: 35px;
    bottom: 50px;
    line-height: 35px;
    .checkpoint {
      width: 20%;
      input {
        margin: 7px 5px 0;
      }
    }
    .allmoney {
      flex: 1;
    }
    .count {
      width: 30%;
      background-color: #ff5200;
      color: #fff;
      text-align: center;
    }
  }
}
</style>