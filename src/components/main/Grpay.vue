<template>
    <div>
        <div class="header">
            <ul>
                <li><span @click="close">&lt;</span></li>
                <li>贡融支付</li>
                <li>{{tell}}</li>
            </ul>
        </div>
        <div class="main">
            <p class="money">消费金额: <input type="text" placeholder="请输入消费金额" v-model="mon" maxlength="6"></p>
            <p class="type">
                <ul>
                    <li><img src="../../assets/Mine/贡融券.png" alt="">贡融卷：<span class="ticke">{{arr.ticket}}</span></li>
                    <li><img src="../../assets/Mine/余额.png" alt="">余额&#12288;：<span class="bana">{{arr.balance}}</span></li>
                </ul>
            </p>
            <p class="changetype">
                <span><input type="checkbox" name="change" id="yn" checked>是否用贡融卷支付</span>
            </p>
            <p class="next">
                <input type="button" value="下一步" class="btn" @click="bun">
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      mon: "",
      arr: "",
      tell: ""
    };
  },
  created() {
    var that = this;
    var test = window.location.href;
    var urltel = "http://app.grjf365.com/#/grpay?phoneNumber=17600045817";
    that.tell = test.substring(43, 54);
    console.log(that.tell);
    sessionStorage.setItem("phone", that.tell);
    this.$axios
      .get("wallet/api/wallets/user")
      .then(function(res) {
        that.arr = res.data;
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    close() {
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
    bun() {
      var aa = $(".ticke").text();
      var bb = $(".bana").text();
      var that = this;
      var a;
      var b = that.mon;
      if (b == "") {
        alert("请输入付款金额");
      } else {
        sessionStorage.setItem("monbumber", b);

        if ($("#yn").prop("checked")) {
          if (aa > b) {
            this.$router.push("/Surepay");
            sessionStorage.setItem("ticket", aa);
            sessionStorage.setItem("balance", bb);
            sessionStorage.setItem("changetype", "true");
          } else {
            sessionStorage.setItem("balance", bb);
            sessionStorage.setItem("ticket", aa);
            sessionStorage.setItem("changetype", "true");
            this.$router.push("/Surepay");
          }
        } else {
          sessionStorage.setItem("balance", bb);
          sessionStorage.setItem("changetype", "false");
          this.$router.push("/Surepay");
        }
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
}
.money {
  width: 80%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  padding-left: 0.5rem;
  border-bottom: 1px solid #e7e7e7;
  margin: auto;
}
.money input {
  height: 0.5rem;
  border: none;
}
.type {
  width: 80%;
  /* background: red; */
  margin: auto;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #e7e7e7;
}
.type li {
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.3rem;
  position: relative;
  font-size: 0.28rem;
}
.type img {
  width: 0.32rem;
  position: absolute;
  margin-top: 0.08rem;
  left: -0.1rem;
}
.type span {
  color: #404040;
}
.changetype {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  /* background: red; */
  text-align: right;
  font-size: 0.28rem;
}
.changetype span {
  padding-right: 0.5rem;
}
.next {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}
.next input {
  width: 80%;
  height: 0.7rem;
  border-radius: 0.15rem;
  border: none;
  background: #ff0103;
  color: #fff;
  margin-bottom: 0.8rem;
}
/* 765812749 */
</style>
