<template>
  <div>
     <header>
          <p>洪山区</p>
          <input type="text" placeholder="内容推荐" @click='GoogleSearch'>
          <ul>
            <li><img src="../assets/HomePage/消息黑色.png" alt="" @click='news'></li>
          </ul>
     </header>
     <div class='main content'>
          <mt-swipe :auto="4000" class='banner'>
           <mt-swipe-item v-for='(item,index) in data' :key='index'><img :src=item.image alt="" @click='banner(item.link)'></mt-swipe-item> 
      </mt-swipe>
       <HomePageNav></HomePageNav>
       <!-- <h2>{{XX}}{{YY}}</h2> -->
       <div class='Nearbyshops'>
              <h1>附近商家</h1>
              <div class='list'>
                  <dl v-for='(item,index) in Locations' :key='index' @click='Nearbyshops'>
                    <!-- <b class='fixed'><i>让利</i><em>111</em></b> -->
                    <dt><img :src='item.img_license'></dt>
                    <dd>
                        <h3><span>{{item.name}}</span></h3>
                        <p class='star'>
                          <span>222</span>
                          <b>|</b>
                          <em><i>546</i>人光临</em>
                        </p>
                        <p class='aside'><b>{{item.city}}</b><em>55km</em></p>
                    </dd>
                  </dl>
              </div>                 
       </div>  
     </div>
    <Foot></Foot> 
  </div>
  
</template>

<script>
import HomePageNav from './main/HomePageNav'
import Foot from './main/Foot'
import { Swipe, SwipeItem } from 'mint-ui';
import { IOSAndroid } from '../assets/js/IOSAndroid.js'
import { setCookie,getCookie } from '../assets/js/cookie.js'
import qs from 'qs';
export default {
    data(){
      return{
        data:null,
        slideshow:"",
        XX:'',  //经度
        YY:'',   //纬度
        Locations:'',
        msg:''
      }
    },
    methods:{
      // 经度  纬度
      GeographicalLocation:function (X,Y) {
           this.XX=X;
           this.YY=Y;
           var that = this;
            this.$axios({
                method:'post',
                url:'http://cloud.eyun.online:9080/user/api/mercuries/info-list/MercuryInfo',
                data:
                {
                "langitude": 116.66847,
                "lantitude": 39.88372
                },
                // {
                //   "langitude": this.XX,
                //   "lantitude": this.YY
                //   },
                headers:{
                'Content-Type': 'application/json',
                }
                
            })
            .then(function(response) {
              console.log(response.data)
             that.Locations = response.data
            })
            .catch((error)=>{
                console.log(error);
            }) 
      },
      news(){
          var  val={
              "func":"openURL",
              "param":{
                  "URL":'http://cloud.eyun.online:8888/..#/News',
              },
          };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
             window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){  
             window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
      },
      banner(link){
        var http=new RegExp("http");
        var product=new RegExp("product");
        var that = this;
        var  linkval = {
              "func":"openURL",
              "param":{
                  "URL":link,
                  "showClose":true
              },
          };
       if(http.test(link) == true){
        //  window.location.href=link
         IOSAndroid(linkval)
       }else if(product.test(link) == true){
        //  this.$router.push({name:"Product",params:{name:'/HomePage'}})
          var Goods=sessionStorage.setItem("GoodsID",link.split('/')[2]); // 商品id 
          var Goods=sessionStorage.getItem("GoodsID");
          this.$axios.get('http://cloud.eyun.online:9080/product/api/product/content?id='+Goods)
              .then(function(response) {   
                  that.data = response.data;
                  console.log(response.data)
              })
              .catch(function(error) {
                  console.log(error);
            }); 
           var  val={
              "func":"openURL",
              "param":{
                  "URL":'http://cloud.eyun.online:8888/#/Product?ProductId='+Goods,
              },
          };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
             window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){  
             window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
       }
      },
      GoogleSearch(){ 
        this.$router.push({name:"DetailsTwo",params:{name:'/FromPage'}})    
      },
      Nearbyshops(){
           var  val={
              "func":"openURL",
              "param":{
                  "URL":'http://cloud.eyun.online:8888/#/PageDetails',
              },
          };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
             window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){  
             window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
      }
    },
    mounted:function () {
       window.GeographicalLocation = this.GeographicalLocation();
       window.Camera = this.Camera;

       // 轮播图
       var that = this; 
       this.$axios.get('http://cloud.eyun.online:9080/advertising/api/findNotDelByLoc')
         .then(function(response) {   
            that.data = response.data;
        })
        .catch(function(error) {
            console.log(error);
       }); 
    },
    created(){
    
    }, 
    components:{          
      HomePageNav,
      Foot
    }
}
</script>
<style scoped>
header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 .1rem;
  height:.8rem;
}
header input{
  width:65%;
  height:.4rem;
  border-radius:.2rem;
  padding-left:.3rem;
  border:0;
}
header p{
  font-size:.3rem;
}
header ul{
  display:flex;
}
header ul li{
  margin:0 .1rem;
}
header ul li img{
  width:.5rem;
  height:.5rem;
}
.banner{
  height:4rem;
}
.main h2{
  height:.62rem;
  background:#ffffff;
  margin-top:.16rem;
  display: flex;
  line-height:.62rem;
  border-radius:.3rem;
  width:92%;
  margin-left:4%;
  position: relative;
}
.main h2 h3{
  padding-left: .25rem;
  color:#2f2f2f;
}

.main h2 b{
    background:url(../assets/HomePage/kuaibao.gif);
    background-size:100% 100%;
    display: inline-block;
    width:.7rem;
    height:.4rem;
    margin-top:.1rem;
    margin-left:.05rem;
   
}
.main h2 .newest{
  margin:0 .22rem;
  color:#f12a2f;
}

.conts{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width:40%;
  color:#2f2f2f;
  font-size:.24rem;
}
.more{
  padding-left:.08rem;
  color:#2f2f2f;
  font-size:.24rem;
}
.main span{
  color:#818181;
  margin-left:.1rem;
}
.Nearbyshops{
  background:#fff;
}
.Nearbyshops h1{
  height:.9rem;
  line-height: .9rem;
  margin-top:.16rem;
  text-align: center;
  font-size:.32rem;
  color:#525252;
}

.Nearbyshops .list dl{
  display:flex;
  height:1.27rem;
  border-top:1px solid #e7e7e7;
  padding:.14rem .2rem .14rem .3rem;
  position: relative;
}
.Nearbyshops .list dl dt{
   width:20%;
}
.Nearbyshops .list dl dd{
   width:80%;
   margin-left:.2rem;
}
.Nearbyshops .list dl dd h3 span{
  font-size:.28rem;
  color:#525252;
}
.Nearbyshops .list dl dd .star{
  margin-top:.1rem;
}
.Nearbyshops .list dl dd .star em{
  font-size:.2rem;
  color:#525252;
}
.Nearbyshops .list dl dd .aside{
  display: flex;
  justify-content:space-between;
  margin:.1rem .1rem;
}
.Nearbyshops .list dl dd .aside b{
  width:80%;
  font-size:.2rem;
  color:#676767;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.Nearbyshops .list dl img{
    width:1.32rem;
    height:1.2rem;
}
.fixed{
  position: absolute;
  right:.2rem;
  top:0;
  width:.7rem;
  height:.8rem;
  background: url('../assets/HomePage/让利.png');
  background-size:100% 100%;
  color:#fff;
}
.fixed i{
  position: absolute;
  white-space:nowrap;
  top:0;
  left:.1rem;
}
.fixed em{
  position: absolute;
   top:.3rem;
   left:.15rem;
}
</style>
