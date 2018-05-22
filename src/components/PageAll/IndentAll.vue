<template>
  <div >
      <!-- indentAll -->
    <div class="shopping_head">
        <div class="shopping_header">
            <p @click='close'>&lt;</p>
            <p>全部订单</p>
            <!-- <p><img src="../../assets/Classify/消息黑色.png" alt=""><span class="shopping_red">3</span></p> -->
            <p></p>
        </div>
    </div>
    <ul class="indentAll_tab_ul">
        <li v-for="(item,index) in tabs" :key="index"  @click="tab(index)">{{item}}</li>
    </ul>
    <div class="indentAll_tab content">
        <div class="tabCon">
            <div v-for='(item,index) in arr' :key="index">
                <!-- 已完成 -->
                <div class="tabCon_main">
                  <div class="tabCon_main_top">
                      <p><span class="tabCom_mainImg"><img src="../../assets/PageAll/店铺.png" alt=""></span><span class="font">{{item.shopName}}</span></p>
                      <p><span class="font2">{{tabNew[item.status-1]}}
                      </span>
                      <span class="tabCom_mainImg" @click="userId"><img src="../../assets/PageAll/删除.png" alt=""></span></p>
                  </div>
                  <div class="tabCon_main_center" v-for='(data,ind) in item.proOrderItems' :key='ind'>
                      <div class="tabCon_main_centerImg"><img src="" alt=""></div>
                      <div class="tabCon_main_center_div">{{data.skuName}}</div>
                  </div>
                  <div class="tabCon_main_money">
                      <p>共{{item.proOrderItems.length}}件商品</p>
                      <p>实付款：<span>￥{{item.payment}}</span></p>
                  </div>
                  <div class="tabCon_main_agin" v-show='item.status==4?true:false'>
                      <p @click="evaluate">晒单评价</p>
                      <p @click='agin'>再次购买</p>
                  </div>
                   <div class="tabCon_main_agin" v-show='item.status==1?true:false'>
                      <p @click='goPayNent(index)'>去付款</p>
                  </div>
                  <div class="tabCon_main_agin" v-show='item.status==2?true:false'>
                      <p @click='logistics(item.shipingCode,item.shippingName)'>查看物流</p>
                      <p @click="receiving(item.orderNo)">确认收货</p>
                  </div>
                  <div class="tabCon_main_agin" v-show='item.status==3?true:false'>
                      <p @click='logistics(item.shipingCode,item.shippingName)'>查看物流</p>
                      <p @click="receiving(item.orderNo)">确认收货</p>
                  </div>
                  <div class="tabCon_main_agin" v-show='item.status==5?true:false'>
                      <p>再次购买</p>
                  </div>
                  <div class='mark' v-show='dele'>
                    <div class="mark_">
                        <p>确定删除此订单?</p>
                        <div class="btn_all"><div class="no" @click='nos'>取消</div><div class="sure" @click='sures(item.orderid)'>删除</div></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
 
  </div>
</template>
  
<script>
import loadmore from 'mint-ui';
export default {
    data() {
       return {
            tabs: ["全部", "待付款","待收货","已完成","已取消"],
            tabNew: ["未付款", "已付款","已发货","已完成","已取消"],
            arr:null,
            num: 0,
            dele:false,
        }
    },
    created(){
        var that = this;
        this.$axios({ // 全部订单
            method:'get',
            url:'order/api/findAllOrder/1/7'
        })
        .then(function(response) {
            that.arr = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    methods: {
        tab(index){
            this.num = index; 
            var that = this;
            if(this.num == 0){
                location.reload();
                this.$axios({
                    method:'get',
                    url:'order/api/findAllOrder/1/7'
                })
                .then(function(response) {
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            if(this.num == 1){
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findAllItemsByStatus/1/1/7'
                })
                .then(function(response) {
                   that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            if(this.num == 2){
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findDispatchItems/1/1'
                })
                .then(function(response) {
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            if(this.num == 3){
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findAllItemsByStatus/4/1/1'
                })
                .then(function(response) {
                   that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            if(this.num == 4){
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findAllItemsByStatus/5/1/1'       
                })
                .then(function(response) {
                   that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        },
        // 删除
        userId(userid){
            this.dele = true;
        },
        nos(){
           this.dele=false;
        },
        logistics(shipingCode,shippingName){
            var  val={
                "func":"checkLogistics",
                "param":{'LogisticsNumber':shipingCode,'LogisticsCode':shippingName},
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
        sures(userid){
            var that = this;
            this.$axios({
                method:'get',
                url:'/order/api/manage/deleteOrder/'+userid
            })
            .then(function(response) {
                if(response.data==true){
                    that.dele=false;
                    location.reload()
                }
            })
            .catch(function(error) {
                alert(error.response.data.title);
            });
        },
        receiving(orderNo,index){
            var that = this;
            this.$axios({
                method:'get',
                url:'/order/api/ConfirmPro/'+ orderNo
            })
            .then(function(response) {
                if(response.data==true){
                    alert('确认收货成功')
                    location.reload()
                }
            })
            .catch(function(error) {
                alert(error.response.data.title);
            });
        },
        close(){
            var  val={
                "func":"closeCurrent",
                "param":{'finallyIndex':4},
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
        payStatus(type){
            this.type = type;
            if(this.type == 'success' && this.num == 2){
                this.type = '支付成功';
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findDispatchItems/1/1'
                })
                .then(function(response) {
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }else if(this.type=='cancel'){
               this.type = '用户取消'
            }else if(this.type=='failed'){
               this.type = '支付失败'
            }else if(this.type=='unknown' && this.num == 1){
                this.type = '未知状态';
                var that = this;
                this.$axios({
                    method:'get',
                    url:'order/api/findAllItemsByStatus/1/1/1'
                })
                .then(function(response) {
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        },
        agin(){ //再次购买
            this.$router.push({name:"Product"})
        },
        goPayNent(took){ // 去结算
            took = this.arr[took].orderString;
            if(took==''){
                return;
            }else{
                var  val={
                    "func":'pay',
                    "param":{
                    "payType":'Ali',
                    "orderStr": took
                    }
                }
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
        evaluate(){ // 评价  
            this.$router.push({name:"sunorder"})
        }
    },
    mounted: function() {
        $('.indentAll_tab_ul li').eq(0).addClass('actives')
        $('.indentAll_tab_ul li').click(function(){
            $(this).addClass('actives').siblings().removeClass('actives')
        })
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
.actives{
    color: #ff0103;
    border-bottom: 2px solid #ff0103;
}
.mark{
   position: fixed; 
    width:100%;
    height:100%; 
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: rgba(0,0,0,0.2);  
}
.mark_{
  text-align:center;
  font-size:.32rem;
  position:fixed;
  width: 6rem;
  height: 2.7rem;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  color:#ccc;
  border-radius: .1rem;
  background: #fff
}
.mark_ p{
    padding: .71rem 0;
    color: #2f2f2f;
    font-weight: bold;
}
.mark_ .btn_all{
    width: 100%;
    height: .9rem;
    bottom: 0;
    border-radius: 0 0 .1rem .1rem;
    display: flex;
    border-top: 1px solid #ccc;
}
.btn_all .sure{
    width: 50%;
    height: .9rem;
    line-height:.9rem;
    background: #ff0103;
    border:none;
    color: #fff;
    font-size: .30rem;
    border-radius: 0 0 .1rem 0;
}
.btn_all .no{
    width: 50%;
    height: .9rem;
    border:none;
    color: #000;
    line-height:.9rem;
    font-size: .30rem;
    border-radius: 0 0 0 .1rem;
}
</style>