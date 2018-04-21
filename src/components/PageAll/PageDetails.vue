<template>
  <div class='PageDetails'>
    <!-- 店铺首页PageDetails -->
    <div class='PageDetails_head'>
      <div class="PageDetails_header">
        <span @click='back'>〈</span>
        <input type="text" placeholder="内容推荐">
        <span><img src="../../assets/PageDetails/主页.png" alt=""></span>
        <span><img src="../../assets/PageDetails/消息.png" alt=""></span>
      </div>
      <div class="PageDetails_main">
        <p class="PageDetails_main_img"><img src="" alt=""></p>
        <p class="PageDetails_main_main"><span>巴黎欧莱雅官方旗舰店</span><span>59.3万人</span></p>
      </div>
      <p class="PageDetails_attention">
        <img src="../../assets/PageDetails/矩形10.png" alt="">
        <span><img src="../../assets/PageDetails/关注.png" alt=""></span><span>关注</span>
      </p>
    </div>
     <div @click="pushProduct"  class='content'>
        <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
          <div class="tabCon_main_left">
              <img src="../../assets/Classify/bg.gif" alt="">
          </div>
          <div class="tabCon_main_right">
              <h4 class="h4">{{item.name}}</h4>
              <div class="tabCon_main_right_all">
                <p>￥{{item.money}}</p>
                <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                <p>送贡融积分 10</p>
              </div>
              <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
              <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import PageAll from './PageAll'
import PageDetailsChild from './PageDetailsChild'
export default {
  name: 'page-navbar',
  data() {  
    return {  
      flag: false,
      active: -1,
      selected: '1',
      'tabCon_main':[
          {
              name: '回力休闲韩版冬季帆布鞋回力休闲',
              money: '1212',
              liststart: 5
          },
          {
              name: '回力休闲韩版冬季帆布鞋回力休闲',
              money: '999.8',
              liststart: 4
          },
            {
              name: '回力休闲韩版冬季帆布鞋回力休闲',
              money: '999.8',
              liststart: 4
          },
            {
              name: '回力休闲韩版冬季帆布鞋回力休闲',
              money: '999.8',
              liststart: 4
          }
      ],
      num: 1
    }
  },
  components: {
    PageAll,
    PageDetailsChild
  },
  methods: {
    showHide(index){
      this.active = index
    },
    back(){
      var  val={
          "func":"closeCurrent",
          "param":{},
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
    pushProduct(){
      sessionStorage.setItem("GoodsID",30) 
      this.$router.push({name:"Product",params:{name:'/Product'}})
    }
  },
    created(){
      //路由传值接收
      console.log(this.$route.params.id)
    }
}
</script>

<style scoped>
.commodityAll{
  height: 10rem;
}
.mint-tab-container-wrap{
  display: flex !important;
}
.mint-tab-container-item{
  position: relative;
  /* height: 30rem; */
  overflow-y: scroll;
}
.tabCon{ 
  height: 10rem;
  position: absolute;
  overflow-y: scroll;
  top: 1.14rem;
}
.PageDetails_head{
  width: 100%;
  position: relative;
  background: url(../../assets/Mine/headportrait.jpg);
  height: 2.4rem;
}
.PageDetails_header{
  width: 96%;
  margin-left: 2%;
  display: flex; 
  padding: .45rem 0;
}
.PageDetails_header span:nth-child(1){
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.PageDetails_header span{
  margin-top:.2rem;
}
.PageDetails_header input{
  border-radius: .3rem;
  border: none;
  height: .6rem;
  flex: 1;
}
.mt-tab-container {
  overflow-y: auto;
}
input[type='text']{
  padding-left: .6rem;
}
.PageDetails_header span:nth-child(3){
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.PageDetails_header span:nth-child(4){
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.PageDetails_header span:nth-child(3) img{
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.PageDetails_header span:nth-child(4) img{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.PageDetails_main{
  width: 100%;
  /* height: .75rem; */
  display: flex;
}
.PageDetails_main_img{
  width: 20%;
  background: url(../../assets/HomePage/bg.gif);
}
.PageDetails_main_main{
  display: flex;
  flex: 1;
  flex-direction: column;
}
.PageDetails_main_main span:nth-child(1){
  color: #fff;
  font-size: .24rem;
  margin-left: .2rem
}
.PageDetails_main_main span:nth-child(2){
  display: flex;
  justify-content: flex-end;
  margin-right: .05rem;
  color: #fff;
  margin-top: .2rem
}
.PageDetails_attention{
  position: relative;
}
.PageDetails_attention img{
  width: 14%;
  right: 0;
  bottom: .3rem;
  position: absolute;;
}
.PageDetails_attention span{
  color: #fff;
  right: .1rem;
  bottom: .38rem;
  position: absolute;
}
.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
  background: red
}
.mint-navbar{ 
  width:100%;
  display:flex;
  position: absolute;
  top:2.4rem;
  z-index:666666;
}
.mint-navbar a{
  height: .98rem;
  flex:1;
}
.mint-navbar dt img{
  width: 25%;
}
.mint-navbar dd{
  font-size: .24rem;
  color: #2f2f2f;
  margin-top: .14rem;
}
.mint-navbar dd:hover{
  color: #ff0103;
}
.mint-navbar dl:hover{
  color: #ff0103;
  padding-bottom: .2rem;
  border-bottom:2px solid #ff0103;
  box-sizing: border-box;
}
.PageDetails_navs{
  width: 100%;
  height: 2.6rem; /*  */
}
.PageDetails_wrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: .12rem;
  justify-content: center;
  align-items: center;
}
.PageDetails_wrap div{
  width: 2.9rem;
  height: 1.8rem;/*  */
  margin-right: .12rem;
  margin-bottom: .12rem;
  background: #ccc;
}
.PageDetails_wrap div:nth-child(3){
  margin-right: .12rem;
}
.PageDetails_wrap div:nth-child(2){
  margin-right: 0rem;
}
.PageDetails_wrap div:nth-child(4){
  margin-right: 0rem;
}
.PageDetails_wraps{
  width: 96%;
  margin-left: 2%;
  display: flex;
  margin-top: .12rem;
  justify-content: center;
  align-items: center;
}
.PageDetails_wraps div{
  width: 3.6rem;
  height: 1.8rem;/*  */
  margin-bottom: .12rem;
  background: #ccc;
}
.PageDetails_wraps div:nth-child(2){
  margin-left: .1rem;
}
.PageDetails_classify{
  width: 100%;
  overflow-y: auto;
  background: #fff;
}
.PageDetails_title{
  width: 94%;
  margin-left: 3%;
  height: .88rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
  color: #2F2F2F;
  font-size: .28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.PageDetails_title_main{
  width: 94%;
  margin-left: 3%;
  height: auto;
  margin-top: .2rem;
}
.PageDetails_title_ul{
  width: 100%;
}
 .onclicks{
  height: .88rem;
  margin-top: .2rem;
  color: #2F2F2F;
  font-size: .28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
.mint-tab-container{
  margin-top:1.8rem;
}

.PageAll_tab{
    width: 100%;
    height:100%;
    background: #fff;
    display:flex;
    flex-direction: column;
}
.PageAll_tab_ul{
    display: flex;
    height: .96rem;
    border-bottom: .1rem solid #f8f8f8;
    /* margin-top: .12rem; */
}
.PageAll_tab_ul li{
    width: 25%;
    height: .96rem;
    display: flex;
    font-size: .24rem;
    justify-content: center;
    align-items: center;
}
.PageAll_tab_ul li:hover{
    color: #ff0103
}
.tabCon{
    flex:1;
    margin-top: .12rem;
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
}
.content{
    width:100%;
}
.tabCon_main{
    width: 98%;
    margin-left: 1%;
    display: flex;
}
.tabCon_main_left{
    width: 1.82rem;
    height: 1.82rem;
    padding: .15rem;
}
.tabCon_main_left img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: .05rem;
}
.tabCon_main_right{
    flex: 1;
    height: 1.82rem;
    padding: .18rem 0;
}
.h4{
    font-size: .28rem;
    color: #2f2f2f;
    font-weight: normal;
}
.tabCon_main_right_all{
    display: flex;
    margin-top: .2rem;
}
.tabCon_main_right_all p:nth-child(1){
    width: 20%;
    font-size: .26rem;
    color: #ff0103;
    margin-right: .24rem;
    font-weight: bold;
}
.tabCon_main_right_all p:nth-child(3){
    font-size: .18rem;
    color: #1692e1;
    margin-top: 0.05rem;
}
.tabCon_main_right_all_img{
    width: 30%;
    margin-right: .24rem;
}
.tabCon_main_right_all_img img{
    width: 20%;
}
.tabCon_main_right_span{
    width: 100%;
    font-size: .18rem;
    color: #676767;
    margin-top: .11rem;
    display: inline-block;
}
</style>
