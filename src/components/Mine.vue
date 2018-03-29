<template>
   <div>
         <header class='header'>
               <div class='headRight'>
                  <router-link :to="{ path: '/Information' }" tag='p'>
                  </router-link> 
                  <p></p>
               </div>
               <dl>
                   <dt><img src="../assets/Mine/headportrait.jpg" alt=""></dt>
                   <dd>
                         <h2>暂无昵称</h2>
                         <p>普通会员</p>
                   </dd>
               </dl>
              <span></span>
         </header>
     
        <div class='main content'>
              <div class='nav'>
                    <dl @click='Open'>
                       <dt><img src="../assets/Mine/余额.png" alt=""></dt>
                       <dd>
                             <p>余额</p>
                             <span>0.00</span>
                       </dd>
                    </dl>
                    <dl @click='GongStampsOpen'>
                       <dt><img src="../assets/Mine/贡融券.png" alt=""></dt>
                       <dd>
                             <p>贡融券</p>
                             <span>0.00</span>
                       </dd>
                    </dl>
                    <dl @click='GongIntegralOpen'>
                       <dt><img src="../assets/Mine/贡融积分.png" alt=""></dt>
                       <dd>
                             <p>贡融积分</p>
                             <span>0.00</span>
                       </dd>
                    </dl>
              </div>
              <div class='mainContent'>
                     <h2>线上商城</h2> 
                     <dl class='onlinelist'>
                           <dt><img src="../assets/Mine/订单.png" alt=""></dt>
                           <dd>全部订单</dd>
                     </dl>
              </div>
             <div class='mainContent'>
                     <h2>贡融服务</h2> 
                     <div class='list'>
                         <dl>
                           <dt><img src="../assets/Mine/消费支付.png" alt=""></dt>
                           <dd>消费支付</dd>
                         </dl>
                         <dl>
                            <dt><img src="../assets/Mine/积分赠送.png" alt=""></dt>
                            <dd>积分赠送</dd>
                          </dl>
                          <dl @click='SellerCenterPageOpen'>
                            <dt><img src="../assets/Mine/商户中心.png" alt=""></dt>
                            <dd>商户中心</dd>
                          </dl>
                          <dl>
                            <dt><img src="../assets/Mine/我的团队.png" alt=""></dt>
                            <dd>我的团队</dd>
                         </dl>
                    </div>              
              </div>
        </div>

        <Foot></Foot>
             <!-- 余额 -->
            <mt-popup
                v-model="Remaining"
                position="bottom"
                :modal=false> 
               <RemainingSum></RemainingSum>   
            </mt-popup>

             <!-- 贡融券 -->
            <mt-popup
                v-model="GongStamps"
                position="bottom"
                :modal=false> 
               <Stamps></Stamps>   
            </mt-popup>

             <!-- 贡融积分 -->
            <mt-popup
                v-model="GongIntegral"
                position="bottom"
                :modal=false> 
               <Integral></Integral>   
            </mt-popup>

              <!-- 商户中心 -->
            <mt-popup
                v-model="SellerCenterPage"
                position="bottom"
                :modal=false> 
               <SellerCenter></SellerCenter>   
            </mt-popup>
   </div>
</template>

<script>
import Stamps from './MineList/Stamps'
import Integral from './MineList/Integral'
import Foot from './main/foot'
import RemainingSum from '../components/MineList/RemainingSum'
import SellerCenter from '../components/MineList/SellerCenter'
import { Header,Popup } from 'mint-ui';

export default {
      data(){
          return{
            Remaining:false,     
            GongStamps:false,
            GongIntegral:false,
            SellerCenterPage:false
          }
      },
      methods:{
       Open: function() {
        this.Remaining = true
       },
       GongStampsOpen:function(){
        this.GongStamps = true
       },
      GongIntegralOpen:function(){
        this.GongIntegral = true
       },
       SellerCenterPageOpen:function(){
       this.SellerCenterPage=true 
       }
      },
     components:{
        Foot,
        RemainingSum,
        Stamps,
        Integral,
        SellerCenter
     }
}
</script>
<style scoped>

.header{
   width:100%;
   height:1.92rem;
   background:#ff5067;
   display:flex;
   justify-content:space-between;
   align-items:center;
   position: fixed;
   top:0;
}
.header dl{
   padding-left:.2rem;
   display:flex;
   margin-top:.4rem;
}
.header dl dt{
   width:.92rem;
   height:.92rem;
   border-radius:50%;
   border:3px solid #ffffff;
}
.header dl dt img{
   width:.92rem;
   height:.92rem;
   border-radius:50%;
}
.header dl dd{
   padding-left:.2rem;
}
.header dl dd h2{
   font-size:.32rem;
   color:#ffffff;
}
.header dl dd p{
   font-size:.24rem;
   color:#fff;
   padding-top:.4rem;
}
.header span{
   width:.4rem;
   height:.4rem;
   margin-right:.15rem;
   display:inline-block;
   background:url(../assets/Mine/更多.png);
   background-size:100% 100%;
    margin-top:.4rem;
}
.header .headRight{
      position: absolute;
      right:.3rem;
      top:.2rem;
      display:flex;
}
.header .headRight P{
     width:.5rem;
     height:.5rem;  
}
.header .headRight p:first-child{
      background:url('../assets/Mine/设置.png');
      background-size:100% 100%;
          margin-right:.24rem;
}
.header .headRight p:last-child{
      background:url('../assets/Mine/消息.png');
      background-size:100% 100%;
}
.content{
      background:#fff;
}
.main{
   margin-top:1.92rem;
}
.main .nav{
   display:flex;
   height:1.61rem;
   border-top:1px solid #e7e7e7;
}
.main .nav dl{
   flex:1;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   height:1.61rem;  
 
}
.main .nav dl dt{
   width: .5rem;
   height:.5rem;  
}
.main .nav dl dt img{
   width: .5rem;
   height:.5rem;
}
.main .nav dl dd{
   font-size:.24rem;
   color:#2f2f2f;
   line-height: .45rem;
}
.main .nav dl dd p{
   text-align:center;      
}
.main .nav dl dd span{
   display:block;
   text-align:center;
  
}
.mainContent {
      border-top:1px solid #e7e7e7;
      margin:0 .4rem;
}
.mainContent h2{
      margin:.3rem 0;
      font-size:.24rem;
      color:#2f2f2f;
      font-weight:bold;
}
.mainContent .list{
     display:flex;
     flex-wrap:wrap;
     width:100%;
}
.mainContent .list dl{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:25%;
      
}
.mainContent .list dl dt{
      width:.5rem;
      height:.5rem;
}
img{
      width:.5rem;
      height:.5rem;
}
.mainContent .list dl  dd{
      color:#2f2f2f;
      font-size:.24rem;
      margin-top:.3rem;
}
.mainContent .onlinelist{
      width:25%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
}

.mainContent .onlinelist dd{
       color:#2f2f2f;
      font-size:.24rem;
      margin-top:.25rem;
      margin-bottom: .3rem;
}

</style>
