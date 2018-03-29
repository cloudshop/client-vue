<template>
  <div class='SellerCenter'>
       <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back" @click='SellerCenterClose'></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">商户中心</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='content'>
            <div class='TopContent'>
                <h2>普通商家相关权益</h2>
                <h3>入驻要求</h3>
                <ul>
                    <li>年服务费0元;</li>
                    <li>提供身份证,营业执照等相关信息;</li>
                </ul>
                <h3>积分奖励</h3>
                <ul>
                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
                </ul>
                <h3>积分奖励</h3>
                <ul>
                    <li>分享增值商家入驻100元现金奖励</li>
                </ul>

                <button class='MyBtn' @click='OrdinaryBusinessPageOpen'>申请成为普通商家</button>
            </div>
            <div class='BottomContent'>
                 <h2>增值商家相关权益</h2>
                 <h3>入驻要求</h3>
                 <ul>
                    <li>年服务费998元/年;</li>                   
                    <li>提供身份证,营业执照等相关信息;</li>
                    <li>提供商家管理者身份认证;</li>
                </ul>
                 <h3>积分奖励</h3>
                 <ul>
                    <li>享受自身让利额2倍的贡融积分奖励;</li>
                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
                </ul>
                 <h3>积分奖励</h3>
                 <ul>
                    <li>分享增值商家入驻100元现金奖励</li>
                </ul>

                 <button class='MyBtn' @click='AppreciationPageOpen'>申请成为增值商家</button>
            </div>
        </div>


         <!-- 申请成为普通商家 -->
            <mt-popup
                v-model="OrdinaryBusinessPage"
                position="right"
                :modal=false> 
               <OrdinaryBusiness></OrdinaryBusiness>   
            </mt-popup>

         <!-- 申请成为增值商家 -->
            <mt-popup
                v-model="AppreciationPage"
                position="right"
                :modal=false> 
               <Appreciation></Appreciation>   
            </mt-popup>
  </div>
</template>

<script>
import { Header,Popup } from 'mint-ui';
import OrdinaryBusiness from '../MineList/OrdinaryBusiness'
import Appreciation from '../MineList/Appreciation'
export default {
    data(){
        return {
           OrdinaryBusinessPage:false,
           AppreciationPage:false
        }
    },
    methods:{
        SellerCenterClose:function(){
            this.$parent.$parent.SellerCenterPage = false
        },
        OrdinaryBusinessPageOpen(){
            this.OrdinaryBusinessPage = true
        },
        AppreciationPageOpen(){
            this.AppreciationPage = true
        }
    },
    components:{
      OrdinaryBusiness,
      Appreciation
    }
}
</script>

<style scoped>
.SellerCenter{
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
.TopContent{
    height:8rem;
    background:#fff;
    margin:.2rem .3rem 0 .3rem;
    border-radius:.2rem;
}
.BottomContent{
   background:#fff;
   height:9rem;
   margin-top:.2rem;
    margin:.2rem .3rem 0 .3rem;
     border-radius:.2rem;
}
h2{
    font-size:.32rem;
    color:#2f2f2f;
    padding-top:.22rem;
    padding-left:.22rem;
}
h3{
    border-left:.06rem solid #0bacff;
    padding-left:.16rem;
    margin-top:.2rem;
    font-size:.24rem;
    color:#2f2f2f;
}
ul li{
    font-size:.24rem;
    color:#2f2f2f;
    margin-left:.24rem;
    line-height:.55rem;
}
.MyBtn{
    width:70%;
    background:#0bacff;
    margin-left:15%;
    height:.8rem;
    border-radius:.12rem;
    font-size:.32rem;
    color:#fff;
    border:0;
    margin-top:.2rem;
}

</style>
