<template>
  <div>
      <header class="header">
         <ul>
             <li><span>《</span></li>
             <li>修改让利结构</li>
             <li><span></span></li>
         </ul>
      </header>
      <div class="center">
          <p class="center-top">
              <span><img src="../../assets/HomePage/快报.gif" alt=""></span>
              <ul>
                  <li>欢乐空间</li>
                  <li><img src="../../assets/Shopping/30_打折.png" alt=""> 当前让利折扣：<i>10</i>折</li>
              </ul>
          </p>
      </div>
      <p class="change_zhe">手动设置折扣 <input type="text"  v-model="changeval">折</p>
      <p class="change_zhe2">
         <mt-range v-model="changeval" :step="1" :max='10' :bar-height="10">
            <div slot="start">1折</div>
            <div slot="end">10折</div>
         </mt-range>
      </p>
      <div class="bottom">
          <h2>折扣说明</h2>
          <p>9折的时候，消费者支付100元，商家得90元，让利10元，增值商家获得20个贡融积分，消费者获得100个贡融积分</p>
      </div>

     <button class="sure">确定修改折扣为{{changeval}}折</button>
  </div>
</template>
<script>
export default {
    data(){
        return{
           changeval:'10'
        }
    },
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
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
    .center-top{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        /* background: red; */
        background: url('../../assets/shopping/矩形19.png');
        background-position: 100% 100%;
    }
    .center-top span{
        display: inline-block;
        vertical-align: middle;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
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
    }
    .center-top li:nth-child(2){
        font-size: .28rem;
    }
    .center-top li:nth-child(2) img{
        width: .35rem;
    }
    .change_zhe{
        width: 100%;
        background: #fff;
        font-size: .32rem;
        padding-top: .36rem;
        padding-left: .3rem;
        padding-bottom: .6rem;
    }
    .change_zhe input{
        width: .3rem;
        text-align: center;
        border: 1px solid #1692e1;
        padding-left: .3rem;
        padding-right: .3rem;
        padding-top: .02rem;
        padding-bottom: .02rem;
        border-radius: .15rem;
    }
    .change_zhe2{
        width:80%;
        text-align: center;
        padding-right: 20%;
        background: #fff;
        padding-left: 10%;
        padding-bottom: 1rem;
    }
    .change_zhe2{
        font-size: .3rem;
    }
    .bottom{
        width: 100%;
        background: #fff;
        margin-top: .2rem;
    }
    .bottom h2{
        /* font-style: normal; */
        font-weight: normal;
        font-size: .28rem;
        padding-left: .3rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        color: #2f2f2f;
    }
    .bottom p{
        padding-left: .3rem;
        padding-right: .3rem;
        text-indent:.48rem; 
        font-size: .24rem;
        line-height: .5rem;
        color: #696969;
        padding-bottom: 1rem;
    }
    .sure{
        width: 70%;
        height: .8rem;
        border: none;
        border-radius: .15rem;
        color: #fff;
        background: #ff0103;
        margin: auto;
    }
</style>
