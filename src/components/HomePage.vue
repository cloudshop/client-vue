<template>
  <div>
     <div class='main content'>
          <mt-swipe :auto="4000" class='banner'>
           <mt-swipe-item v-for='(item,index) in data' :key='index'><img :src=item.image alt=""></mt-swipe-item> 
      </mt-swipe>
       <HomePageNav></HomePageNav>
       <!-- <h2><h3>贡融</h3><b></b><p class='newest'>最新</p> 
       <p class='conts'>新最新最新最新最新最新最新最新最新最新最</p> 
       <span>|</span><p class='more'>更多</p></h2> -->
       <div class='Nearbyshops'>
              <h1>附近商家</h1>
              <div class='list'>
                  <dl>
                    <b class='fixed'><i>让利</i><em>111</em></b>
                    <dt><img src='../assets/Classify/bg.gif'></dt>
                    <dd>
                        <h3><span>11</span></h3>
                        <p class='star'>
                          <span>11</span>
                          <b>|</b>
                          <em><i>11</i>人光临</em>
                        </p>
                        <p class='aside'><b>111</b><em>111</em></p>
                    </dd>
                  </dl>
                    <dl>
                    <b class='fixed'><i>让利</i><em>111</em></b>
                    <dt><img src='../assets/Classify/bg.gif'></dt>
                    <dd>
                        <h3><span>11</span></h3>
                        <p class='star'>
                          <span>11</span>
                          <b>|</b>
                          <em><i>11</i>人光临</em>
                        </p>
                        <p class='aside'><b>111</b><em>111</em></p>
                    </dd>
                  </dl>
                    <dl>
                    <b class='fixed'><i>让利</i><em>111</em></b>
                    <dt><img src='../assets/Classify/bg.gif'></dt>
                    <dd>
                        <h3><span>11</span></h3>
                        <p class='star'>
                          <span>11</span>
                          <b>|</b>
                          <em><i>11</i>人光临</em>
                        </p>
                        <p class='aside'><b>111</b><em>111</em></p>
                    </dd>
                  </dl>
                    <dl>
                    <b class='fixed'><i>让利</i><em>111</em></b>
                    <dt><img src='../assets/Classify/bg.gif'></dt>
                    <dd>
                        <h3><span>11</span></h3>
                        <p class='star'>
                          <span>11</span>
                          <b>|</b>
                          <em><i>11</i>人光临</em>
                        </p>
                        <p class='aside'><b>111</b><em>111</em></p>
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
import qs from 'qs';
export default {
    data(){
      return{
        data:null,
        slideshow:"",
        tokenString:''   
      }
    },
    methods:{
      fn(){
        // 点击验证码
            this.$axios.get('/api')
             .then(function(response) {
               console.log(response);
           })
            .catch(function(error) {
                 console.log(error);
           });
      },
      hwajax:function (strings) {
           this.tokenString=strings;
           console.log(this.tokenString)
           console.log(111)
      }
    },
    mounted:function () {
         window.hwajax = this.hwajax;       
    },
    created(){
      // 轮播图
       var that = this; 
       this.$axios.get('http://cloud.eyun.online:9080/advertising/api/findNotDelByLoc')
         .then(function(response) {   
            that.data = response.data;
        })
        .catch(function(error) {
            console.log(error);
       }); 
      
        // params = qs.stringify(params) 
        this.$axios({
            method:'post',
            url:'auth',
            // data:params,
            headers:{
              'Content-Type': 'application/json',
            }
        })
        .then(function(response) {
          // console.log(1) // 可以打印
          // console.log(response.data); //
        })
        .catch((error)=>{
            console.log(error);
        })

    }, 
    components:{          
      HomePageNav,
      Foot
    }
}
</script>
<style scoped>

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
