<template>
  <div id='Merchant'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back" @click='MerchantCAclose'></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">商家中心</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content main'>
            <h2>线下门店管理</h2> 
            <div class='show'>
                <div>
                    <p>今日交易</p>
                    <p>￥<span>10000.00</span></p>
                </div>
                <div>
                    <p>今日让利</p>
                    <p>￥<span>10000.00</span></p>
                </div>
                <div>
                    <p>今日销售积分</p>
                    <p>￥<span>10000.00</span></p>
                </div>
            </div>

            <nav class='nav'>
                <dl>
                    <dt><img src="../../assets/MerchantCA/收款码.png" alt=""></dt>
                    <dd>收款码</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/btn_xianjin.png" alt=""></dt>
                    <dd>现金交易</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/折扣.png" alt=""></dt>
                    <dd>折扣设置</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/收款.png" alt=""></dt>
                    <dd>收款记录</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/门店.png" alt=""></dt>
                    <dd>门店资料</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/商超零售.png" alt=""></dt>
                    <dd>超市零售</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/套餐接单.png" alt=""></dt>
                    <dd>套餐接单</dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/MerchantCA/年费缴存.png" alt=""></dt>
                    <dd>年费缴存</dd>
                </dl>
            </nav>

            <div class='Store'>
                <h2>线上店铺数据</h2>
                <ul class='list'>

                </ul>
            </div>
        </div>
       
  </div>
</template>

<script>
import { Header } from 'mint-ui'
export default {
    data(){
        return {

        }
    },
    methods:{
       MerchantCAclose: function() {
        this.$parent.$parent.Merchant = false
       },
    }
}
</script>

<style scoped>
header{
    width:100%;
    background:#fff;
    color:#000;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
    font-size:.32rem;
}
#Merchant{
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background:#f5f5f5;
}
.main h2{
    font-size:.32rem;
    color:#2f2f2f;
    padding-left:.23rem;
    padding-top:.41rem;
    background:#fff;
    padding-bottom:.39rem;
}
.show{
    height:1.68rem;
    background:#fff;
    display:flex;
}

.show>div{
    flex:3;
    height:1.48rem;
    text-align:center;
    color:#fff;
}
.show>div:nth-child(1){
    background: url('../../assets/MerchantCA/btn_jinrijiaoyi.png') no-repeat;
    background-size:100%;
    margin-left:.23rem;  
}
.show>div:nth-child(2){
    background: url('../../assets/MerchantCA/今日让利.png') no-repeat;
    background-size:100%;
    margin-left:.2rem;
    margin-right:.2rem;  
}
.show>div:nth-child(3){
     background: url('../../assets/MerchantCA/今日销售积分.png') no-repeat;
    background-size:100%;
    margin-right:.23rem;  
}
.show>div p:first-child{
    padding-top:.25rem;
    padding-bottom:.2rem;
    font-size:.24rem;
}
.show>div p:last-child{
   font-size:.32rem;
}
.nav{
  display:flex;
  flex-wrap:wrap;
  background:#ffffff;
  height:3.14rem;
  margin-top:.2rem;
}
.nav dl{
  width:25%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:1.57rem;
}
.nav dl dd{
  margin-top:.1rem;
  color:#676767;
  font-size:.2rem;
}
.nav img{
  width:.8rem;
  height:.8rem;
}
.Store{
    margin-top:.2rem;
    height:auto;
    background:#fff;
}
.Store h2{
    font-size:.32rem;
    color:#2f2f2f;
}
.Store  ul{
  background:#fff; 
}
</style>
