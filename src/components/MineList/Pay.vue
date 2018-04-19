<template>
  <div>
     <header class="header">
         <ul>
             <li @click='back'><span>&lt;</span></li>
             <li>选择支付方式</li>
             <li></li>
         </ul>
     </header>
     <div class="center">
        <p class="center_top" >请您尽快完支付 <span><i>{{this.$route.params.payment}}</i>元</span></p>
        <div class="change">
            <p class="one">
                <img src="../../assets/Mine/余额.png" alt="">
               <ul>
                   <li> 余额(需支付<b class="need"></b>元)</li>
                   <li><i class="now">{{money}}</i>  <span class="nomoney">(余额不足)</span></li>
               </ul>
                <span>
                    <input type="radio" id="yue" name="sex" value="余额" checked/>
                    <label for="yue"></label>
                </span>
            </p>
            <p class="two">
                <img src="../../assets/top/支付宝.png" alt="">
                <!-- <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul> -->
                支付宝
                <span>
                    <input type="radio" id="zhifubao" name="sex" value="支付宝" />
                    <label for="zhifubao"></label>
                </span>
            </p>
            {{took}}
            <!-- <p>
                <img src="../../assets/top/快捷支付.png" alt=""> -->
                <!-- <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul> -->
                <!-- 快捷支付
                <span>
                    <input type="radio" id="kuaijiezhifu" name="sex" value="快捷支付"/>
                    <label for="kuaijiezhifu"></label>
                </span>
            </p>
            <p>
                <img src="../../assets/top/银联.png" alt="">
                联通
                <span>
                    <input type="radio" id="yinlian" name="sex" value="银联"/>
                    <label for="yinlian"></label>
                </span>
            </p> -->
         </div>
             <button class="botton">
                 确认支付（<span></span>元）
             </button>
            
    
     </div>

     <div class="del">
           <div>
               {{type}}
           </div>
           <p>
               <!-- <span class="no" @click="cancel">取消</span> -->
               <span class="yes" @click="q">确定</span>
           </p>
       </div>  
  </div>
</template>

<script>
import axios from 'axios'
import { setCookie,getCookie } from '../../assets/js/cookie.js'
export default {
    data(){
        return {
            payment:this.$route.params.payment,
            postFee: this.$route.params.postFee,
            buyerMessage: this.$route.params.buyerMessage,
            buyerNick: this.$route.params.buyerNick,
            shopId:this.$route.params.shopId,
            productSkuId:this.$route.params.productSkuId,
            count:this.$route.params.count,
            price:this.$route.params.price,
            data:null,
            money:null,
            type:null,  // 类型   
            took:null,
            web:null        
        }
    },
    methods:{
        // display(e) {
       
        // },
        //取消事件
        cancel() {
        $(".del").hide();
        },
        //确定事件
        q() {
         var  val={
              "func":"openURL",
              "param":{
                  "URL":'http://cloud.eyun.online:9080/#/indentAll',
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
        $(".del").hide();
        },
        OpenindentAll:function(){
        //       var  val={
        //       "func":"openURL",
        //       "param":{
        //           "URL":'http://192.168.1.102:8888/#/indentAll',
        //       },
        //   };
        //     var u = navigator.userAgent;
        //     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
        //     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        //     if(isiOS){
        //         window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
        //     }else if(isAndroid){  
        //         window.androidObject.JSCallAndroid(JSON.stringify(val));
        //     }
               
    //              var params =     [{
    //                 "payment":this.payment,
    //                 "postFee": this.postFee,
    //                 "buyerMessage": this.buyerMessage,
    //                 "buyerNick": this.buyerNick,
    //                 "shopId": Number(this.shopId),
    //                 "proOrderItems":[
    //                 {
    //                     "productSkuId": Number(this.productSkuId),
    //                     "count": Number(this.count),
    //                     "price": Number(this.price)           
    //                 },
    //             ]
    //             }]
    //       console.log(params)
    // //         var paramss = [{
    // //         "payment": 500,
    // //         "postFee": 0,
    // //         "buyerMessage": null,
    // //         "buyerNick": "sjskfs",
    // //         "shopId": 3,
    // //         "proOrderItems":[
    // //         {
    // //             "productSkuId":2,
    // //             "count":1,
    // //             "price":64815
    // //         }
    // //         ]
    // //     }
    // //     ]
    // // console.log(paramss)
    //      this.$axios({
    //             method:'post',
    //             url:'http://cloud.eyun.online:9080/order/api/depproorders',
    //             data:params,
    //             headers:{
    //             'Content-Type': 'application/json',
    //             }
    //         })
    //         .then(function(response) {
    //         console.log(response.data);
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         });

            
        },
        back(){
             this.$router.push({name:"ConfirmAnOrder"})
        },
        payStatus(type,item){
            this.init = item;
            $(".del").show();
            this.type = type;
            if(this.type == 'success'){
                this.type = '支付成功'
            }else if(this.type=='cancel'){
               this.type = '用户取消'
            }else if(this.type=='failed'){
                this.type = '支付失败'
            }else if(this.type=='unknown'){
                this.type = '未知状态'
            }
        }
    },
    created(){
            this.money = sessionStorage.getItem("money");
    },
    mounted:function(){
        var that = this;
        window.payStatus = this.payStatus;
        window.OpenindentAll = this.OpenindentAll;
        $(".nomoney").hide()
        var a = $('.center_top i').text()
        $('.need').text(a)
        $('.botton span').text(a);
        var b = $('.now').text() 
    
      var  a1 = Number( a );
      var  b1 = Number( b );
        if( a1 > b1){
            console.log('没钱')
            $(".nomoney").show()
            $('.one').css("color","#c8c8c8")
            $('.one input').attr("disabled","disabled")
             $('.two input').attr('checked','checked');
        }else{
            $(".nomoney").hide()
           console.log('有钱')
        }
          $(".botton").on('click',function(){    
              var re=$('input:radio[name="sex"]:checked').val();
              console.log('即将使用'+re+'支付'+a+'元'); 

              if(re == '余额'){
                   var paramss ={
                    "payment": that.payment,
                    "postFee": that.postFee,
                    "paymentType":1,
                    "buyerMessage": that.buyerMessage,
                    "buyerNick":that.buyerNick,
                    "shopId":  Number(that.shopId),
                    "proOrderItems":[
                    {
                        "productSkuId":Number(that.productSkuId),
                        "count":Number(that.count),
                        "price":Number(that.price) 
                    
                    }
                    ]
                }
          var accessToken = getCookie('access_token');
            axios({
                    method:'post',
                    url:'http://cloud.eyun.online:9080/order/api/depproorders/1',
                    data:paramss,
                    headers:{
                    // 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                    }
                })
                .then(function(response) {
                    that.web = response.data;
                    console.log(that.web)
                        axios({
                            method:'post',
                            url:'http://cloud.eyun.online:9080/wallet/api/wallets/balance/pay',
                            data:{
                            "orderNo":that.web,
                            "password": 123456
                            },
                            headers:{
                            // 'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + accessToken,
                            }
                        })
                        .then(function(res) {
                                if(res.data ==''){
                                    that.payStatus('success');
                                };
                        })
                        .catch((error)=>{
                            console.log(error);
                        }); 
                })
                .catch((error)=>{
                    console.log(error);
                }); 
            }else if(re == '支付宝'){                          
                 var paramss ={
                    "payment": that.payment,
                    "postFee": that.postFee,
                    "paymentType":2,
                    "buyerMessage": that.buyerMessage,
                    "buyerNick":that.buyerNick,
                    "shopId":  Number(that.shopId),
                    "proOrderItems":[
                    {
                        "productSkuId":Number(that.productSkuId),
                        "count":Number(that.count),
                        "price":Number(that.price) 
                    
                    }
                    ]
                }
          var accessToken = getCookie('access_token');
            axios({
                    method:'post',
                    url:'http://cloud.eyun.online:9080/order/api/depproorders',
                    data:paramss,
                    headers:{
                    // 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                    }
                })
                .then(function(response) {
                    that.took = response.data;
                 var  val={
                        "func":'pay',
                        "param":{
                        "payType":'Ali',
                        "orderStr": that.took
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
                    })
                    .catch((error)=>{
                        console.log(error);
                    }); 
            }
                //  var params =     [{
                //     "payment":that.payment,
                //     "postFee": that.postFee,
                //     "buyerMessage": that.buyerMessage,
                //     "buyerNick": that.buyerNick,
                //     "paymentType":2,
                //     "shopId": Number(that.shopId),
                //     "proOrderItems":[
                //     {
                //         "productSkuId": Number(that.productSkuId),
                //         "count": Number(that.count),
                //         "price": Number(that.price)           
                //     },
                // ]
                // }]
            // console.log(params)
       });
    }
}
</script>

<style scoped>
.del {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  text-align: center;
}
.del div {
  width: 70%;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
  text-align: center;
  margin: auto;
  margin-top: 60%;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.del p {
  width: 70%;
  background: #fff;
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  margin: auto;
  border-top: 1px solid #e7e7e7;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  overflow: hidden;
}
.del span {
  flex: 1;
}
.del span:last-child {
  background: #ff0103;
  color: #fff;
}
    .header{
        width: 100%;
        height: .96rem;
        border-bottom: 1px solid #e7e7e7;
        box-sizing: border-box;
        background: #fff;
        font-size:.32rem;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        line-height: .96rem;
    }
    .header li:first-child{
        text-align: left;
    }
    .header li span{
    padding-left: .3rem;
    }
    .center_top{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        background: #fde9e8;
        padding-left: .3rem;
        color: #2f2f2f;
        font-size: .24rem;
        position: relative;
    }
    .center_top span{
        float: right;
        font-size: .28rem;
        color: #ff0103;
        position: absolute;
        right: .6rem;
    }

    .change{
    width: 100%;
    height: 4.1rem;
    background: #fff;
    margin-top: .2rem;
    font-size: .28rem;
}
.change p{
    height: 1rem;
    line-height: 1rem;
    padding-left: .3rem;
    box-sizing: border-box;
}
.change p{
    border-bottom: 1px solid #e7e7e7;
}
.change p:last-child{
    border:none;
}
.change p span{
    float: right;
    padding-right: .3rem;
}
.change p input{
    display: none;
}
.change p ul{
    float: left;
    margin-left: .15rem;
    margin-top: .15rem;
}
.change p li{
    line-height: .4rem;
}
.change img{
    width: .5rem;
    margin-right: .2rem;
    float: left;
    vertical-align: middle;
    margin-top: .25rem
}
button{
    width: 100%;
    height: .8rem;
    background: #ff0103;
    font-size: .32rem;
    color: #fff;
    position: absolute;
    bottom: 0;
    border: none;
}

input[type="radio"] + label::before {
        box-sizing: border-box;
        content: " "; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        width: 2em;
        height: 2em;
        background: url("../../assets/manage/change_no.png");
        background-size: 100% 100%;
        /* margin-right: .4em; */
        border-radius: 50%;
        margin-top: -.1rem
    }
    input[type="radio"]:checked + label::before {
        background: red;
        background: url("../../assets/manage/change.png");
        
        background-size: 100% 100%;
    }
</style>
