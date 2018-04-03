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
             <h1 class="mint-header-title">余额</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content'>
          <div class='banner'>
                  <p>余额</p>
                  <h2>203.00</h2>
          </div>
          <ul class='list'>
            <li>
              <p><span>2018-03-06</span><span>周二</span></p>
              <p><b>提现</b><b>-1000</b></p>
            </li>
          </ul>
        </div>

        <footer class='footer'>
          <button>转出</button>
          <router-link :to="{ path: '/top' }" tag='button'>转入</router-link>
        </footer>

  </div>
</template>

<script>
import TouchBalance from './TouchBalance'
export default {
  data(){
    return {
    }
  },
  methods:{

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
.is-right{
  color:#0096ff;
  font-size:.28rem;
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
  height:1.44rem;
  border-bottom:1px solid #dfdfdd;
}
.list li span{
  color:#929292;
  font-size:.22rem;
}
.list li p:nth-child(1){
  padding-top:.37rem;
  margin-left:.3rem;
}
.list li p:nth-child(1) span:nth-child(2){
  padding-left:.3rem;
}
.list li p:nth-child(2){
  padding:0 .3rem;
  display:flex;
  justify-content:space-between;
  margin-top:.16rem;

}
.list li p:nth-child(2) b:nth-child(1){
  font-size: .28rem;
  color:#696969;
}
.list li p:nth-child(2) b:nth-child(2){
  font-size: .32rem;
  color:#2f2f2f;
}
.footer{
  height:.98rem;
  display:flex;
}
.footer button{
  width:50%;
  font-size:.32rem;
  border:0;
}
.footer button:first-child{
  color:#1692e1;
  background:#fff;
}
.footer button:last-child{
  color:#fff;
  background:#1692e1;
}
</style>
