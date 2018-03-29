<template>
  <div class='Appreciation'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back" @click='AppreciationPageClose'></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">支付增值商户年费</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='content'>
            <div class='nav'>
                <dl>
                    <dt><img src="../../assets/Mine/headportrait.jpg" alt=""></dt>
                    <dd>
                        <h2>用户名</h2>
                        <p>当前尚未开通</p>
                    </dd>
                </dl>
            </div>
            <div class='PayAFee'>
                <h2>增值商户年费</h2>
                <p>
                    <b>￥998.00</b>
                    <router-link :to="{ path: '/CreditCard' }" tag='button'  >开通</router-link> 
                </p>          
            </div>
        </div>
        
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{

        }
    },
    methods:{
          AppreciationPageClose(){
            this.$parent.$parent.AppreciationPage = false
        }
    }
}
</script>

<style scoped>
.Appreciation{
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
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    font-size:.32rem;
    border-bottom:1px solid #e7e7e7;
}
.nav{
    height:1.52rem;
    background:#fff;
    border-bottom:.01rem solid #e7e7e7;
    margin-top:.11rem;
}
.nav dl{
    display:flex;
    padding-top:.3rem;
    padding-left:.3rem;
}
.nav dl dd{
    margin-left:.16rem;
}
.nav img{
    width:.86rem;
    height:.86rem;
    border-radius:50%;
}
.nav dl dd h2{
    font-size:.28rem;
    color:#2f2f2f;
}
.nav dl dd p{
    font-size:.24rem;
    color:#696969;
    margin-top:.2rem;
}
.PayAFee{
    height:.88rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
    padding:0 .3rem;
}
.PayAFee h2{
    font-size:.28rem;
    color:#2f2f2f;
} 
.PayAFee b{
    font-family: 'MicrosoftYaHei';
    font-size:.28rem;
    color:#ff0000;
    margin-right:.24rem;  
}
.PayAFee button{
    width:1.1rem;
    height:.44rem;
    border-radius:.22rem;
    border:1px solid #ff0000;
    background:#fff;
    color:#ff0000;
}
</style>
