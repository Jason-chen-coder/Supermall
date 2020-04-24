<template>
  <div class="profile">
    <!-- 顶部导航栏 -->
    <navbar class="navbar">
      <div slot="center">我的信息</div>
    </navbar>
    <!-- 登录/注册模块 -->
    <div class="login">
      <img class="userimg" src="../../assets/img/img/profile/avatar.svg" alt />
      <div class="loginbtn">
        <h3>登录/注册</h3>
        <p>暂无绑定的手机号</p>
      </div>
      <div class="gtbtn">&gt;</div>
    </div>
    <!-- 余额/优惠/积分 -->
    <div class="haves">
      <div class="havesbox">
        <div>
          <span class="number">0.00</span> 元
        </div>
        <div>我的余额</div>
      </div>
      <div class="havesbox">
        <div>
          <span class="number">0.00</span> 个
        </div>
        <div>我的优惠</div>
      </div>
      <div class="havesbox">
        <div>
          <span class="number">0.00</span> 分
        </div>
        <div>我的积分</div>
      </div>
    </div>
    <!-- 消息.. -->
    <div class="messagecar">
      <div class="subcar">
        <img src="../../assets/img/img/profile/message.svg" alt />我的消息
      </div>
      <div class="subcar">
        <img src="../../assets/img/img/profile/pointer.svg" alt />我的商城
      </div>
      <div class="subcar">
        <img src="../../assets/img/img/profile/vip.svg" alt />我的消息
      </div>
    </div>
    <!-- 消息.. -->
    <div class="messagecar option">
      <div class="subcar">
        <img src="../../assets/img/img/profile/cart.svg" alt />我的购物车
      </div>
      <div class="subcar lastcar">
        <img src="../../assets/img/img/profile/shopping.svg" alt />下载购物APP
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/index'
export default {
  components: {
    navbar
  }
}
</script>

<style lang='less'>
.profile {
  .navbar {
    background-color: #ff8e96;
    color: #fff;
    font-size: 18px;
  }
  .login {
    background-color: #ff8e96;
    color: #fff;
    height: 90px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .userimg {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .loginbtn {
      margin-top: 10px;
      h3 {
        font-size: 18px;
        margin-bottom: 5px;
      }
      flex: 1;
      padding-left: 20px;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
    }
    .gtbtn {
      width: 40px;
      line-height: 60px;
      font-size: 25px;
      text-align: center;
    }
  }
  .haves {
    padding: 20px 0;
    display: flex;
    border-bottom: 8px solid #f2f2f2;
    .havesbox {
      width: 33.33%;
      text-align: center;
      color: black;
      .number {
        color: #e67962;
        font-weight: bold;
      }
    }
  }
  .messagecar {
    border-bottom: 5px solid #f2f2f2;
    .subcar {
      padding: 10px;
      // box-sizing: border-box;
      height: 50px;
      border-bottom: 1px solid #ededed;
      line-height: 30px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
  .option,
  .lastcar {
    border-bottom: none !important;
  }
}
</style>