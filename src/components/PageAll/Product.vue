<template>
<div class='content'>
  <mt-navbar v-model="selected">
    <span class="spans">〈</span>
    <mt-tab-item id="1">商品</mt-tab-item>
    <mt-tab-item id="2">详情</mt-tab-item>
    <mt-tab-item id="3">评论</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <mt-cell>
        <div class="details_banner">
          <!-- 循环 -->
          <img src="../../assets/HomePage/bg.gif" alt="">
        </div>
        <div class="details_cantent">
          <h4>Apple iPone X (A1865) 64GB 深空灰色  移动联通电信4G手机 </h4>
          <p><span class="details_red">￥ 8388.00 </span><span class='details_sc'>贡融商城</span></p>
          <small class="small"><span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>贡融券可以抵扣 10.00</span><span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>送贡融券积分 10</span><span><i class='imgcopy'><img src="../../assets/details/选择拷贝.png" alt=""></i>贡融积分可抵扣5.00</span></small>
        </div>
        <div class="pitch">
          <span class="details_checked">已选</span>
          <span>深空灰色，</span>
          <span>公开版，</span>
          <span>64GB，</span>
          <span>官方标配，</span>
          <span>1件</span>
        </div>
        <div class="details_bourn">
          <span class="details_checkeder">送至</span>
          <p class="details_p">
            <span class="imgWz"><img src="../../assets/details/定位.png" alt=""></span>
            <span>湖北省武汉市洪山区街道口未来城E座205</span>
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
    <mt-tab-container-item id="2">
        <ul class="detailsPage_ul">
          <li class="detailsPage_ul_li" v-for="(item,index) in tabs" :key='index' :class="{active:index == num}"  @click="tab(index)">{{item}}</li>
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
    <div class="details_footer">
      <div class="details_footer_left">
        <p class="details_footer_kf">
          <span><img src="../../assets/Comment/联系客服.png" alt=""></span>
          <span class='names'>联系卖家</span>
        </p>
        <p class="details_footer_dp">
          <span><img src="../../assets/Comment/店铺.png" alt=""></span>
          <span class='names'>店铺</span>
        </p>
        <p class="details_footer_sc">
          <span><img src="../../assets/Comment/收藏.png" alt=""></span>
          <span class='names'>收藏</span>
        </p>
      </div>
      <span class="goShopping">加入购物车</span>
      <span class="newBuy">立即购买</span>
    </div>
  </mt-tab-container>
</div>
</template>

<script>
  export default {  
    name: 'page-navbar',  
    data() {  
      return {  
        selected: '1',
        tabs: ["商品介绍", "规格参数","包装售后"],
        tabContents: ["内容一", "内容二","内容三"],
        num: 1  
      } 
    }, 
     methods: {
      tab(index) {
        this.num = index
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-navbar{
    width: 100%;
    height: .96rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .32rem;
  }
  a, .mint-tab-item{
    font-size: .32rem;
  }
  .mint-tab-item{
    width: .74rem;
    font-size: .32rem;
    padding: .16rem .37rem;
  }
  .mint-tab-item .mint-tab-item-label{
    font-size: .32rem;
    color: #2f2f2f;
  }
  .spans{
    position: absolute;
    left: .3rem;
    line-height: .96rem;
    display: inline-block
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #2f2f2f;
    color: #2f2f2f;
  }
  .details_banner{
    width: 100%;
    height: 4.8rem;
  }
  .details_banner img{
    width: 100%;
    height: 100%;
  }
  .details_cantent{
    width: 98%;
    margin-left: 1%;
    margin-bottom: .36rem;
    background: #ffffff;
  }
  .details_cantent h4{
    width: 100%;
    font-size: .28rem;
    color: #2f2f2f;
    font-weight: normal;
    padding: .2rem 0;
    line-height: .38rem;
  }
  .details_cantent p{
    width: 98%;
    display: flex;
    font-size: .24rem;
    justify-content: space-between;
    padding:  0 0 .3rem;
  }
  .details_cantent p .details_red{
   font-size: .24rem;
   color: #ff0103;
  }
  .small{
    width: 100%;
    font-size: .2rem;
    color: #676767;
    margin-bottom: .36rem;
  }
  .details_sc{
    color: #2f2f2f;
  }
  .imgcopy img{
    width: 3%;
    margin-bottom: .01rem;
    margin-right: .04rem;
  }
  .small span{
    margin-right: .2rem;
  }
  .pitch{
    width: 100%;
    height: .9rem;
    margin: .05rem 0;
    display: flex;
  }
  .pitch .details_checked{
    font-size: .24rem;
    color: #676767;
    line-height: .9rem;
    margin-right: .2rem;
  }
  .pitch span{
    font-size: .24rem;
    color: #2f2f2f;
    line-height: .9rem;
  }
  .details_bourn{
    width: 100%;
    height: .9rem;
    margin: .05rem 0;
    display: flex;
    align-items: center;
  }
  .details_checkeder{
    width: 10%;
    font-size: .24rem;
    color: #676767;
  }
  .details_p{
    width: 80%;
    display: flex;
  }
  .imgWz{
    margin-right: .12rem;
  }
  .imgWz img{
    width: 70%;
    align-items: center;
  }
  .details_p span:nth-child(2){
    width: 80%;
    align-items: center;
    font-size: .24rem;
    color: #2f2f2f;
    position: relative;
    overflow: hidden;
  }
  .details_p span:nth-child(2)::after{
    content: "...";
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: .4rem;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }
  .details_p .omit{
    width: 10%;
  }
  .details_comment{
    margin-top: .12rem;
    width: 100%;
    height: auto;
  }
  .comment_main{
    border-bottom: 1px solid #f5f5f5;
  }
  .comment_top{
    padding: .2rem 0;
    font-size: .24rem;
    color: #676767;
    border-bottom: 1px solid #f5f5f5;
  }
  .comment_main_head{
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between
  }
  .tx{
    width: .36rem;
    height: .36rem;
    padding: .2rem 0;
    display: inline-block;
    margin-right: .22rem;
  }
  .comment_main_tx span:nth-child(2){
    font-size: .22rem;
    color: #696969;
  }
  .comment_main_tx img{
    width: 100%;
    height: 100%;
  }
  .comment_main_star img{
    width: 14%;
    display: inline-block;
    margin-right: .04rem;
  }
  .comment_main_center{
    margin: .1rem 0;
    font-size: .28rem;
    color:#2f2f2f;
  }
  .comment_main_img{
    width: 100%;
    height: 1.56rem;
    margin: .24rem 0;
    display: flex;
  }
  .comment_main_imgs{
    display: inline-block;
    width: 1.56rem;
    height: 1.56rem;
    margin-right: .2rem;
    background: #f5f5f5;
  }
  .detailsPage_ul{
    width: 100%;
    height: .8rem;
    display: flex;
    background: #fff;
    border-top: 1px solid #f8f8f8;
  }
  .detailsPage_ul_li{
    width: 33%;
    height: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .24rem;
    color: #cfcfcf;
  }
  .detailsPage_ul_li:hover{
    color: #ff0103;
  }
  .detailsPage_img{
    width: 100%;
    height: .8rem;
    color: #c1c1c1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
  }
  .detailsPage_imgs{
    width: 4%;
    margin: 0 .14rem;
  }   
  .tabCon{
    background: #fff;
    height: auto;
  }
  /* 评论 */

  .comment_pl{
    background: #fff;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;
  }
  .comment_pl_head{
    display: flex;
    padding: .2rem 0;
  }
  .comment_leftImg{
    width: 10%;
    margin-top: .2rem;
    margin-left: .34rem;
  }
  .comment_leftImg img{
    width: 80%;
  }
  .comment_right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .comment_right p:nth-child(1){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comment_right p:nth-child(1) span:nth-child(1){
    font-size: .22rem;
    color: #696969;
  }
  .comment_right p:nth-child(1) span:nth-child(2){
    font-size: .22rem;
    color: #c6c6c6;
    margin-right: .31rem;
    margin-top: .4rem;
  }
  .comment_right_star img{
    width: 3%;
    display: inline-block;
    margin-right: .04rem;
  }
  .comment_pl_center{
    width: 100%;
    padding-left: 1.02rem; 
  }
  .pl_all{
    font-size: .28rem;
    color: #2f2f2f;
    padding: 0 0 .22rem 0;
  }
  .comment_pl_center_img{
    width: 100%;
    height: auto;
  }
  .comment_pl_center_imgs{
    width: 1.88rem;
    height: 1.88rem;
    display: inline-block;
    margin-right: .12rem;
    background: #f8f8f8;
    margin-bottom: .06rem;
  }
  .comment_pl_center p:nth-child(3){
    font-size: .22rem;
    color: #c7c7c7;
  } 
  .comment_pl_center p:nth-child(4){
    font-size: .22rem;
    color: #c7c7c7;
    margin-top: .12rem;
    margin-bottom: .26rem;
  } 
  .details_footer{
    width: 100%;
    height: .88rem;
    background: #fff;
    position: fixed;
    display: flex;
    bottom: 0;   /*footer*/ /*footer*/ /*footer*/ /*footer*/
  }
  .details_footer span{
    height: .88rem;
    display: inline-block;
  }
  .details_footer span:nth-child(1){
    width: 44%;  
  }
  .details_footer span:nth-child(2){
    width: 28%;
    font-size: .32rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .details_footer span:nth-child(3){
    width: 28%;
    font-size: .32rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .details_footer_left{
    display: flex;
    width: 44%;
  }
  .details_footer_left p{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .goShopping{
    color: #fff;
    background: #ff9d1e;
  }
  .newBuy{
    color: #fff;
    background: #df443b;
  }
  .details_footer_kf{
    width: 100%;
  }
  .details_footer_kf span:nth-child(1) img{
    width: 85%;
    margin-top: .01rem;
  }
  .details_footer_kf span:nth-child(2){
    font-size: .2rem;
    color: #696969;
  }
  .details_footer_dp{
    width: 100%;
  }
  .details_footer_dp span:nth-child(1) img{
    width: 85%;
    margin-top: .01rem;
  }
  .details_footer_dp span:nth-child(2){
    font-size: .2rem;
    color: #696969;
  }
  .details_footer_sc{
    width: 100%;
  }
  .details_footer_sc span:nth-child(1) img{
    width: 85%;
    margin-top: .01rem;
  }
  .details_footer_sc span:nth-child(2){
    font-size: .2rem;
    color: #696969;
  }
  .names{
     white-space:nowrap;
  }
</style>
