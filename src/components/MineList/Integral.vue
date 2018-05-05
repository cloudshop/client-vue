<template>
  <div class='RemainingSum'>
    <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                  <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">贡融积分</h1>
            <div class="mint-header-button is-right" ></div>
        </header>
        <div class='content'>
          <div class='banner'>
                  <p>贡融积分</p>
                  <!-- <h2>91.0</h2> -->
                  <!--<h2>{{$route.params.num}}</h2>-->
                  <h2>{{arr.integral}}</h2>
          </div>
          <!--<ul class='list'>-->
          <!--     <li>-->
          <!--          <dl class='left'>-->
          <!--              <dt>2018-03-06</dt>-->
          <!--              <dd>提现</dd>-->
          <!--          </dl>-->
          <!--          <dl class='right'>-->
          <!--              <dt>&nbsp;</dt>-->
          <!--              <dd>1205.75</dd>-->
          <!--          </dl>-->
          <!--     </li>-->
          <!--     <li>-->
          <!--          <dl class='left'>-->
          <!--              <dt>2018-03-06</dt>-->
          <!--              <dd>提现</dd>-->
          <!--          </dl>-->
          <!--          <dl class='right'>-->
          <!--              <dt>&nbsp;</dt>-->
          <!--              <dd>1205.75</dd>-->
          <!--          </dl>-->
          <!--     </li>-->
          <!-- </ul>-->
        </div>

  </div>

</template>

<script>
import { Header,Popup } from 'mint-ui';
export default {
      data(){
          return{  
              arr:'null'
          }
          
      },
   
      created:{
            
      },
      created(){
             var that = this
        this.$axios.get('api/wallet/api/wallets/user',{
        })
        .then(function(res){
      //     console.log(res.data.balance)
          that.arr = res.data
      //      that.arr = res.data
      //      console.log(arr)
        })
        .catch(function(error){
          console.log(error)
        })
     },
      methods:{
            one:function(){
                  
            }
      },
}
</script>

<style scoped>
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
     font-size:.32rem;
}

.RemainingSum{
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
.banner{
  background:url("../../assets/Mine/RemainingSum/bg.png");
  background-size:100%; 
  width:100%;
  height: 3.7rem;;
}
.banner p{
  text-align:center;
  font-size:.32rem;
  color:#fff;
  padding-top:.98rem;
}
.banner h2{
  text-align:center;
  font-size:.8rem;
  color:#fff;
  padding-top:.36rem;
}
.list li{
    height:1.26rem;
    border-bottom:1px solid #dfdfdd;
    display:flex;
    justify-content:space-between;
    padding:0 .3rem;
}
.list li .left{
    padding-top:.28rem;
}
.list li .left dt{
    font-size:.22rem;
    color:#929292;
}
.list li .left dd{
    padding-top:.2rem;
    color:#000;
    font-size:.28rem;
}
.list li .right{
    padding-top:.34rem; 
}
.list li .right dt{
    font-size:.22rem;
    color:#929292;
    font-weight:normal;
}
.list li .right dd{
    padding-top:.1rem;
     font-size:.32rem;
     color:#ff0e00;
     font-weight:bold;
}
</style>
