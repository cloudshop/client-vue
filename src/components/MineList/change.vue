<template>
  <div class="change">
      <header class="header">
          <ul>
              <li><span>《</span></li>
              <li>线下现金交易</li>
              <li><span>收款记录</span></li>
          </ul>
      </header>
      <div class="change_top">
          <p class="img">
              <img src="../assets/1.jpg" alt="">
          </p>
          <ul>
              <li>欢乐空间</li>
              <li>
                  当前让利折扣：<i>1.5</i>折  <span>修改折扣</span>
              </li>
          </ul>
      </div>
      <div class="change_center">
          <ul>
              <li>消费者注册手机号：<span><input type="text" placeholder="填写手机号"></span></li>
              <li>消费者昵称：<span style="color:#676767">暂无昵称</span></li>
              <li>实际消费金额(元)：<span><input type="text" placeholder="输入金额"></span></li>
              <li>消费者获得积分：<span>0</span></li>
              <li>备注：<span><input type="text" placeholder="填写备注"></span></li>
          </ul>

          <ul>
              <li>需让利金额：<span>0</span></li>
              <li>交易服务费：<span style="color:#676767">0</span></li>
              <li>获得销售积分：<span style="color:#676767">0</span></li>
              <li>贡融劵可支付：<span>
                            <mt-switch></mt-switch>
                            </span>
            </li>
          </ul>
      </div>
      <div class="change_bottom">
          <button>确定</button>
      </div>
  </div>
</template>
<style scoped>
    /* body,html{
        width: 100%;
        height: 100%;
    } */
    .change{
        width: 100%;
        overflow: auto;
    }
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        position: absolute;
        top: 0;
        border-bottom: 1px solid #e7e7e7;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        line-height: .96rem;
        font-size: .32rem;
    }
    .header li:nth-child(1){
        text-align: left;
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
    }
    .header li:nth-child(3){
        text-align: right;
    }
    .header li:nth-child(3) span{
        padding-right: .3rem;
        font-size: .28rem;
        color: #696969;
    }
    .change_top{
        width: 100%;
        padding-top: .96rem;
        /* border-top: 1px solid #e7e7e7; */
    }
    .change_top ul{
        /* float: left; */    
        background: #fff;
    }
    .img{
        width: 2rem;
        height: 2rem;     
        background: #fff;
        padding: .3rem;
        float: left;
        padding-right: .34rem;
    }
    .change_top ul li:nth-child(1){
        padding-top: .3rem;
        color: #2f2f2f;
        font-size: .32rem;
    }
    .change_top ul li:nth-child(2){
        margin-top: 1rem;
        color: #696969;
        font-size: .24rem;
        padding-bottom: .5rem;
    }
    .change_top ul li:nth-child(2) span{
        padding: .08rem;
        color: #fff;
        border-radius: .1rem;
        background: #1692e1;
        margin-left: .2rem;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .change_center{
        margin-top: .2rem;
    }
    .change_center li{
        padding-left: .3rem;
        line-height: .84rem;
        position: relative;
        height: .84rem;
        background: #fff;
        font-size: .28rem;
        color: #2f2f2f;
        border-bottom: 1px solid #e7e7e7;
    }
    .change_center li span{
        position: absolute;
        right: .3rem;
        color: #bebebe
        
    }
    .change input{
        text-align: right;
        font-size: .24rem;
        border:none;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */  
    color:    #bebebe;  
    } 
    .change_center ul:nth-child(2){
        margin-top: .2rem;
        padding-bottom: .4rem;
    }
    .change_center ul:nth-child(2) li:last-child{
        margin-top: .2rem;
    }
    .change_bottom{
        width: 100%;
        text-align: center;
        padding-bottom: .4rem;
    }
    .change_bottom button{
        width: 3.26rem;
        height: .8rem;
        border-radius: .1rem;
        border:none;
        color:#fff;
        font-size: .32rem;
        background: #ff0103;
    }



</style>
