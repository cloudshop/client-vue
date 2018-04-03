<template>
  <div>
    <button  @click='fn'>axios</button>
     <div class='main content'>
          <mt-swipe :auto="4000" class='banner'>
           <mt-swipe-item v-for='(item,index) in data' :key='index'><img :src=item.image alt=""></mt-swipe-item> 
      </mt-swipe>
       <HomePageNav></HomePageNav>
       <h2><h3>贡融</h3><b></b><p class='newest'>最新</p> 
       <p class='conts'>新最新最新最新最新最新最新最新最新最新最</p> 
       <span>|</span><p class='more'>更多</p></h2>
       <div class='Nearbyshops'>
              <h1>附近商家</h1>
              <div class='list'>
                  <dl v-for='(item,index) in data' :key='index'>
                    <b class='fixed'><i>让利</i><em>{{item.percentage}}</em></b>
                    <dt><img :src="item.imgurl" alt=""></dt>
                    <dd>
                        <h3><span>{{item.name}}</span></h3>
                        <p class='star'>
                          <span>{{item.stars}}</span>
                          <b>|</b>
                          <em><i>{{item.peoples}}</i>人光临</em>
                        </p>
                        <p class='aside'><b>{{item.contnet}}</b><em>{{item.km}}</em></p>
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
import Foot from './main/foot'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data(){
      return{
        data:null,
        slideshow:""
      }
    },
    methods:{
      fn(){
            this.$axios.get('/api')
             .then(function(response) {
               console.log(response);
           })
            .catch(function(error) {
                 console.log(error);
           });
      },
    },
    mounted() {
      // var dom = document.querySelector('.main')
      // dom.addEventListener('scroll', function () {
      //     if(this.scrollTop>50){
      //         $('.header').css('background',"blue");
      //         $('.header').children('p').css('color','#000')
      //     }else{
      //          $('.header').css('background',"");
      //         $('.header').children('p').css('color','#fff')
      //     }
      // }, false)
     
      // window.webkit.messageHandlers.GongrongAppModel.postMessage({      
      //   func:'pay',
      //   payType:'Ali',
      //   orderStr:'alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2018032102418344&biz_content=%7B%22body%22%3A%22%E6%B5%8B%E8%AF%95%E6%94%AF%E4%BB%98%E5%AE%9D%22%2C%22out_trade_no%22%3A%22123457%22%2C%22passback_params%22%3A%22test+notify%22%2C%22subject%22%3A%22tititi%22%2C%22timeout_express%22%3A%2215m%22%2C%22total_amount%22%3A%220.01%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fgongrong.ngrok.xiaomiqiu.cn%2Fpay%2Fapi%2Falipay%2Fnotify&sign=g3HxWufdovh1LKduFje5pERL6NdtFJ%2BcGKXgutBgIniYI11Tn9Td7csKw%2Br5nY7r9nP7ljU%2FFX%2BHdfOAiyWBfjdzCkZoUShYJNPYfogwqsLKlXUp7kMd3xG02oo4yM%2F02rkk%2BIia%2F%2FSZI328JyIyJcQY%2FnRey%2B56NY6inW6aySYqRNINGWpHUB%2BT5PeEKrYFxQdntjzOjO4%2Bb43VC6iBus4JoZdYr5whzgxdCvGxMayfLKu5Ugcft3KSmY6Cu5lOMGuZTQlWl%2BJzu%2BKHqt5p2c9OzF3YykYeusShNOy60bsDKZ6dXoCQafmCO7cBBAqac%2FfntLIvcW4XRv30qebPbQ%3D%3D&sign_type=RSA2&timestamp=2018-04-02+15%3A27%3A28&version=1.0'
      //  }
      // )
    },
    created(){
       var that = this; 
      // this.$http({url: '/HomePage',method: 'GET'}).then((res) => {this.data = res.data.data;
      // console.log(this.data)
      // });
      //  this.$axios.get('/slideshow')
      //    .then(function(response) {   
      //       that.data = response.data;
      //   })
      //   .catch(function(error) {
      //       console.log(error);
      //  }); 
       let postData = {
        'username':'admin',
        'password':'admin'
}
        this.$axios.post('/apis',postData)
          .then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
          }); 


        $.ajax({
          url:'http://192.168.1.96:9080/auth/login',
          method:'post',
          beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
          success:function(response){
            console.log(response)
          }
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
