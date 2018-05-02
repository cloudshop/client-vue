<template>
    <div class="xianxia" style="overflow:auto;overflow-x: hidden;">
        <header class="header">
         <ul>
             <li><span>&lt;</span></li>
             <li>线下现金交易</li>
             <li><span>收款记录</span></li>
         </ul>
      </header>
      <div class="center">
          <p class="center-top">
              <span><img src="../../assets/HomePage/快报.gif" alt=""></span>
              <ul>
                  <li>欢乐空间</li>
                  <li>当前让利折扣：<i>10</i>折 <b>修改折扣</b></li>
              </ul>
          </p>
      </div>
      <div class="bottom">
          <ul class="list">
              <li>消费者注册手机号：<span><input type="text" placeholder="请填写手机号"></span></li>
              <li>消费者昵称：<span>暂无昵称</span></li>
              <li>实际消费金额(元)：<span><input type="text" placeholder="输入金额"></span></li>
              <li>消费者获得积分：<span></span></li>
              <li>备注：<span><input type="text" placeholder="填写备注"></span></li>
          </ul>
          <ul class="list list2">
              <li>需让利金额：<span><input type="text" placeholder="0"></span></li>
              <li>交易服务费：<span>暂无昵称</span></li>
              <li>获得销售积分：<span>0</span></li>  
              <li>贡融劵可支付：{{value}}<span><mt-switch v-model="value" class="open"></mt-switch></span></li>
          </ul>
      </div>
      <div class="sure">
          <button>确定</button>
      </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
        value:''
      }
  }
}
</script>
<style scoped>
    .xianxia{
        width: 100%;  
        background: #fff;
        /* overflow-x: hidden; */
    }
      .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        position: fixed;
        border-bottom: 1px solid #e7e7e7;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        line-height: .96rem;
        text-align: center
    }
    .header li:nth-child(1){
        text-align: left;
         font-size: .32rem;
    }
    .header li:nth-child(3){
        text-align: right;
         font-size: .32rem;
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
         font-size: .32rem;
    }
    .header li:nth-child(2){
        /* text-align: center; */
        font-size: .32rem;
    }
    .header li:nth-child(3) span{
        text-align: right;
        padding-right: .3rem;
        font-size: .28rem;
        color: #696969;
    }
    .center{
        margin-top: .96rem;
    }
    .center-top{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        background: #fff;;
        /* background: url('../../assets/shopping/矩形19.png'); */
        background-position: 100% 100%;
    }
    .center-top span{
        display: inline-block;
        vertical-align: middle;
        width: 1.2rem;
        height: 1.2rem;
        background: #ccc;
        margin-left: .3rem;
        overflow: hidden;
        float: left;
        margin-top: .4rem;
    }
    .center-top span img{
        width: 100%;
        height: 100%;
    }
    .center-top ul{
        float: left;
        margin-top: .4rem;
        padding-left: .4rem;
        color: #fff;
    }
    .center-top li{
        line-height: .6rem;
    }
    .center-top li:nth-child(1){
        font-size: .32rem;
        color: #2f2f2f;
    }
    .center-top li:nth-child(2){
        font-size: .28rem;
        color: #696969;
    }
    .center-top li:nth-child(2) b{
        background: #1692e1;
        color: #fff;
        font-weight: normal;
        font-size: .24rem;
        padding: .1rem .2rem;
        border-radius: .15rem;
        margin-left: .1rem;
    }
    .center-top li:nth-child(2) img{
        width: .35rem;
    }
    .bottom{
        width: 100%;
        margin-top: .2rem;
    }
    .list{
        width: 100%
    }
    .list li{
        width: 100%;
        overflow: hidden;
        height: .84rem;
        line-height: .84rem;       
        background: #fff;
        border-bottom: .01rem solid #e7e7e7;
        padding-left: .3rem;
        font-size: .28rem;
        color: #2f2f2f;
    }
    .list li span{
        float: right;
        padding-right: .6rem;
    }
    .list li input{
        border: none;
        text-align: right;
    }
    .list2{
        margin-top: .2rem;
    }
    .open{
        margin-top: .04rem;
    }
    .list2 li:last-child{
        margin-top: .2rem;
    }
    .sure{
        width: 100%;
        margin-top: .5rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .sure button{
        width: 3.26rem;
        height: .8rem;
        border:none;
        border-radius: .15rem;
        background: #ff0103;
        color: #fff;
        font-size: .32rem;
    }
</style>

