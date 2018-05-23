<template>
   <div>
    <div class='content'>
      <div class="register_header">
        <p></p >
        <p>购物车</p >
        <p></p>
        <!-- <p><img src="../assets/Classify/消息黑色.png" alt=""><span class="shopping_red">3</span></p> -->
      </div>
      <div class="shopping_main_all">
        <div class="shopping_main" v-for="(item,index) in serviceList" :key='index' v-show="empty">
          <!--购物车标题头开始 店铺  -->
          <div class="shopping_main_nav">
            <div class="nav_newmain">
              <span class="shopping_q">
                <input type="checkbox" id="tonglian"  class="checkboxs"   v-model="item.checkbox" @click="pageAll(item)"/>
                <label for="tonglian"></label>
              </span>
              <span class="nav_newmain_quan"  @click='ok(item.id,index)'>{{item.shopName}}</span>
            </div>
          </div>
          <!--购物车标题头结束  -->
          <!-- 购物车单个开始 -->
          <div class="contents"  v-for="(data,index) in item.sku" :key='index'>
            <div class="contents_all">
              <div class="contents_left">
                <span class="shopping_q">
                  <input type="checkbox" id="tonglian" class="checkboxs"   v-model="data.checkboxChild" @click="pageItem(item,item.id,index,$event)"/>
                  <label for="tonglian"></label>
                </span>
              </div>
              <div class="contents_right">
                <div class="contents_right_all">
                  <div class="contents_right_img">
                    <img :src = data.url alt="">
                  </div>
                  <div class="contents_right_matter">
                    <div class="h5">{{data.skuName}}</div>
                    <div class="contents_right_center">
                      <div class="cargo">有货（库存{{data.skuCount}}件）</div>
                      <div class="contents_right_center_count">
                        <span class="minus" @click="subtract(index,item.id)">-</span>
                        <input type="text" id="inpt_s" readonly v-model="data.count" value="1" class="inpus">
                        <span class="add" @click="add(index,item.id)">+</span>
                      </div>
                    </div>
                    <div class="contents_right_moneyAll">
                      <div class="contents_right_money">￥ {{data.unitPrice}}</div>
                      <div class="contents_right_delete"> 
                        <a href="javascript:;" @click="removeAll">删除</a>
                        <!-- <span class="contents_right_shu">|</span>
                        <a href="javascript:;" @click="collect(item.id,index)">加入收藏</a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div class='marks' v-show='dele'>
              <div class="mark_s">
                <p>确定删除此商品?</p>
                <div class="btn_all"><button class="no" @click='no'>取消</button><button class="sure" @click='sure(index,item.id,data.skuid)'>删除</button></div>
              </div>
            </div>
            </div>
            <!-- footer -->
            <div class="shopping_footer">
              <div class="shopping_footer_left">
                <div class="all">
                  <span class="shopping_q">
                    <input type="checkbox" id="tonglian"  class="checkboxs" value="通联" name="sex" v-model="checkboxBig"  @click="checkboxAll(0)"/>
                    <label for="tonglian"></label>
                  </span>
                </div>   
                <!--{{data.price*data.num | filtermoney totalPrice}}  -->
                <!-- <div class="money">合计: ￥ {{totalPrice.toFixed(2)}}</div>    -->
                <div class="money">合计: ￥ {{totalMoney.toFixed(2)}}</div>   
              </div>
              <div class="shopping_footer_right" @click="toTal">去结算</div>
            </div>
           
          </div>
        </div>
        <div class="vacancy" v-show='emptys'>
          <div class="vacancyImg"><img src="../assets/Classify/shopping.png" alt=""></div>
          <div class="kong">购物车是空的</div>
          <button class="going" @click="goings">去逛逛</button>
        </div>
      </div>
    </div>
    <div class='mark' v-show='flag'>
      <img src="../assets/HomePage/LOGO.png" alt="">
      <p>此功能需先登录</p>
      <button @click='logins'>登录</button>
    </div>
    
  <Foot></Foot>
 </div>
   
</template>
<script>
import * as loggedInStatus from '../store/store'
import Foot from "./main/Foot";
import {getCookie} from "../assets/js/cookie.js";
export default {
  data() {
    return {
      flag:false,
      productSkuId: '',
      price: 0,
      shopId:'',
      count:0,
      payment:0,
      totalPrice: 0,
      animatenum: 0,
      totalAllPrice: 0,
      checkboxBig: false,
      serviceList: '',
      empty:true, 
      emptys:false,
      dele:false,
    };
  },
  watch:{
   
  },
  computed:{
     totalMoney(){
      let totalnum = this.serviceList.reduce((total,item,index)=>{
           let num = 0;
           let result= item.sku.reduce((all,item)=>{
            let val = 0;
            // console.log(item.checkboxChild)
                if(item.checkboxChild === true ){
                  val = item.unitPrice*item.count;
                }
                all +=val
                return all
           },0)
            total+= result
            return total
        },0)
      return totalnum
     }
  },
  created(){
    (this.$store.getters.isAuthed === false) ? this.flag=true : this.flag=false;
    // var that = this;
    this.$axios.get('shoppingcart/api/shoppingcar/user')
    .then((response)=> {
        this.serviceList = response.data.result;
        console.log(this.serviceList)
        // emptys 去逛逛
        if(this.serviceList == undefined || this.serviceList.length == 0){
          this.empty = false;
          this.emptys = true;
        }else{
          this.empty = true;
          this.emptys = false;
        }
    })
    .catch((error)=> {
        console.log(error);
    }); 
  },
  methods: {
    logins(){  
      var  val={
        "func":"openURL",
        "param":{
            "URL":'/#/login'
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
    // 加入收藏
    // collect:function(shopId,index){
    //   // var skuid = this.serviceList[shopId].sku[index].skuid;
    //   var skuid = 28;  //
    //   var type = 1;
    //   this.$axios.get('favorite/api/favProduct/'+skuid+'/'+type)
    //   .then(function(response) {
    //       if(response.data == true){
    //         alert('收藏成功！')
    //       }else{
    //         alert('取消收藏')
    //       }
    //   })
    //   .catch(function(error) {
    //       console.log(error);
    //   });  
    // },
    // 删除
    no(){
        this.dele=false;
    },
    sure(index,id,skuids){
       // if(this.serviceList[id].sku[index].checkboxChild == true){
      //   var Money = this.serviceList[id].sku[index].unitPrice*this.serviceList[id].sku[index].count;
      //   this.totalPrice -= Money;
      //   setTimeout(function(){
      //     this.serviceList[id].sku.splice(index,1);
      //   }, 0); 
      // }
      var delSkuid = [];
      delSkuid.push(this.serviceList[id].sku[index].skuid);
      this.$axios.post('shoppingcart/api/shoppingcar/del',delSkuid)
      .then((res)=>{
        if(res.data == 'success'){
          this.dele=false;
          this.serviceList[id].sku.splice(index,1);
        }
      })
      .catch((error)=>{
        alert(error.response.data.title)
      })
      if(this.serviceList[id].sku.length == 0){
        var str = this.serviceList.length-1;
        $('.shopping_main')[id].remove()
      }
    },
    // 删除操作
    removeAll(){
      this.dele = true;
    },
    // ++
    add(index,id){
      if(this.serviceList[id].sku[index].checkboxChild == true){
        var Money = this.serviceList[id].sku[index].unitPrice;
        this.totalPrice += Money;
      }
      if(this.serviceList[id].sku[index].count>=this.serviceList[id].sku[index].skuCount){
        alert('没有库存了哦')
        this.serviceList[id].sku[index].count=this.serviceList[id].sku[index].skuCount;
      }else{
        this.serviceList[id].sku[index].count++;
      }
    },
    // --
    subtract(index,id){
       if(this.serviceList[id].sku[index].count>1){
        if(this.serviceList[id].sku[index].checkboxChild == true){
          var Money = this.serviceList[id].sku[index].unitPrice ;
          this.totalPrice -= Money;
        }
        this.serviceList[id].sku[index].count--;
      }
    },
    // pageAll 店铺全选
    pageAll(item){
        item.checkbox === true? item.sku.map((item)=>{
          return item.checkboxChild =false
        }):item.sku.map((item)=>{
          return item.checkboxChild =true
        });
        let totalnum = item.sku.reduce((total,item)=>{
        let num = 0;
        if(item.checkboxChild == true ){
          num = item.unitPrice*item.count;
        }
        total+= num
        return total
      },0);
        item.totalPrice = totalnum
       this.totalPrice = totalnum;
    },
    // 判断 商品是否全部选中
    pageItem(data,pitchId,index,e){
      this.serviceList[pitchId].sku[index].checkboxChild = !this.serviceList[pitchId].sku[index].checkboxChild;
      let statusFlag = true;
      statusFlag = data.sku.every((ele)=>{
        return ele.checkboxChild === true;
      })
      this.serviceList[pitchId].checkbox = statusFlag;
      // 金额
      let totalnum = data.sku.reduce((total,item)=>{
        let num = 0;
        if(item.checkboxChild == true ){
          num = item.unitPrice*item.count;
        }
        total+= num
        return total
      },0);
       this.totalPrice = totalnum;
      // 传参
      if(this.serviceList[pitchId].sku[index].checkboxChild == true){
        this.price = this.serviceList[pitchId].sku[index].unitPrice; // 价钱
        this.shopId = this.serviceList[pitchId].shopId;
        this.count = this.serviceList[pitchId].sku[index].count; // 几个
        this.productSkuId = this.serviceList[pitchId].sku[index].skuid;
        this.payment = this.price*this.count;
        this.productName = this.serviceList[pitchId].sku[index].skuName; // 商品名称
        this.productUrl = this.serviceList[pitchId].sku[index].url; // 图片
      }
    },
    // 全选 选中计算
    checkboxAll(){
      for(var pageId = 0; pageId < this.serviceList.length; pageId++){
        if(this.checkboxBig !== true){
          console.log(this.serviceList[pageId].checkbox)
          this.serviceList[pageId].checkbox = true;
          this.serviceList[pageId].sku.map((v,i)=>{
            v.checkboxChild = true;
          })
        }else{
          this.serviceList[pageId].checkbox = false;
          this.serviceList[pageId].sku.map((v,i)=>{
            v.checkboxChild = false;
          })
        }
      }
    },
    // 点击结算
    toTal(){
      sessionStorage.setItem("price",this.price); // 价钱
      sessionStorage.setItem("productName",this.productName);  // 姓名
      sessionStorage.setItem("count",this.count); // 几个
      sessionStorage.setItem("productUrl",this.productUrl); // 图片路径
      var that = this;
      var params = {
        "buyerMessage": 0, // 买家留言
        "buyerNick": "",  // 买家昵称
        "shopId": this.shopId, // 店铺id
        "payment":this.payment,  // 商品合计
        "postFee": 0, // 运费
        "paymentType": 1, // 1 余额支付 2 支付宝支付
        "proOrderItems":[
          {
            "productSkuId": this.productSkuId, // 商品id
            "count": this.count, // 数量
            "price":  this.price   // 价钱     
          }
        ]
      }
      this.$axios({
        method:'POST',
        url:'order/api/depproorders/0',
        data: params
        })
        .then((response)=> {
          console.log(response.data)
          that.$router.push({name:"ConfirmAnOrder"}) 
        })
        .catch((error)=>{
          if(error.response.data.status == 500){
            alert('服务器繁忙，请耐心等待')
          }else{
            alert(error.response.data.title)
          }
        });
      },
      goings(){
        var  val={
            "func":"closeCurrent",
            "param":{'finallyIndex':'2','refreshAll':true},
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
  components: {
    Foot
  }
};
</script>

<style scoped>
.marks{
   position: fixed; 
    width:100%;
    height:100%; 
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: rgba(0,0,0,0.2);  
}
.mark_s{
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
.mark_s p{
    padding: .71rem 0;
    color: #2f2f2f;
    font-weight: bold;
}
.mark_s .btn_all{
    width: 100%;
    height: .9rem;
    bottom: 0;
    display:flex;
    border-radius: 0 0 .1rem .1rem;
    border-top: 1px solid #ccc;
}
.btn_all .sure{
    width: 50%;
    height: .9rem;
    background: #ff0103;
    border:none;
    color: #fff;
    line-height:.9rem;
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
.vacancy{
  width: 70%;
  margin-left: 15%;
  height: 6rem;
  margin-top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vacancyImg{
  width: 58%;
  height: 3rem;
}
.vacancyImg img{
  width: 100%;
}
.vacancy .kong{
  width: 100%;
  text-align: center;
  font-size: .32rem;
  color: #909194;
}
.vacancy .going{
  font-size: .32rem;
  background: #428bca;
  color: #FFF;
  width: 2.28rem;
  height: .74rem;
  border: none;
  border-radius: .1rem;
  margin-top: .2rem;
}
.mark{
  position: absolute;
  top:0;
  width:100%;
  height:100%;
}
.mark img{
  position:fixed;
  top:-5rem;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
}
.mark p{
  text-align:center;
  margin-top:40%;
  font-size:.32rem;
  position:fixed;
  top:40%;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  color:#ccc;
}
.mark button{
  margin-top:.2rem;
  margin-left:20%;
  width:60%;
  height:.6rem;
  font-size:.32rem;
  border:0;
  border-radius:.2rem;
  background:#fff;
  border:1px solid red;
  color:#ff0103;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff !important;
}
.register_header {
  flex-shrink: 0;
  width: 100%;
  height: 0.96rem;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
  background: #fff !important;
  border-bottom: 1px solid #f8f8f8;
}
.register_header p:nth-child(1) {
  padding-left: .4rem;
}
.register_header p:nth-child(2) {
  font-size: 0.32rem;
}
.register_header p:nth-child(3){
  width:.5rem;
  height:.5rem;
  right: .3rem;
  position: relative;
}
.register_header p:nth-child(3) img{
  width: 100%;
  height: 100%;
}
.shopping_main_all{
  margin-top: .96rem;
  overflow-y:scroll;
  max-height: 80%
}
.shopping_header {
  flex-shrink: 0;
  width: 92%;
  margin-left: 4%;
  height: 0.96rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
}
.shopping_header p:nth-child(2) {
  font-size: 0.32rem;
}
.shopping_header p:nth-child(3) {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
}
.shopping_header p:nth-child(3) img {
  width: 100%;
  height: 100%;
}
.shopping_red {
  width: 0.22rem;
  height: 0.22rem;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0.22rem;
  text-align: center;
  font-size: 0.16rem;
  background: #ff0103;
  color: #ffffff;
  border-radius: 50%;
}
/*main*/
.shopping_main {
  width: 100%;
  height: auto;
  overflow-y: auto;
  /* flex:1;  */
  flex-shrink: 1;
  background: #f5f5f5;
}
.shopping_main:last-child {
  margin-bottom: 1.06rem;
}
.shopping_main_nav {
  width: 100%;
  height: 0.97rem;
  margin-top: 0.2rem;
  background: #efefef;
}
.nav_newmain {
  width: 100%;
  height: 0.77rem;
  padding-top: 0.18rem;
  display: flex;
  align-items: center;
}
.shopping_q {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  position: relative;
}
.shopping_q .checkboxs {
  width: 100%;
  height: 100%;
  position: absolute;
}
input[type="checkbox"] + label::before {
  box-sizing: border-box;
  content: " "; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  width: 1.8em;
  height: 1.8em;
  background: url("../assets/manage/change_no.png");
  background-size: 100% 100%;
  border-radius: 50%;
  margin-top: -.01rem
}
input[type="checkbox"]:checked + label::before {
  background: url("../assets/manage/change.png");
  background-size: 100% 100%;
}
.contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.contents_all {
  width: 100%;
  height: 2.4rem;
  display: flex;
}
.contents_left {
  display: flex;
  align-items: center;
}
.contents_right {
  flex: 1;
  border-bottom: 1px solid #efefef;
}
.contents_right_all {
  width: 100%;
  height: 1.66rem;
  display: flex;
  margin-top: 0.36rem;
}
.contents_right_img {
  width: 1.66rem;
  height: 1.66rem;
  margin-right: 0.3rem;
  border-radius: 0.06rem;
}
.contents_right_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.06rem;
}
.contents_right_matter {
  flex: 1;
  height: 1.66rem;
  display: flex;
  flex-direction: column;
}
.contents_right_matter .h5 {
  font-size: 0.24rem;
  color: #2f2f2f;
  margin-bottom: 0.4rem;
  height: 65px;  
  width: 100%;  
  overflow: hidden;  
  text-overflow: ellipsis;  
  word-break: break-all;  
  -webkit-box-orient: vertical;  
  -webkit-line-clamp:3;  
}
span {
  display: inline-block;
}
.contents_right_center {
  display: flex;
  width: 100%;
  height: 0.4rem;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.cargo {
  font-size: 0.2rem;
  color: #2f2f2f;
}
.contents_right_center_count {
  display: flex;
  border-radius: 0.06rem;
  margin-right: 0.2rem;
  margin-bottom: 0.4rem;
}
.contents_right_center_count .minus,
.add {
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.2rem;
  color: #2f2f2f;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.43rem;
  border: 1px solid #efefef;
}
.contents_right_center_count .minus {
  border-radius: 0.06rem 0 0 0.06rem;
}
.contents_right_center_count .add {
  border-radius: 0 0.06rem 0.06rem 0;
}
.inpus {
  border: none;
  width: 0.7rem;
  height: 0.36rem;
  font-size: 0.24rem;
  color: #2f2f2f;
  line-height: 0.43rem;
  text-align: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.contents_right_moneyAll {
  display: flex;
  justify-content: space-between;
}
.contents_right_delete {
  display: flex;
  margin-right: 0.2rem;
}
.contents_right_delete a {
  text-decoration: none;
  /* out-line: none; */
  color: #428bca;
  width: .5rem;
  height: .3rem;

}
.contents_right_shu {
  padding: 0 0.12rem;
  color: #428bca;
}
.contents_right_money {
  font-size: 0.24rem;
  font-family: "MicrosoftYaHei";
  color: #ff0103;
}
/*footer*/
.shopping_footer {
  width: 100%;
  flex-shrink: 0;
  height: 1.06rem;
  display: flex;
  background: #f5f5f5;
  border-top: 0.01rem;
  position: fixed;
  bottom: 0rem;
}
.shopping_footer_left {
  flex: 1;
  margin-top: 0.2rem;
  background: #efefef;
}
.shopping_footer_right {
  width: 2.05rem;
  height: 0.86rem;
  margin-top: 0.2rem;
  display: flex;
  font-size: 0.32rem;
  color: #ffffff;
  background: red;
  justify-content: center;
  align-items: center;
}
.shopping_footer_left {
  display: flex;
  align-items: center;
}
.shopping_q {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.shopping_q .checkboxs {
  width: 100%;
  height: 100%;
  opacity: 0;
}
.shopping_q img {
  width: 100%;
  height: 100%;
}
.shopping_footer_left .all .quan {
  font-size: 0.24rem;
  color: #2f2f2f;
  margin-right: 0.5rem;
}
.shopping_footer_left .money {
  font-size: 0.32rem;
  color: #2f2f2f;
}
</style>
