<template>
   <div>
      <header class='header'>
        <div class='headRight'>
        </div>
        <dl>
            <dt><img :src="arr.avatar"/></dt>
            <dd>
                  <h2>{{arr.nickname}}</h2>
                  
                  <p>{{usertype}}</p>
            </dd>
        </dl>
      <span @click='Information'></span>
      </header>
        <div class='main content'>
              <div class='nav'>
                    <!-- <router-link :to="{ path: '/RemainingSum' }" tag='dl'> -->
                    <!--<router-link :to="{ name: 'RemainingSum',params:{num:arr.balance} }" tag='dl'>-->
                    <!--     <dt><img src="../assets/Mine/余额.png" alt=""></dt>-->
                    <!--    <dd>-->
                    <!--          <p>余额</p>-->
                    <!--          <span>{{arr.balance}}</span>-->
                    <!--    </dd>-->
                    <!--</router-link>-->
                    <dl @click='balance'>
                        <dt><img src="../assets/Mine/余额.png" alt=""></dt>
                        <dd>
                              <p>余额</p>
                              <span>{{arr.balance}}</span>
                        </dd>
                    </dl>
                  <!-- <router-link :to="{ path: '/Stamps' }" tag='dl'> -->
                  <router-link :to="{ name: 'Stamps',params:{num:arr.ticket} }" tag='dl'>
                        <dt><img src="../assets/Mine/贡融券.png" alt=""></dt>
                        <dd>
                              <p>贡融券</p>
                              <span>{{arr.ticket}}</span>
                        </dd>
                    </router-link>
                    <!-- <router-link :to="{ path: '/Integral' }" tag='dl'> -->
                     <router-link :to="{ name: 'Integral',params:{num:arr.integral} }" tag='dl'>
                       <dt><img src="../assets/Mine/贡融积分.png" alt=""></dt>
                       <dd>
                             <p>贡融积分</p>
                             <span>{{arr.integral}}</span>
                       </dd>
                    </router-link>
              </div>
              <div class='mainContent'>
                <h2>线上商城</h2> 
                <div class='list'>
                  <dl  @click="openorder">
                    <dt><img src="../assets/Mine/订单.png" alt=""></dt>
                    <dd>全部订单</dd>
                  </dl>
                  <router-link :to="{ path: '/collection' }" tag='dl' v-show="false">
                    <dt><img src="../assets/Mine/我的收藏.png" alt=""></dt>
                    <dd>我的收藏</dd>
                  </router-link>
                </div>
              </div>
             <div class='mainContent'> 
                     <h2>贡融服务</h2> 
                     <div class='list'>
                          <router-link :to="{ path: '/CreditCard' }" tag='dl' v-show="false">
                           <dt><img src="../assets/Mine/消费支付.png" alt=""></dt>
                           <dd>消费支付</dd>
                          </router-link>
                         <router-link :to="{ path: '/giving' }" tag='dl' v-show="false">
                            <dt><img src="../assets/Mine/积分赠送.png" alt=""></dt>
                            <dd>积分赠送</dd>
                         </router-link>
                          <!--<router-link :to="{ path: '/SellerCenter' }" tag='dl'>-->
                          <!--</router-link>-->
                            <dl @click='SellerCenter'>
                                <dt><img src="../assets/Mine/商户中心.png" alt=""></dt>
                                <dd>商家入驻</dd>
                            </dl>
                            <!--<router-link :to="{ path: '/MyTeam' }" tag='dl'>-->
                            <router-link :to="{ name: 'MyTeam',params:{arr} }" tag='dl'>
                            <dt><img src="../assets/Mine/我的团队.png" alt=""></dt>
                            <dd>我的团队</dd>
                        </router-link>
                    </div>              
              </div>
              <div class='mainContent moneypay'> 
                  <h2>商户中心</h2> 
                  <div class='list'>
                    <!--<router-link :to="{ path: '/Xorders' }" tag='dl'>-->
                    <!--  <dt><img src="../assets/Mine/money.png" alt=""></dt>-->
                    <!--  <dd>现金支付</dd>-->
                    <!--</router-link>-->
                    <dl class='moneypay' @click="mopay">
                      <dt><img src="../assets/Mine/money.png" alt=""></dt>
                      <dd>现金支付</dd>
                    </dl>
                    <router-link :to="{ path: '/recevingCode' }" tag='dl'>
                      <dt><img src="../assets/Mine/receivingCode.png" alt=""></dt>
                      <dd>收款码</dd>
                    </router-link>
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
import Foot from "./main/Foot";
import { Header, Popup } from "mint-ui";
export default {
  data() {
    return {
      arr: "null",
      flag: false,
      type: "",
      usertype:''
    };
  },
  created() {
    var that = this;
    // console.log(this.$store.getters.isAuthed);
    this.$store.getters.isAuthed !== true
      ? (this.flag = true)
      : (this.flag = false);
    this.$axios
      .get("user/api/user-annexes/userInfo")
      .then(function(res) {
        that.arr = res.data;
        console.log(res.data);
        that.type = res.data.type;
        var tt = that.type
        if(tt<2){
          $('.moneypay').hide()
        }else{
          $('.moneypay').show()
        }
        var name = res.data.type;
        var x;
        switch (name) {
          case 1:
            x = "普通会员";
            break;
          case 2:
            x = "增值会员";
            break;
          case 3:
            x = "普通商家";
            break;
          case 4:
            x = "增值商家";
            break;
          case 5:
            x = "服务商";
            break;
        }
        that.usertype = x
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    logins: function() {
      var val = {
        func: "openURL",
        param: {
          URL: "/#/login"
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
    },
    openorder() {
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
    },
    balance() {
      var val = {
        func: "openURL",
        param: {
          URL: "/#/RemainingSum"
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
    },
     mopay() {
      var val = {
        func: "openURL",
        param: {
          URL: "/#/Xorders"
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
    },
    Information() {
      var val = {
        func: "openURL",
        param: {
          URL: "/#/Information"
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
    },
    SellerCenter() {
      //   this.$router.push({
      //        name: 'SellerCenter',
      //        params: {
      //          type: this.type
      //        }
      //      })
      var typeStr = this.type;
      var val = {
        func: "openURL",
        param: {
          URL: "/#/SellerCenter?type=" + typeStr
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
    }
  },
  components: {
    Foot
  }
};
</script>
<style scoped>
.mark {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
}
.mark img {
  position: fixed;
  top: -5rem;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.mark p {
  text-align: center;
  margin-top: 40%;
  font-size: 0.32rem;
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #ccc;
}
.mark button {
  margin-top: 0.2rem;
  margin-left: 20%;
  width: 60%;
  height: 0.6rem;
  font-size: 0.32rem;
  border: 0;
  border-radius: 0.2rem;
  background: #fff;
  border: 1px solid red;
  color: #ff0103;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.header {
  width: 100%;
  height: 1.92rem;
  background: #ff5067;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}
.header dl {
  padding-left: 0.2rem;
  display: flex;
  margin-top: 0.4rem;
}
.header dl dt {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
  border: 3px solid #ffffff;
}
.header dl dt img {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
}
.header dl dd {
  padding-left: 0.2rem;
}
.header dl dd h2 {
  font-size: 0.32rem;
  color: #ffffff;
}
.header dl dd p {
  font-size: 0.24rem;
  color: #fff;
  padding-top: 0.4rem;
}
.header span {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.15rem;
  display: inline-block;
  background: url(../assets/Mine/更多.png);
  background-size: 100% 100%;
  margin-top: 0.4rem;
}
.header .headRight {
  position: absolute;
  right: 0.3rem;
  top: 0.2rem;
  display: flex;
}
.header .headRight P {
  width: 0.5rem;
  height: 0.5rem;
}
/* .header .headRight p:first-child {
  background: url("../assets/Mine/设置.png");
  background-size: 100% 100%;
} */
/*.header .headRight p:last-child {*/
/*  background: url("../assets/Mine/消息.png");*/
/*  background-size: 100% 100%;*/
/*}*/
.content {
  background: #fff;
}
.main {
  margin-top: 1.92rem;
}
.main .nav {
  display: flex;
  height: 1.61rem;
  border-top: 1px solid #e7e7e7;
}
.main .nav dl {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 1.61rem;
}
.main .nav dl dt {
  width: 0.5rem;
  height: 0.5rem;
}
.main .nav dl dt img {
  width: 0.5rem;
  height: 0.5rem;
}
.main .nav dl dd {
  font-size: 0.24rem;
  color: #2f2f2f;
  line-height: 0.45rem;
}
.main .nav dl dd p {
  text-align: center;
}
.main .nav dl dd span {
  display: block;
  text-align: center;
}
.mainContent {
  border-top: 1px solid #e7e7e7;
  margin: 0 0.2rem;
  margin-bottom: .25rem;
}
.mainContent h2 {
  margin: 0.3rem 0;
  font-size: 0.24rem;
  color: #2f2f2f;
  font-weight: bold;
}
.mainContent .list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.mainContent .list dl {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
}
.mainContent .list dl dt {
  width: 0.5rem;
  height: 0.5rem;
}
dl dt img {
  width: 0.5rem;
  height: 0.5rem;
}
.mainContent .list dl dd {
  color: #2f2f2f;
  font-size: 0.24rem;
  margin-top: 0.3rem;
}
.onLine {
  display: flex;
}
.mainContent .onlinelist {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mainContent .onlinelist dd {
  color: #2f2f2f;
  font-size: 0.24rem;
  margin-top: 0.25rem;
  margin-bottom: 0.3rem;
}

</style>
