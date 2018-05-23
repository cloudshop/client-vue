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
      buserId:'',
    };
  },
  created() {
    this.type = sessionStorage.getItem("changetype");
    this.money = sessionStorage.getItem("monbumber");
    this.banl = sessionStorage.getItem("balance");
    this.tick = sessionStorage.getItem("ticket");
    this.tick =Number(this.tick)
    this.money = Number(this.money)
    if (this.type == "false") {
      this.type = false;
    } else {
      this.type = true;
    }
    if(this.tick > this.money){
        this.typp = false;
    }else{
        this.typp = true;
    }
  },
  filters:{
      keep:function(value){
          value = Number(value);
          return value.toFixed(2)
      }
  },
  methods: {
    back() {
      sessionStorage.removeItem("monbumber");
      sessionStorage.removeItem("balance");
      sessionStorage.removeItem("changetype");
      sessionStorage.removeItem("ticket");
    },
    sure(){
        var that =this
        var aamon = that.money
        var aatic =that.tick
        var aabanl = that.banl
        var all =parseInt(aatic) + parseInt(aabanl)
        if(that.tick > that.money){
            
           console.log('劵足够支付')
        }else{
            console.log('需要余额支付')
            if(aatic < aamon){
                var need = aamon - aatic
                console.log('需要支付'+aatic + '劵')
                console.log('需要支付'+need + '余额')
            }
            if(all < aamon){
                alert('当前支付方式不足以支付订单，请选择第三方支付')
            }
        }
    },
    threepay() {
      var paymo = $(".allmo").text();
      console.log(paymo);
      var paramss = {
        amount: paymo,
        buserId: 3,
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
  watch: {}
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
</style>
