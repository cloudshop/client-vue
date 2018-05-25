<template>
<div class='content'>
  <mt-navbar v-model="selected">
    <!--<router-link :to="{ path: '/Classify' }" tag='span'  class="spans">〈</router-link>-->
    <span class="spans" @click='back'>&lt;</span>
    <mt-tab-item id="1">商品</mt-tab-item>
    <mt-tab-item id="2">详情</mt-tab-item>
    <mt-tab-item id="3">评论</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <!-- 内容一 -->
    <mt-tab-container-item id="1">
      <mt-cell>
        <div class="details_banner">
          <!-- <img :src="data.productContent.url[0]" alt=""> -->
          <mt-swipe :auto="4000" class='banner'>
            <mt-swipe-item v-for='(item,index) in urlArr' :key='index'><img :src=item alt=""></mt-swipe-item> 
          </mt-swipe>
        </div>
        <div class="details_cantent">
          <h4> {{data.productContent.productname}}</h4>
          <p><span class="details_red">¥  {{data.productContent.price}} </span><span class='details_sc'>贡融商城</span></p>
          <small class="small"><!--<span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>贡融券可以抵扣 10.00</span>--><span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>送贡融券积分  {{data.productContent.integral}}</span><!-- <span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>贡融积分可抵扣5.00</span>--></small>
        </div>
        <!--<div class="pitch">-->
        <!--  <span class="details_checked">已选</span>-->
        <!--  <span>深空灰色，</span>-->
        <!--  <span>公开版，</span>-->
        <!--  <span>64GB，</span>-->
        <!--  <span>官方标配，</span>-->
        <!--  <span>1件</span>-->
        <!--</div>-->
        <div class="details_bourn">
          <span class="details_checkeder">送至</span>
          <p class="details_p">
            <span class="imgWz"><img src="../../assets/details/定位.png" alt=""></span>
            <span>{{data.productContent.productname}}</span>
          </p>
          <span class="omit"><img src="../../assets/details/定位.png" alt=""></span>
        </div>
        <div class="details_comment">
          <p class="comment_top">评论（201）</p>
          <div class="comment_main">
            <div class="comment_main_head">
              <p class="comment_main_tx"><span class="tx"><img src="../../assets/details/无头像.png" alt=""></span><span>用户名</span></p>
              <p class="comment_main_star">
                <img v-for="(n,index) in 4" :key='index' src="../../assets/details/星星.png" alt="">
              </p>
            </div>
            <div class="comment_main_center">
              质量非常好!!
            </div>
            <div class="comment_main_img">
              <span v-for="(n,index) in 4" :key='index' class="comment_main_imgs"></span>
            </div>
          </div>
        </div>
      </mt-cell>
    </mt-tab-container-item>
    <!-- 内容二 -->
    <mt-tab-container-item id="2">
        <ul class="detailsPage_ul">
          <li class="detailsPage_ul_li" v-for="(item,index) in tabs" :key='index'  @click="tab(index)">{{item}}</li>
        </ul>
        <div class="detailsPage_img">
         ———————<img class="detailsPage_imgs" src="../../assets/details/图片.png" alt=""> 图文详情  ———————
        </div>
        <div class="tabCon">
          <div v-for='(itemCon,index) in tabContents' :key='index' v-show=" index == num">
            {{itemCon}}
          </div>
        </div>
    </mt-tab-container-item>
    <!-- 内容三 -->
    <mt-tab-container-item id="3">
      <div class="comment_pl">
        <div class="comment_pl_all">
          <div class="comment_pl_head">
            <div class="comment_leftImg">
              <img src="../../assets/details/无头像.png" alt="">
            </div>
            <div class="comment_right">
              <p><span>用户名</span><span>2017-03-18</span></p>
              <p class="comment_right_star">
                <img v-for="(n,index) in 5" :key='index' src="../../assets/details/星星.png" alt="">
              </p>
            </div>
          </div>
          <div class="comment_pl_center">
            <p class="pl_all">质量非常好！！</p>
            <div class="comment_pl_center_img">
              <span class="comment_pl_center_imgs" v-for="(n,index) in 8" :key='index'></span>
            </div>
            <p>深空灰色： 公开版</p>
            <p>购买日期： 2018-03-06</p>
          </div>
        </div>
      </div>
      <div class="comment_pl">
        <div class="comment_pl_all">
          <div class="comment_pl_head">
            <div class="comment_leftImg">
              <img src="../../assets/details/无头像.png" alt="">
            </div>
            <div class="comment_right">
              <p><span>用户名</span><span>2017-03-18</span></p>
              <p class="comment_right_star">
                <img v-for="(n,index) in 5" :key='index' src="../../assets/details/星星.png" alt="">
              </p>
            </div>
          </div>
          <div class="comment_pl_center">
            <p class="pl_all">质量非常好！！</p>
            <div class="comment_pl_center_img">
              <span class="comment_pl_center_imgs" v-for="(n,index) in 8" :key='index'></span>
            </div>
            <p>深空灰色： 公开版</p>
            <p>购买日期： 2018-03-06</p>
          </div>
        </div>
      </div>
    </mt-tab-container-item>
    <!-- 底部 -->
    <div class="details_footer">
      <!--  联系卖家   店铺   收藏 -->
      <div class="details_footer_left">
        <p class="details_footer_kf">
          <span><img src="../../assets/Comment/联系客服.png" alt=""></span>
          <span class='names'>联系卖家</span>
        </p>
        <p class="details_footer_dp" @click='store'>
          <span><img src="../../assets/Comment/店铺.png" alt=""></span>
          <span class='names'>店铺</span>
        </p>
        <!-- <p class="details_footer_sc" @click='collect'>
          <span><em  class="iconfont collect">&#xe603;</em></span>
          <span class='names collect'>收藏</span>
        </p> -->
      </div>
      <!-- 加入购物车   立即购买 -->
      <span class="goShopping" @click='addShopping'>加入购物车</span>
      <span class="newBuy" @click='SelectiveTypeOpen'>立即购买</span>
    </div>
  </mt-tab-container>
  <!-- 第一个蒙版 -->
  <transition  enter-active-class="animated fadeInUp"  leave-active-class="animated fadeOutDown">
        <div class="box" v-show='flag'>
            <div class="mainCon">
              <div class='mainCwe'>
                  <div class='Imgs'>
                    <img src="../../assets/Mine/headportrait.jpg" alt="">
                  </div>
                  <div class='mainConHead'>
                     <h2>¥   {{data.productContent.price}}</h2>
                     <p>商品编号:{{data.productContent.skucode}}</p>
                  </div> 
                  <div class='span' @click='SelectiveTypeclose'>×</div>              
              </div>
                <div class='content webCont'>
                  <div v-for='(item,index) in data.attrbute' :key='index'>
                    <p>{{item.attname}}</p>
                        <ul>
                          <li  v-for='(i,index) in item.attvalue' :key='index'>{{i.value}}</li>
                        </ul>
                  </div>                                        
                  <p class='Cont'>
                    <span>数量</span> 
                    <em>
                      <i @click='subtract'>-</i> 
                      <input type="text" v-model="val">
                      <i @click='add'>+</i>
                    </em>
                  </p>
                </div>
                <button @click='ConfirmAnOrder'>确定</button>  
            </div>
        </div>
  </transition>
</div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
  export default {  
    name: 'page-navbar',  
    data() {  
      return {  
        selected: '1',
        tabs: ["商品介绍", "规格参数","包装售后"],
        tabContents: ["内容一", "内容二","内容三"],
        num: 1,
        flag:false,
        val:1,
        data:"", //数据,
        productname: '',
        urlArr:[],
        id:''
      } 
    }, 
     methods: {
      tab(index) {
        this.num = index
      },
      SelectiveTypeOpen: function() {
         this.flag = true;
          $('.webCont ul').each(function(){
              $(this).find('li').eq(0).addClass('active').siblings().removeClass('active')
            $(this).find('li').on('click',function(){
                 $(this).addClass('active').siblings().removeClass('active')
            })
           })
       },
      SelectiveTypeclose:function(){
         this.flag = false; 
      },
      subtract:function(){
        if(this.val>1){
           this.val--;
        }
      },
      add:function(){
        if(this.val > 200){
           this.val = 200
        }else{
          this.val++;
        }
      },
      ConfirmAnOrder(){
        if(this.$store.getters.isAuthed === false){
          alert('请先登陆');
          var  val={
              "func":"openURL",
              "param":{
                  "URL":'/#/Login',
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
        else{
          this.$router.push({name:"ConfirmAnOrder",}) 
        }
         sessionStorage.setItem("price",this.data.productContent.price); 
         sessionStorage.setItem("count",this.val);
         sessionStorage.setItem("productName",this.data.productContent.productname);
         sessionStorage.setItem("Productskuid", this.data.productContent.id); // 新改的
         sessionStorage.setItem("shopID", this.data.productContent.shopid); 
      },
      addShopping(){
        var that = this;
        var shopId = this.data.productContent.shopid;
        var skuId = this.data.productContent.id;
        var params = {"skuId":skuId,"shopId":shopId,"count": 1}
        if(this.$store.getters.isAuthed === false){
          alert('请先登陆');
          var  val={
              "func":"openURL",
              "param":{
                  "URL":'/#/Login',
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
        }else{
          this.$axios({
            method:'post',
            url:'shoppingcart/api/shoppingcar/add',
            data:params,
          })
          .then(function(response) {
            if(response.data.message == 'success'){
              alert('加入购物车成功')
            }
          })
          .catch((error)=>{
              console.log(error);
          }) 
        }
      },
      back(){   
         var  val={
                "func":"closeCurrent",
                  "param":{
                    'refreshParent':true
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
      // collect(){
      //   var ProductID=sessionStorage.getItem("ProductID");
      //   var Goods=sessionStorage.getItem("GoodsID"); // 商品id 
      //   this.$axios.get('favorite/api/favProduct/'+Goods+'/1')
      //    .then(function(response) {
      //       if(response.data == true){
      //          $('.collect').addClass("actives");
      //       }else{
      //          $('.collect').removeClass("actives");
      //       }
      //   })
      //   .catch(function(error) {
      //       console.log(error);
      //  });   
      // },
      store(){
         this.$router.push({name:"PageDetails"}) 
      },
      GetParams(id){
          var that = this;    
          var iid = JSON.stringify(id);  
         
          var strArr=iid.split(':');
          var subIdStr=strArr[1];
         
         
         var valueStr = subIdStr.replace(/[^0-9]/ig,"");
          

         
          var Goods = valueStr;
          console.log(typeof Goods)
          console.log(Goods)
         
          this.$axios.get('product/api/product/content?id=' + Goods)
          .then(function(response) {
              console.log(response.data)   
              that.data = response.data;
              that.urlArr = response.data.productContent.url;
          })
          .catch(function(error) {
              console.log(error);
        });
        }
    },
    created(){
    //   console.log(this.data.productContent)   
    //     var that = this; //商品内容
    // //    var Goods = sessionStorage.getItem("GoodsID") ? sessionStorage.getItem("GoodsID") : 32; // 商品id 
    //      var Goods = sessionStorage.getItem("GoodsID")
    //      if(Goods==null)
    //      {
    //          Goods='30';
    //      }
    //     console.log(Goods)
    //     this.$axios.get('product/api/product/content?id=' + Goods)
    //      .then(function(response) {   
    //         that.data = response.data;
    //         // console.log(response.data);
    //         that.urlArr = response.data.productContent.url;
    //         console.log(that.urlArr);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //    }); 
    },
    // methods:{
       
    // },
   mounted(){
        window.GetParams = this.GetParams;
    }

    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detailsPage_ulP .detailsPage_ul_li:hover {
  color: blue;
}
.active {
  border: none !important;
  border: 0.1px solid #d81e06 !important;
}
.actives {
  color: red;
}
.list {
  margin-top: 0.3rem;
}
.list li {
  border-bottom: 1px solid #eeeeee;
  font-size: 0.28rem;
  color: #2f2f2f;
  line-height: 0.5rem;
  height: 0.5rem;
  margin-left: 0.6rem;
}
.h2 {
  text-align: center;
  font-size: 0.28rem;
  color: #696969;
  margin-top: 0.15rem;
  font-weight: normal;
}
.box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.mainCon {
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.mainCon .Imgs {
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: -0.43rem;
  left: 0.29rem;
}
.mainCon .Imgs img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.14rem;
  border: 1px solid #e7e7e7;
}
.mainConHead {
  padding-left: 2.5rem;
}
.mainConHead h2 {
  color: #e80404;
  font-size: 0.28rem;
  padding-top: 0.38rem;
}
.mainConHead p {
  font-size: 0.22rem;
  color: #2f2f2f;
  padding-top: 0.3rem;
}
.span {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  font-size: 0.3rem;
  color: #666666;
}
.mainCwe {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e7e7e7;
}
.mainCon button {
  width: 100%;
  height: 0.88rem;
  background: #df443b;
  font-size: 0.32rem;
  color: #fff;
  border: 0;
}
.webCont p {
  margin-top: 0.28rem;
  font-size: 0.28rem;
  color: #696969;
}
.webCont {
  margin-left: 0.32rem;
}
.webCont ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.webCont ul li {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 0.44rem;
  border: 1px solid #e7e7e7;
  padding: 0 0.4em;
  margin: 0.15rem 0.1rem;
}
.Cont {
  display: flex;
  justify-content: space-between;
  padding-right: 0.3rem;
  margin-bottom: 0.2rem;
}
.Cont input {
  width: 0.7rem;
  /* height:.4rem; */
  border: 0;
  border: 1px solid #ccc;
  display: inline-block;
  text-align: center;
}
.Cont em {
  display: flex;
}
.Cont i {
  display: inline-block;
  width: 0.48rem;
  height: 0.42rem;
  border: 1px solid #ccc;
  border-radius: 0.01rem;
  text-align: center;
  line-height: 0.44rem;
}
.Cont i:first-child {
  border-right: 0;
}
.Cont i:last-child {
  border-left: 0;
}
.mint-navbar {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.32rem;
  position: fixed;
  /* border: 1px solid #000; */
}
a,
.mint-tab-item {
  font-size: 0.32rem;
}
.mint-tab-item {
  width: 0.74rem;
  line-height: 1rem;
  font-size: 0.32rem;
  padding: 0.16rem 0.37rem;
}
.mint-tab-item .mint-tab-item-label {
  font-size: 0.32rem;
}
.spans {
  position: absolute;
  left: 0.3rem;
  line-height: 0.96rem;
  display: inline-block;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 2px solid #2f2f2f;
  margin-bottom: 0;
}
.mint-tab-container {
  width: 100%;
  height: 30rem;
  background: #fff;
  overflow-y: scroll;
  margin-top: 1rem;
}
.mint-cell-value {
  width: 100% !important;
  height: 100%;
  overflow-y: scroll;
}
.details_banner {
  margin-top: 0.4rem;
  width: 100%;
  height: 4.8rem;
}
.details_banner img {
  width: 100%;
  height: 100%;
}
.details_cantent {
  width: 98%;
  margin-left: 1%;
  margin-bottom: 0.36rem;
  background: #ffffff;
}
.details_cantent h4 {
  width: 100%;
  font-size: 0.28rem;
  color: #2f2f2f;
  font-weight: normal;
  padding: 0.2rem 0;
  line-height: 0.38rem;
}
.details_cantent p {
  width: 98%;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
  padding: 0 0 0.3rem;
}
.details_cantent p .details_red {
  font-size: 0.24rem;
  color: #ff0103;
}
.small {
  width: 100%;
  font-size: 0.2rem;
  color: #676767;
  margin-bottom: 0.36rem;
}
.details_sc {
  color: #2f2f2f;
}
.imgcopy img {
  width: 3%;
  margin-bottom: 0.01rem;
  margin-right: 0.04rem;
}
.small span {
  margin-right: 0.2rem;
}
.pitch {
  width: 100%;
  height: 0.9rem;
  margin: 0.05rem 0;
  display: flex;
}
.pitch .details_checked {
  font-size: 0.24rem;
  color: #676767;
  line-height: 0.9rem;
  margin-right: 0.2rem;
}
.pitch span {
  font-size: 0.24rem;
  color: #2f2f2f;
  line-height: 0.9rem;
}
.details_bourn {
  width: 100%;
  height: 0.9rem;
  margin: 0.05rem 0;
  display: flex;
  align-items: center;
}
.details_checkeder {
  width: 10%;
  font-size: 0.24rem;
  color: #676767;
}
.details_p {
  width: 80%;
  display: flex;
}
.imgWz {
  margin-right: 0.12rem;
}
.imgWz img {
  width: 70%;
  align-items: center;
}
.details_p span:nth-child(2) {
  width: 80%;
  align-items: center;
  font-size: 0.24rem;
  color: #2f2f2f;
  position: relative;
  overflow: hidden;
}
.details_p .omit {
  width: 10%;
}
.details_comment {
  margin-top: 0.12rem;
  width: 100%;
  height: auto;
}
.comment_main {
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 0.96rem;
}
.comment_top {
  padding: 0.2rem 0;
  font-size: 0.24rem;
  color: #676767;
  border-bottom: 1px solid #f5f5f5;
}
.comment_main_head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tx {
  width: 0.36rem;
  height: 0.36rem;
  padding: 0.2rem 0;
  display: inline-block;
  margin-right: 0.22rem;
}
.comment_main_tx span:nth-child(2) {
  font-size: 0.22rem;
  color: #696969;
}
.comment_main_tx img {
  width: 100%;
  height: 100%;
}
.comment_main_star img {
  width: 14%;
  display: inline-block;
  margin-right: 0.04rem;
}
.comment_main_center {
  margin: 0.1rem 0;
  font-size: 0.28rem;
  color: #2f2f2f;
}
.comment_main_img {
  width: 100%;
  height: 1.56rem;
  margin: 0.24rem 0;
  display: flex;
}
.comment_main_imgs {
  display: inline-block;
  width: 1.56rem;
  height: 1.56rem;
  margin-right: 0.2rem;
  background: #f5f5f5;
}
.detailsPage_ul {
  width: 100%;
  height: 0.8rem;
  display: flex;
  background: #fff;
  border-top: 1px solid #f8f8f8;
}
.detailsPage_ul_li {
  width: 33%;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  color: #888;
}
/* .detailsPage_ul_li:hover{
    color: #ff0103;
  } */
/* .mint-tab-container-item .active{
    color: yellowgreen;
  } */
.detailsPage_img {
  width: 100%;
  height: 0.8rem;
  color: #c1c1c1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
}
.detailsPage_imgs {
  width: 4%;
  margin: 0 0.14rem;
}
.tabCon {
  background: #fff;
  height: auto;
}
/* 评论 */

.comment_pl {
  background: #fff;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
}
.comment_pl:first-child {
  margin-top: 1rem;
}
.comment_pl_head {
  display: flex;
  padding: 0.2rem 0;
}
.comment_pl:last-child {
  margin-bottom: 1rem;
}
.comment_leftImg {
  width: 10%;
  margin-top: 0.2rem;
  margin-left: 0.34rem;
}
.comment_leftImg img {
  width: 80%;
}
.comment_right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.comment_right p:nth-child(1) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment_right p:nth-child(1) span:nth-child(1) {
  font-size: 0.22rem;
  color: #696969;
}
.comment_right p:nth-child(1) span:nth-child(2) {
  font-size: 0.22rem;
  color: #c6c6c6;
  margin-right: 0.31rem;
  margin-top: 0.4rem;
}
.comment_right_star img {
  width: 3%;
  display: inline-block;
  margin-right: 0.04rem;
}
.comment_pl_center {
  /* width: 100%; */
  padding-left: 1.02rem;
}
.pl_all {
  font-size: 0.28rem;
  color: #2f2f2f;
  padding: 0 0 0.22rem 0;
}
.comment_pl_center_img {
  width: 100%;
  height: auto;
}
.comment_pl_center_imgs {
  width: 1.88rem;
  height: 1.88rem;
  display: inline-block;
  margin-right: 0.12rem;
  background: #f8f8f8;
  margin-bottom: 0.06rem;
}
.comment_pl_center p:nth-child(3) {
  font-size: 0.22rem;
  color: #c7c7c7;
}
.comment_pl_center p:nth-child(4) {
  font-size: 0.22rem;
  color: #c7c7c7;
  margin-top: 0.12rem;
  margin-bottom: 0.26rem;
}
/* 底部 */
.details_footer {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  position: fixed;
  display: flex;
  bottom: 0;
}
/* 底部  左边字 */
.details_footer span {
  /* height: .88rem; */
  display: inline-block;
}
/* 底部   左边图标 */
.details_footer span:nth-child(1) {
  width: 35%;
}
.details_footer span:nth-child(2) {
  width: 28%;
  font-size: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details_footer span:nth-child(3) {
  width: 28%;
  font-size: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details_footer_left {
  display: flex;
  justify-content: space-between;
  align-items: color;
  width: 44%;
}
.details_footer_left p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* .details_footer_left p span{
    margin-top:.08rem;
    margin-left:.02rem;
  } */
.goShopping {
  color: #fff;
  background: #ff9d1e;
}
.newBuy {
  color: #fff;
  background: #df443b;
}
.details_footer_kf {
  width: 100%;
  text-align: center;
}
/* 联系卖家图片 */
.details_footer_kf span:nth-child(1) img {
  width: 70%;
  height: 70%;
  margin-top: 0.01rem;
}
.details_footer_kf span:nth-child(2) {
  font-size: 0.1rem;
  color: #696969;
  margin-top: 0.01rem;
}
.details_footer_dp {
  width: 100%;
  text-align: center;
}
/* 店铺图片 */
.details_footer_dp span:nth-child(1) img {
  width: 70%;
  height: 70%;
}
.details_footer_dp span:nth-child(2) {
  font-size: 0.2rem;
  color: #696969;
}
.details_footer_sc {
  width: 100%;
}
.details_footer_sc span:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.details_footer_sc em {
  font-size: 0.4rem;
}
.details_footer_sc span:nth-child(2) {
  font-size: 0.2rem;
  color: #696969;
  margin-top: 0.01rem;
}
.names {
  white-space: nowrap;
}
</style>
