<template>
  <div>
      <!-- indentAll -->
    <div class="shopping_head">
        <div class="shopping_header">
             <router-link :to="{ path: '/Mine' }" tag='p'>&lt;</router-link>
            <p>全部订单</p>
            <p><img src="../../assets/Classify/消息黑色.png" alt=""><span class="shopping_red">3</span></p>
        </div>
    </div>
     <ul class="indentAll_tab_ul">
            <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </ul>
    <div class="indentAll_tab content">
       
        <div class="tabCon">
            <div v-for='(itemCon,index) in tabContents' :key="index" v-show="index == num">
                <!-- 已完成 -->
                <div class="tabCon_main"  v-for='(item,index) in itemCon.tabCon_main' :key="index" >
                  <div class="tabCon_main_top">
                      <p><span class="tabCom_mainImg"><img src="../../assets/PageAll/店铺.png" alt=""></span><span class="font">成都赵雷</span></p>
                      <p><span class="font2">已完成</span><span class="tabCom_mainImg"><img src="../../assets/PageAll/删除.png" alt=""></span></p>
                  </div>
                  <div class="tabCon_main_center">
                      <div class="tabCon_main_centerImg"><img src="" alt=""></div>
                      <div class="tabCon_main_center_div">时光拿走了你的美丽 岁月带走了我的脾气 对不起 我还欠你一场婚礼说着说着 我又开始不切实际 说着说着 我就醉在了你的怀里</div>
                  </div>
                  <div class="tabCon_main_money">
                      <p>共2件商品</p>
                      <p>实付款：<span>￥128.8</span></p>
                  </div>
                  <div class="tabCon_main_agin">
                      <p>评价晒单</p>
                      <p>再次购买</p>
                  </div>
                </div>
                <!-- 已取消 -->
                <div class="tabCon_main"  v-for='(item,index) in itemCon.tabCon_main' :key="index" >
                  <div class="tabCon_main_top">
                      <p><span class="tabCom_mainImg"><img src="../../assets/PageAll/店铺.png" alt=""></span><span class="font">成都赵雷</span></p>
                      <p><span class="font2">已完成</span><span class="tabCom_mainImg"><img src="../../assets/PageAll/删除.png" alt=""></span></p>
                  </div>
                  <div class="tabCon_main_center">
                      <div class="tabCon_main_centerImg"><img src="" alt=""></div>
                      <div class="tabCon_main_centerImg"><img src="" alt=""></div>
                  </div>
                  <div class="tabCon_main_money">
                      <p>共2件商品</p>
                      <p>实付款：<span>￥128.8</span></p>
                  </div>
                  <div class="tabCon_main_agin">
                      <p>评价晒单</p>
                      <p>再次购买</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
       return {
            tabs: ["全部", "待付款","待收货","已完成","已取消"],
            tabContents: [
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '1212',
                        liststart: 5
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 5
                      }
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart: 4
                      }
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart:4
                      }
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart: 5
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 5
                      }
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart: 5
                      }
                    ]
                }
            ],
            num: 1
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }
}
</script>

<style scoped>
.shopping_head{
    width: 100%;
    background: #fff;
}
.shopping_header{
  flex-shrink: 0;
  width: 92%;
  margin-left: 4%;
  height: .96rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
} 
.shopping_header p:nth-child(1){
  font-size: .32rem;
}
.shopping_header p:nth-child(2){
  font-size: .32rem;
}
.shopping_header p:nth-child(3){
  width:.5rem;
  height:.5rem;
  position: relative;
}
.shopping_header p:nth-child(3) img{
  width: 100%;
  height: 100%;
}
.shopping_red{
  width: .22rem;
  height: .22rem;
  position: absolute;
  top: 0;
  right: 0;
  line-height: .22rem;
  text-align: center;
  font-size: .16rem;
  background: #ff0103;
  color: #ffffff;
  border-radius: 50%;
}
.indentAll_tab{
    width: 100%;
    height: auto;
}
.indentAll_tab_ul{
    display: flex;
    height: .74rem;
    margin-top: .12rem;
    background: #FFF;
}
.indentAll_tab_ul li{
    width: 25%;
    height: .74rem;
    display: flex;
    font-size: .24rem;
    color: #676767;
    justify-content: center;
    align-items: center;
}
.indentAll_tab_ul li:hover{
    color: #ff0103;
    border-bottom: 2px solid #ff0103;
}
.tabCon{
    margin-top: .12rem;
}
.tabCon_main{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.tabCon_main_top{
    display: flex;
    height: .77rem;
    width: 100%;
    background: #fff;
    justify-content: space-between;
    align-items: center;
}
.tabCon_main_top p{
    display: flex;
    height: .77rem;
    justify-content: center;
    align-items: center;
}
.tabCon_main_top p .font{
    height: .77rem;
    display: flex;
    font-size: .24rem;
    justify-content: center;
    align-items: center;
}
.tabCon_main_top p .font2{
    height: .77rem;
    display: flex;
    font-size: .22rem;
    color: #676767;
    justify-content: center;
    align-items: center;
}
.tabCom_mainImg{
    width: 25%;
    height: .77rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tabCom_mainImg img{
    width: 58%;
}
.tabCon_main_center{
    width: 100%;
    height: 1.56rem;
    background: #f8f8f8;
    display: flex;
}
.tabCon_main_centerImg{
    width: 1.2rem;
    height: 1.2rem;
    background: #676767;
    border-radius: .05rem;
    margin: .2rem .3rem;
}
.tabCon_main_center div:nth-child(1) img{
    width: 100%;
    height: 100%;
}
.tabCon_main_center_div{
    flex:1;
    margin: .2rem .2rem .2rem 0;
}
.tabCon_main_money{
    width: 100%;
    height: .7rem;
    align-items: center;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #f8f8f8;
    justify-content: flex-end;
}
.tabCon_main_money p:nth-child(1){
    font-size: .24rem;
    color: #2f2f2f;
    margin-right: .3rem
}
.tabCon_main_money p:nth-child(2){
    font-size: .24rem;
    color: #2f2f2f;
    margin-right: .2rem
}
.tabCon_main_money p:nth-child(2) span{
    font-size: .28rem;
    color: #2f2f2f;
    font-weight: bold;
}
.tabCon_main_agin{
    width: 100%;
    height: .7rem;
    align-items: center;
    display: flex;
    background: #fff;
    justify-content: flex-end;
    border-bottom: .12rem solid #f8f8f8
}
.tabCon_main_agin p{
    width: 1.32rem;
    height: .5rem;
    border-radius: .05rem;
    text-align: center;
    line-height: .5rem;
    font-size: .24rem;
    border: 1px solid #676767
}
.tabCon_main_agin p:nth-child(1){
    margin-right: .23rem;
}
.tabCon_main_agin p:nth-child(2){
    margin-right: .3rem;
}
.tabCon_main_agin p:hover{
    color: #ff0103
}
</style>