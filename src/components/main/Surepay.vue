<template>
    <div>
        <header class="header">
            <ul>
                <li @click="back"><router-link to="/grpay"><span class="">&lt;</span></router-link></li>            
                <li>确认支付</li>
                <li></li>
            </ul>
        </header>
        <div class="main">
            <p>订单总额：<span class="allmo">{{money | keep}}</span> 元</p>
            <p>
                <ul>
                    <li class="quanq" v-show="type">贡融卷：<span> <i>{{tick}}</i> 劵</span></li>
                    <li class="yuee" v-show="typp">余额：<span> <i>{{banl}}</i> 元 </span></li>
                </ul>
            </p>
            <p style="color:#0088cc"><span @click="threepay">钱不够？去支付宝付款</span></p>
            <p>
                <input type="button" value="立即付款" @click="sure">
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
                <span @click="dell">确定</span>
              </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      money: "",
      banl: "",
      tick: "",
      type: true,
      typp: true,
      buserId: "",
      ordernum: "",
      psd: "",
      phonn: "",
      usdd: "",
      bol: false
    };
  },

  created() {
    var that = this;
    // var test = window.location.href;
    // var urltel = "http://app.grjf365.com/#/grpay?phoneNumber=17600045817"
    // var tel2 = urltel.substring(43,54);
    // console.log(tel2);
    this.phonn = sessionStorage.getItem("phone");
    this.$axios
      .get("user/api/user-annexes-getUserInfosByPhone/" + this.phonn)
      .then(function(res) {
        // console.log(res.data.id);
        // var that =this
        that.usdd = res.data.id;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.type = sessionStorage.getItem("changetype");
    this.money = sessionStorage.getItem("monbumber");
    this.banl = sessionStorage.getItem("balance");
    this.tick = sessionStorage.getItem("ticket");
    this.tick = Number(this.tick);
    this.money = Number(this.money);
    if (this.type == "false") {
      this.type = false;
    } else {
      this.type = true;
    }
    if (this.tick > this.money) {
      this.typp = false;
    } else {
      this.typp = true;
    }
  },
  filters: {
    keep: function(value) {
      value = Number(value);
      return value.toFixed(2);
    }
  },
  methods: {
    back() {
      sessionStorage.removeItem("monbumber");
      sessionStorage.removeItem("balance");
      sessionStorage.removeItem("changetype");
      sessionStorage.removeItem("ticket");
      sessionStorage.removeItem("phone");
    },
    del() {
      $(".password").fadeOut(200);
    },
    dell() {
      var val = {
        func: "closeCurrent",
        param: { finallyIndex: 1 }
      };
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isiOS) {
        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
      } else if (isAndroid) {
        window.androidObject.JSCallAndroid(JSON.stringify(val));
      }
    },
    sure() {
      var that = this;
      var aamon = that.money;
      var aatic = that.tick;
      var aabanl = that.banl;
      var useid = that.usdd;
      console.log(typeof aamon);
      var all = parseInt(aatic) + parseInt(aabanl);
      if (that.type == true) {
        console.log("允许贡融劵");
        if (that.tick >= that.money) {
          //贡融劵支付顶部
          console.log("劵足够支付");
          $(".password").fadeIn(300);
          var moo = aamon.toString();
          var uss = useid.toString();
          console.log(moo);
          console.log(typeof moo);
          var datas = {
            amount: aamon,
            balance: 0,
            buserId: uss,
            payment: 0,
            ticket: aamon,
            type: 3
          };
          //   var datt = JSON.stringify(datas);
          console.log(datas);
          this.$axios({
            method: "post",
            url: "order/api/face_orders/createOrder",
            data: datas
          })
            .then(function(res) {
              console.log(res);
              that.ordernum = res.request.response;
            })
            .catch(error => {
              console.log(error);
            });
          //贡融劵支付底部
        } else {
          //贡融劵余额支付顶部
          console.log("组合支付");
          var need = aamon - aatic;
          var needban = need.toFixed(2);
          //   var bbbanl = aabanl.toFixed(2);

          var a1 = Number(needban);
          var a2 = Number(aabanl);
          //   console.log(needban);
          //   console.log(aabanl);
          if (a1 > a2) {
            alert("当前支付方式不足以支付订单，请充值或使用第三方支付");
          } else {
            $(".password").fadeIn(300);
            var datas = {
              amount: aamon,
              balance: needban,
              buserId: useid,
              payment: 0,
              ticket: aatic,
              type: 3
            };
            this.$axios({
              method: "post",
              url: "order/api/face_orders/createOrder",
              data: datas
            })
              .then(function(res) {
                console.log(res);
                that.ordernum = res.request.response;
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
      } else {
        console.log("不允许贡融劵");
        if (aamon > aabanl) {
          alert("余额不足，请充值或使用第三方支付");
        } else {
          console.log("余额可以支付");
          $(".password").fadeIn(300);
          var datas = {
            amount: aamon,
            balance: aamon,
            buserId: useid,
            payment: 0,
            ticket: 0,
            type: 1
          };
          this.$axios({
            method: "post",
            url: "order/api/face_orders/createOrder",
            data: datas
          })
            .then(function(res) {
              console.log(res);
              that.ordernum = res.request.response;
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    },
    threepay() {
      // var that =this
      var paymo = $(".allmo").text();
      console.log(paymo);
      var paramss = {
        amount: paymo,
        buserId: this.usdd,
        payment: paymo,
        type: 4
      };
      this.$axios({
        method: "post",
        url: "order/api/face_orders/createOrder",
        data: paramss
      })
        .then(function(response) {
          var took = response.data;
          var val = {
            func: "pay",
            param: {
              payType: "Ali",
              orderStr: took
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
  },
  watch: {
    psd(curVal) {
      var that = this;
      if (curVal.length == 6) {
        console.log(curVal);
        var psd = curVal;
        var orno = that.ordernum;
        // var orno = that.ordernum
        var datas = {
          orderNo: orno,
          password: psd
        };
        console.log(datas);
        this.$axios
          .post("wallet/api/wallets/balance/pay",datas)
          .then(function(res) {
            console.log(res);
            console.log(res.status);
            var typ = res.status;
            if (typ == "200") {
              that.bol = true;
              //   alert("支付成功");
              //  that.$router.push({ path: "/Mine" });
            } else {
            }
          })
          .catch(function(error) {
            console.log(error);
            var show = error.response.data.title;
            alert(show);
          });
      }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.96rem;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  line-height: 0.96rem;
  text-align: center;
  font-size: 0.32rem;
}
.header li:first-child {
  text-align: left;
}
.header span {
  padding-left: 0.4rem;
}
.main {
  width: 100%;
  background: #fff;
  margin-top: 0.5rem;
  color: #676767;
  font-size: 0.28rem;
}
.main p:first-child {
  width: 80%;
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 1px solid #e7e7e7;
  margin: auto;
  text-align: center;
}
.main p:first-child span {
  color: #ff5065;
}
.main p:nth-child(2) {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid #e7e7e7;
}
.main li {
  margin-top: 0.36rem;
  margin-bottom: 0.3rem;
}
.main ul span {
  float: right;
}
.main p:nth-child(3) {
  width: 80%;
  height: 0.6rem;
  line-height: 0.6rem;
  margin: auto;
  text-align: right;
}
.main p:nth-child(4) {
  width: 100%;
  text-align: center;
  margin-top: 1.4rem;
  padding-bottom: 0.8rem;
}
.main p:nth-child(4) input {
  height: 0.7rem;
  width: 80%;
  border: none;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.3rem;
  background: #ff0103;
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
.msg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.succeed {
  width: 86%;
  height: 2.5rem;
  position: absolute;
  left: 7%;
  top: 40%;
  z-index: 10;
  background: #fff;
  border-radius: 0.1rem;
}
.succeed router-link {
  float: left;
  display: inline-block;
}
h3 {
  font-size: 0.3rem;
  line-height: 0.9rem;
  padding: 0 0.4rem;
}
.msg p {
  line-height: 0.8rem;
  font-size: 0.25rem;
  font-weight: 600;
  padding-left: 0.3rem;
}
.msg span {
  display: block;
  text-align: right;
  padding: 0 0.4rem;
  color: red;
  font-weight: 600;
}
</style>
