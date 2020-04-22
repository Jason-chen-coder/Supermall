<template>
  <div class="detailparams">
    <div class="infodescript">{{goodsparams.goodrule.disclaimer}}</div>
    <div class="info">
      <div class="subinfo" v-for="(item, index) in goodsparams.goodrule.tables[0]" :key="index">
        <span v-for="(subitem, subindex) in item" :key="subindex">{{subitem}}</span>
      </div>
    </div>
    <div class="rule">
      <div class="subrule" v-for="(item, index) in goodsparams.goodinfo.set" :key="index">
        <span class="rulekey">{{item.key}}</span>
        <span class="rulevalue">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodsparams']
}
</script>

<style lang='less'>
.detailparams {
  .infodescript {
    border-bottom: 1px solid #ededed;
    padding: 20px;
  }
  background-color: #fff;
  .info {
    padding: 0 10px;
    .subinfo {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #ededed;
      span {
        margin: 10px 10px;
        text-align: center;
        width: 60px;
        line-height: 30px;
        height: 30px;
      }
      :nth-child(1) {
        margin-right: 30px;
        text-align: left;
        margin-left: 10px;
        width: 50px;
        font-size: 16px;
        // height: 30px;
      }
    }
  }
  .rule {
    padding: 0 10px;
    .subrule {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #ededed;
      span {
        margin: 10px 10px;
        text-align: left;
        line-height: 30px;
        // height: 30px;
        width: 60px;
      }
      .rulekey {
        width: 80px;
      }
      .rulevalue {
        color: #ff8198;
        flex: 1;
        // font-size: 14px;
      }
    }
  }
}
</style>