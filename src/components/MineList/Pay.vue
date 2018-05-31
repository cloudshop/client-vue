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
                    <!-- <label for="yue"></label> -->
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
                    <!-- <label for="zhifubao"></label> -->
                </span>
            </p>
            <p class="two">
                <img src="../../assets/top/微信.png" alt="">
                <!-- <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul> -->
                微信
                <span>
                    <input type="radio" id="zhifubao" name="sex" value="微信" />
                    <!-- <label for="zhifubao"></label> -->
                </span>
            </p>
         </div>
             <button class="botton" @click="pay">
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
       <div class="password">
          <div class="password_bottom">
              <span @click="del">×</span>
              <p class="password_p">
                  <input type="password" maxlength="6" id="psd" v-model="psd" placeholder="请输入支付密码">
              </p>
          </div>
      </div>
      <div class="msg" v-show="bol">
              <div class="succeed">
                <h3>提示</h3>
                <p>支付成功</p>
                <!-- <router-link to="/RemainingSum">取消</router-link> -->
                <span @click="q">确定</span>
              </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      payment: this.$route.params.payment,
      postFee: this.$route.params.postFee,
      buyerMessage: this.$route.params.buyerMessage,
      buyerNick: this.$route.params.buyerNick,
      shopId: this.$route.params.shopId,
      productSkuId: this.$route.params.productSkuId,
      count: this.$route.params.count,
      price: this.$route.params.price,
      data: null,
      money: null,
      type: null, // 类型
      took: null,
      web: "",
      psd: "",
      bol:false
    };
  },
  methods: {
    del() {
      $(".password").fadeOut(200);
    },
    sure(){
        this.bol = false;
    },
    //取消事件
    cancel() {
      $(".del").hide();
    },
    //确定事件
    q() {
      var val = {
        func: "openURL",
        param: {
          URL: "/#/indentAll"
        }
      };
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isiOS) {
        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
      } else if (isAndroid) {
        window.androidObject.JSCallAndroid(JSON.stringify(val));
      }
      $(".del").hide();
    },
    OpenindentAll: function() {},
    back() {
      this.$router.push({ name: "ConfirmAnOrder" });
    },
    payStatus(type, item) {
      this.init = item;
      $(".del").show();
      this.type = type;
      if (this.type == "success") {
        this.type = "支付成功";
      } else if (this.type == "cancel") {
        this.type = "用户取消";
      } else if (this.type == "failed") {
        this.type = "支付失败";
      } else if (this.type == "unknown") {
        this.type = "未知状态";
      }
    },
    pay() {
      var that = this;
      var re = $('input:radio[name="sex"]:checked').val();
      if (re == "余额") {
        var paramss = {
          payment: that.payment,
          postFee: that.postFee,
          paymentType: 1,
          buyerMessage: that.buyerMessage,
          buyerNick: that.buyerNick,
          shopId: Number(that.shopId),
          proOrderItems: [
            {
              productSkuId: Number(that.productSkuId),
              count: Number(that.count),
              price: Number(that.price)
            }
          ]
        };
        $(".password").fadeIn(300);
        this.$axios({
          method: "post",
          url: "order/api/depproorders/1",
          data: paramss
        })
          .then(function(response) {
            that.web = response.data;
          })

          //     .then(function(res) {
          //       if (res.data == "") {
          //         that.payStatus("success");
          //       }
          //     })
          //     .catch(error => {
          //       console.log(error);
          //     });
          // })
          .catch(error => {
            console.log(error);
          });
      } else if (re == "支付宝") {
        var paramss = {
          payment: that.payment,
          postFee: that.postFee,
          paymentType: 2,
          buyerMessage: that.buyerMessage,
          buyerNick: that.buyerNick,
          shopId: Number(that.shopId),
          proOrderItems: [
            {
              productSkuId: Number(that.productSkuId),
              count: Number(that.count),
              price: Number(that.price)
            }
          ]
        };
        this.$axios({
          method: "post",
          url: "order/api/depproorders/1",
          data: paramss
        })
          .then(function(response) {
            that.took = response.data;
            var val = {
              func: "pay",
              param: {
                payType: "Ali",
                orderStr: that.took
              }
            };
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if (isiOS) {
              window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            } else if (isAndroid) {
              window.androidObject.JSCallAndroid(JSON.stringify(val));
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
      if (re == "微信") {
        var paramss = {
          payment: that.payment,
          postFee: that.postFee,
          paymentType: 3,
          buyerMessage: that.buyerMessage,
          buyerNick: that.buyerNick,
          shopId: Number(that.shopId),
          proOrderItems: [
            {
              productSkuId: Number(that.productSkuId),
              count: Number(that.count),
              price: Number(that.price)
            }
          ]
        };
        this.$axios({
          method: "post",
          url: "order/api/depproorders/1",
          data: paramss
        })
          .then(function(response) {
            that.took = response.data;
            var val = {
              func: "pay",
              param: {
                payType: "Wechat",
                orderStr: that.took
              }
            };
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if (isiOS) {
              window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            } else if (isAndroid) {
              window.androidObject.JSCallAndroid(JSON.stringify(val));
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  watch: {
    psd(curVal) {
      var that = this;
      if (curVal.length == 6) {
        console.log(that.web);
        $(".password").fadeOut(300);
        $('#psd').val('')
        var aa = curVal;
        this.$axios({
          method: "post",
          url: "wallet/api/wallets/balance/pay",
          data: {
            orderNo: that.web,
            password: aa
          }
        })
        .then(function(res) {
          console.log(res)
          var typ = res.status
            if(typ== '200'){
                that.bol = true;  
            }else{
              alert('错误')
            }
        })
        .catch(function(error) {
            console.log(error);
            var show = error.response.data.title
            alert(show)
          });
      }
    }
  },
  created() {
    this.money = sessionStorage.getItem("money");
  },
  mounted: function() {
    var that = this;
    window.payStatus = this.payStatus;
    window.OpenindentAll = this.OpenindentAll;
    $(".nomoney").hide();
    var a = $(".center_top i").text();
    $(".need").text(a);
    $(".botton span").text(a);
    var b = $(".now").text();

    var a1 = Number(a);
    var b1 = Number(b);
    if (a1 > b1) {
      $(".nomoney").show();
      $(".one").css("color", "#c8c8c8");
      $(".one input").attr("disabled", "disabled");
      $(".two input").attr("checked", "checked");
    } else {
      $(".nomoney").hide();
    }

    //top
  }
};
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
.header {
  width: 100%;
  height: 0.96rem;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  background: #fff;
  font-size: 0.32rem;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  text-align: center;
  line-height: 0.96rem;
}
.header li:first-child {
  text-align: left;
}
.header li span {
  padding-left: 0.3rem;
}
.center_top {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fde9e8;
  padding-left: 0.3rem;
  color: #2f2f2f;
  font-size: 0.24rem;
  position: relative;
}
.center_top span {
  float: right;
  font-size: 0.28rem;
  color: #ff0103;
  position: absolute;
  right: 0.6rem;
}

.change {
  width: 100%;
  height: 4.1rem;
  background: #fff;
  margin-top: 0.2rem;
  font-size: 0.28rem;
}
.change p {
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
.change p {
  border-bottom: 1px solid #e7e7e7;
}
.change p:last-child {
  border: none;
}
.change p span {
  float: right;
  padding-right: 0.3rem;
}
.change p input {
  /* display: none; */
}
.change p ul {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.15rem;
}
.change p li {
  line-height: 0.4rem;
}
.change img {
  width: 0.5rem;
  margin-right: 0.2rem;
  float: left;
  vertical-align: middle;
  margin-top: 0.25rem;
}
button {
  width: 100%;
  height: 0.8rem;
  background: #ff0103;
  font-size: 0.32rem;
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
  margin-top: -0.1rem;
}
input[type="radio"]:checked + label::before {
  background: red;
  background: url("../../assets/manage/change.png");

  background-size: 100% 100%;
}
.password {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.password_bottom {
  width: 100%;
  height: 50%;
  background: #fff;
  position: fixed;
  bottom: 0;
}
.password_p {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  /* background: #ccc; */
  text-align: center;
}
.password_p input {
  text-align: center;
  width: 3rem;
  height: 0.7rem;
  border: 1px solid #ccc;
}
.password_bottom span {
  display: inline-block;
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  position: absolute;
  float: right;
  font-size: 0.5rem;
  right: 0;
  color: #ccc;
}
.msg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.succeed{
  width: 86%;
  height: 2.5rem;
  position: absolute;
  left: 7%;
  top: 40%;
  z-index: 10;
  background: #fff;
  border-radius: 0.1rem;
}
.succeed router-link{
  float: left;
  display: inline-block;
}
h3{
  font-size: 0.3rem;
  line-height: 0.9rem;
  padding: 0 0.4rem;
}
.msg p{
  line-height: 0.8rem;
  font-size: 0.25rem;
  font-weight: 600;
  padding-left: .3rem;
}
.msg span{
  display: block;
  text-align: right;
  padding: 0 0.4rem;
  color: red;
  font-weight: 600;
}

</style>
