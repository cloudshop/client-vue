<template>
    <nav class='nav'>
            <dl>
              <dt><img src="../../assets/HomePageNav/积分商城.png" alt=""></dt>
              <dd>积分商城</dd>
            </dl>
             <dl>
              <dt><img src="../../assets/HomePageNav/积分换购.png" alt=""></dt>
              <dd>积分换购</dd>
            </dl>
             <dl>
              <dt><img src="../../assets/HomePageNav/积分商城.png" alt=""></dt>
              <dd>积分兑换</dd>
            </dl>
             <dl>
              <dt><img src="../../assets/HomePageNav/积分竞购.png" alt=""></dt>
              <dd>积分竞购</dd>
            </dl>
             <!-- <dl>
              <dt><img src="../../assets/HomePageNav/会员中心.png" alt=""></dt>
              <dd>会员中心</dd>
            </dl>
             <dl @click='MerchantCAOpen'>
              <dt><img src="../../assets/HomePageNav/商家中心.png" alt=""></dt>
              <dd>商家中心</dd>
            </dl>
             <dl>
              <dt><img src="../../assets/HomePageNav/服务中心.png" alt=""></dt>
              <dd>服务中心</dd>
            </dl>
             <dl>
              <dt><img src="../../assets/HomePageNav/交易中心.png" alt=""></dt>
              <dd>交易中心</dd>
            </dl> -->


       <!-- 商家中心 -->
            <mt-popup
                v-model="Merchant"
                position="right"
                :modal=false> 
               <MerchantCA></MerchantCA>   
            </mt-popup>
    </nav>
</template>

<script>
import MerchantCA from '../MineList/MerchantCA'
import { Popup } from 'mint-ui';
export default {
  data(){
      return{
        Merchant:false
      }
    },
  methods:{
     MerchantCAOpen: function() {
        this.Merchant = true
       },
   },
   components:{
     MerchantCA 
   }
}
</script>

<style scoped>
.nav{
  display:flex;
  flex-wrap:wrap;
  background:#ffffff;
  height:1.54rem;
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
}
.nav img{
  width:.8rem;
  height:.8rem;
}
</style>
