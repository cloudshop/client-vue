<template>
   <div class="server2">
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                    <router-link :to="{ path: '/servershop' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">商家平台使用费缴纳</h1>
            <div class="mint-header-button is-right"></div>
        </header>
      <div class="main">
          <p class="userleave">会员等级 <span>增值商家</span></p>
          <p class="usertype">缴费类型 <span>服务商代理费</span></p>
          <p class="number">需要支付：20000元</p>
          <p class="changetype">支付方式</p>
          <p class="ali">
              <img src="../../assets/Login/支付宝.png">
              <em class="e">支付宝</em>
              <span><input type="radio" name="sex" checked value="2"></span>
          </p>
          <p class="ali">
            <img src="../../assets/Login/微信.png">
            <em class="e">微信</em>
            <span><input type="radio" name="sex" value="3"></span>
          </p>
      </div>
      <div class="bottom">
          <button @click="pay">确认支付(20000元)</button>
      </div>
      <div class="password">
          <div class="password_bottom">
              <p class="password_p">
                  <input type="password" maxlength="6" id="psd" v-model="psd">
              </p>
          </div>
      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      money: "",
      psd: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    pay() {
      var re = $('input:radio[name="sex"]:checked').val();
      var datas = {
        payType: re
      };
      console.log(datas);
      if (re == 2) {
        this.$axios
          .post("order/api/leaguer-order/serviceProvider", datas)
          .then(function(res) {
            // console.log(res.data);
            var took = res.data;
            var val = {
              func: "pay",
              param: {
                payType: "Ali",
                orderStr: took
              }
            };
            console.log(val)
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if (isiOS) {
              window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            } else if (isAndroid) {
              window.androidObject.JSCallAndroid(JSON.stringify(val));
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (re == 3) {
        this.$axios
          .post("order/api/leaguer-order/serviceProvider", datas)
          .then(function(res) {
            // console.log(res.data.orderString);
            var took = res.data;
            var val = {
              func: "pay",
              param: {
                payType: "Wechat",
                orderStr: took
              }
            };
            console.log(val)
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if (isiOS) {
              window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            } else if (isAndroid) {
              window.androidObject.JSCallAndroid(JSON.stringify(val));
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  watch: {
    psd(curVal) {
      if (curVal.length == 6) {
        console.log(this);
        console.log(curVal);
        this.$axios
          .post(
            "http://app.grjf365.com:9080/order/api/leaguer-order/serviceProvider",
            datas
          )
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style scoped>
.server2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #f5f5f5;
}
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 0.94rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #e7e7e7;
}
.main span {
  float: right;
  padding-right: 0.6rem;
}
.userleave {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  font-size: 0.3rem;
  padding-left: 0.3rem;
  border-bottom: 1px solid #e7e7e7;
}
.usertype {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  font-size: 0.3rem;
  padding-left: 0.3rem;
  border-bottom: 1px solid #e7e7e7;
}
.number {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  background: #fff;
  text-align: center;
  font-size: 0.32rem;
  color: #ef5081;
  font-weight: 400;
}
.changetype {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #c4c4c4;
  padding-left: 0.3rem;
}
.ali {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  font-size: 0.28rem;
  border-bottom: 1px solid #e7e7e7;
}
.ali img {
  width: 0.5rem;
  display: block;
  float: left;
  margin-top: 0.15rem;
  padding-left: 0.3rem;
}
.ali em {
  margin-left: 0.1rem;
}
.ali input {
  border: none;
  border: 1px solid red;
}
.bottom {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
.bottom button {
  width: 100%;
  height: 1rem;
  background: #ff5064;
  border: none;
  color: #fff;
  font-size: 0.32rem;
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
</style>

