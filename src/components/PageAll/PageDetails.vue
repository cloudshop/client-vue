<template>
  <div class="content">
    <!-- 店铺首页PageDetails -->
    <div class='PageDetails_head'>
      <div class="PageDetails_header">
        <span>〈</span>
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
    <div class="PageDetails_center">
      <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <dl>
          <dt><img src="../../assets/PageDetails/店铺.1.png" alt=""></dt>
          <dd>首页</dd>
        </dl>
      </mt-tab-item>
      <mt-tab-item id="2">
        <dl>
          <dt><img src="../../assets/PageDetails/全部商品.png" alt=""></dt>
          <dd>全部商品</dd>
        </dl>
        </mt-tab-item>
      <mt-tab-item id="3">
        <dl>
          <dt><img src="../../assets/PageDetails/椭圆9.png" alt=""></dt>
          <dd>热销</dd>
        </dl>
       </mt-tab-item>
      <mt-tab-item id="4">
      <dl>
          <dt><img class='aa' src="../../assets/PageDetails/分类.png" alt=""></dt>
          <dd>分类</dd>
        </dl>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <!-- 首页 -->
      <mt-tab-container-item id="1">
          <div class="PageDetails_navs">
            <mt-swipe class='banner'>
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item> 
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../assets/HomePage/bg.gif" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="PageDetails_wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </mt-tab-container-item>
      <!-- 全部商品 -->
      <mt-tab-container-item id="2">
        <PageAll></PageAll>
      </mt-tab-container-item>
      <!-- 热销 -->
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,index) in 3"  :key='index' :title="'选项 ' + n" />
      </mt-tab-container-item>
      <!-- 分类 -->
      <mt-tab-container-item id="4">
        <div class="PageDetails_classify">
          <div class="PageDetails_title"><span>全部商品</span><span>></span></div>
          <div class="PageDetails_title_main"  v-for="(item,indexs) in allList" :key='indexs'>
            <div class="onclicks" v-on:click='showHide(indexs)'><span>{{item.name}}</span><span class="dowm">﹀</span></div>
              <PageDetailsChild  v-show="flag == indexs" :path='item.serList'></PageDetailsChild>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
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
      flag: true,
      selected: '1',
      props:['',''],
      allList:[
        {
          id: 0,
          name: '女士护肤',
          serList:['清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列']
        },
        {
          id: 1,
          name: '男士护肤',
          serList:['清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列']
        }, {
          id: 0,
          name: '女士护肤',
          serList:['清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列']
        }, {
          id: 0,
          name: '女士护肤',
          serList:['清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列','清润保湿系列','复颜破尿酸系列']
        },
      ]
    }
  },
  components: {
    PageAll,
    PageDetailsChild
  },
  methods: {
    showHide(cur){
      // this.flag = !this.flag
      this.flag = cur;
      console.log("this.flag + ",this.flag);
      console.log("cur + ",cur);
      // console.log(cur)
    }
  }
}
</script>

<style scoped>
.PageDetails_head{
  width: 100%;
  position: relative;
  background: url(../../assets/Mine/headportrait.jpg);
  height: 2.4rem;
}
.PageDetails_header{
  width: 96%;
  margin-left: 2%;
  height: .6rem;
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
.PageDetails_header input{
  border-radius: .3rem;
  border: none;
  height: .6rem;
  flex: 1;
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
  height: .75rem;
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
  display:flex;
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
}
.PageDetails_navs{
  width: 100%;
  height: 2.6rem;
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
  width: 3.2rem;
  height: 1.8rem;
  margin-right: .12rem;
  margin-bottom: .12rem;
  background: #8f8f8f;
}
.PageDetails_classify{
  width: 100%;
  height: auto;
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
 .onclicks span:nth-child(2):hover{
   transform: rotateX(180deg);
 }
</style>
