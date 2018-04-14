
<template>
  <div class='news'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal" @click='back'>
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">消息</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='nav'>
            <dl>
                <dt><img src="../../assets/news/物流快递.png" alt=""></dt>
                <dd>物流</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/通知.png" alt=""></dt>
                <dd>通知</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/优惠券.png" alt=""></dt>
                <dd>优惠</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/信息.png" alt=""></dt>
                <dd>互动</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/订阅.png" alt=""></dt>
                <dd>订阅</dd>
            </dl>
        </div>
        <div class='content'>
            <ul class='list'>
                <li>
                    <dl>
                        <dt><img src="../../assets/news/信息.png" alt=""></dt>
                        <dd>
                            <h3>贡融积分客服一</h3>
                            <span>有什么需要帮助的呢？</span>
                        </dd>
                    </dl>
                    <p>16:50</p>
                </li>
            </ul>
           
        </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { IOSAndroid } from '../../assets/js/IOSAndroid.js'
export default {
    data(){
        return {

        }
    },
    methods:{
        back(){
              var  val={
                        "func":"closeCurrent",
                        "param":{},
                    };
            IOSAndroid(val);
        }
    }
}
</script>

<style scoped>
.news{
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
    color:#000;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
    font-size:.32rem;
}
.nav{
    height:1.64rem;
    background:#fff;
    display:flex;
}
.nav dl{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.nav dl dd{
    padding-top:.1rem;
    font-size:.22rem;
    color:#696969;
}
.nav dl dt img{
    width:.7rem;
    height:.7rem;
}
.list{
    background:#fff;
    margin-top:.2rem;
}
.list li{
  height:1.28rem;
  border-top:#e7e7e7 1px solid;
  display:flex;
  justify-content:space-between;
  padding:0 .3rem;
}
.list li dl{
    display:flex;
    margin-top:.2rem;
}
.list li dl dt{
    width:.88rem;
    height:.88rem;
}
.list li dl dt img {
    width:.88rem;
    height:.88rem;
}
.list li dl dd{
    padding-left:.3rem;
}
.list li dl dd h3{
    font-size:.28rem;
    color:#2f2f2f;
}
.list li dl dd span{
    color:#696969;
    font-size:.22rem;
    display:block;
    padding-top:.22rem;
}
.list li p{
   color:#696969;
    font-size:.22rem;
    padding-top:.2rem; 
}
</style>
<template>
  <div class='news'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">消息</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='nav'>
            <dl>
                <dt><img src="../../assets/news/物流快递.png" alt=""></dt>
                <dd>物流</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/通知.png" alt=""></dt>
                <dd>通知</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/优惠券.png" alt=""></dt>
                <dd>优惠</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/信息.png" alt=""></dt>
                <dd>互动</dd>
            </dl>
            <dl>
                <dt><img src="../../assets/news/订阅.png" alt=""></dt>
                <dd>订阅</dd>
            </dl>
        </div>
        <div class='content'>
             <router-link :to="{ path: '/Talk' }"  tag='p'>跳转
             </router-link> 
            <ul class='list'>
                <li>
                    <dl>
                        <dt><img src="../../assets/news/信息.png" alt=""></dt>
                        <dd>
                            <h3>贡融积分客服一</h3>
                            <span>有什么需要帮助的呢？</span>
                        </dd>
                    </dl>
                    <p>16:50</p>
                </li>
            </ul>
           
        </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
    methods:{
        back(){
              var  val={
                        "func":"closeCurrent",
                        "param":{},
                    };
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                    if(isiOS){
                        this.$router.push('/')
                        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);   
                    }else if(isAndroid){   
                        this.$router.push('/')            
                       window.androidObject.JSCallAndroid(JSON.stringify(val));
                   }         
        }
    }
}
</script>

<style scoped>
.news{
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
    color:#000;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
    font-size:.32rem;
}
.nav{
    height:1.64rem;
    background:#fff;
    display:flex;
}
.nav dl{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.nav dl dd{
    padding-top:.1rem;
    font-size:.22rem;
    color:#696969;
}
.nav dl dt img{
    width:.7rem;
    height:.7rem;
}
.list{
    background:#fff;
    margin-top:.2rem;
}
.list li{
  height:1.28rem;
  border-top:#e7e7e7 1px solid;
  display:flex;
  justify-content:space-between;
  padding:0 .3rem;
}
.list li dl{
    display:flex;
    margin-top:.2rem;
}
.list li dl dt{
    width:.88rem;
    height:.88rem;
}
.list li dl dt img {
    width:.88rem;
    height:.88rem;
}
.list li dl dd{
    padding-left:.3rem;
}
.list li dl dd h3{
    font-size:.28rem;
    color:#2f2f2f;
}
.list li dl dd span{
    color:#696969;
    font-size:.22rem;
    display:block;
    padding-top:.22rem;
}
.list li p{
   color:#696969;
    font-size:.22rem;
    padding-top:.2rem; 
}
</style>
>>>>>>> c390c27d65e015749cd1f458b0daa20b065c73c1
