<template>
  <div class="giving2">
      <header class="header">
            <ul>
                  <router-link :to="{ path: '/giving' }" tag='li'>
                 <span>〈</span>
                  </router-link> 
                <li>积分赠送</li>
                <li></li>
            </ul>
        </header>
        <div class="center">
            <ul>
                <li>赠送积分：<span>50</span></li>
                <li>交易服务费：<span>2.5</span></li>
            </ul>
        </div>
        <div class="center2">
            <ul>
                <li>接受积分会员有昵称：<span>陌生人</span></li>
                <li>接受积分会员手机号<span>13333333333</span></li>
                <li>获得贡融积分：<span>10%</span></li>
            </ul>
            <button>
            马上赠送
        </button>
        </div>
        
  </div>
</template>
<style scoped>
    .giving{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
     .header{
        width: 100%;
        height: .96rem;
        border-bottom: 1px solid #e7e7e7;
        font-size:.32rem;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        height: .96rem;
        line-height: .96rem;
        background: #fff;
        text-align: center;
    }
    .header li:nth-child(1){
        text-align: left;      
    }
    .header span{
        padding-left: .3rem;
    }
    .center{
        width: 100%;
        margin-top: .12rem;
        
    }
    .center li:first-child{
        border-bottom: 1px solid #e7e7e7;
    }
    .center li{
        background: #fff;
        height: 1rem;
        line-height: 1rem;
        padding-left: .3rem;
        font-size: .28rem;
    }
     .center li span{
         float: right;
         padding-right: .3rem;
     }

     .center2{
        width: 100%;
        height: 100rem;
        background: #fff;
        margin-top: .12rem;
        
    }
    .center2 li{
        border-bottom: 1px solid #e7e7e7;
    }
    .center2 li{
        background: #fff;
        height: 1rem;
        line-height: 1rem;
        padding-left: .3rem;
        font-size: .28rem;
    }
     .center2 li span{
         float: right;
         padding-right: .3rem;
     }
     button{
        width: 50%;
        height: .8rem;
        margin-left: 25%;
        margin-top: 1rem;
        border-radius: .11rem;
        background: #ff0103;
        border: none;
        color: #fff;
    }
</style>
