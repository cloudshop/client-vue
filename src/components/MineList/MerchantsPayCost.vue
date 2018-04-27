<template>
    <div class='MerchantsPayCost'>
         <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                    <router-link :to="{ path: '/SellerCenter' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">商家平台使用缴纳</h1>
            <div class="mint-header-button is-right" ></div>
        </header>
        <div class='content'>
            <ul class='list'>
                <li><span>会员等级:</span><em>增值会员</em></li>
                <!-- <li><span>贡融券:</span><em>0.4</em></li> -->
                <li><span>年费状态:</span><em>未缴纳年费</em></li>
                <li><span>缴费类型:</span><em>增值商家平台使用费</em></li>
                <li><span>服务期限:</span><em>2017-12-03&nbsp;18:12:42</em></li>
                <p>需要支付:998元</p>
            </ul>

            <!-- <div class='slide'>
                <p>贡融券支付:0.4</p><mt-switch v-model="value"></mt-switch>
            </div> -->
        <div class="pay">
                <ul class="top_bottom1">
                    <li><img src="../../assets/top/支付宝.png"></li>
                    <li>
                        <p>支付宝</p>
                        <p>因为信任,所以简单</p>
                        <span>
                            <input type="radio" id="zhifubao" name="sex" value="2" checked/>
                            <label for="zhifubao"></label>
                        </span>
                    </li>
                </ul>
                <!-- <ul class="top_bottom1 top_bottom2">
                        <li><img src="../../assets/top/快捷支付.png"></li>
                        <li>
                            <p>快捷支付(开联通)</p>
                            <p>因为信任,所以简单</p>
                            <span>
                                <input type="radio" id="kuaijiezhifu" value="快捷支付" name="sex"/>
                                <label for="kuaijiezhifu"></label>
                            </span>
                        </li>
                    </ul>
                <ul class="top_bottom1">
                    <li><img src="../../assets/top/银联.png"></li>
                    <li>
                        <p>通联</p>
                        <p>支付便捷,流畅支付</p>
                        <span>
                            <input type="radio" id="tonglian" value="通联" name="sex"/>
                            <label for="tonglian"></label>
                        </span>
                    </li>
                </ul> -->

      
        <!-- <div class="jump"></div> -->
            </div> 
        </div>
        <footer class='footer'>
            <P>
                <span>
                    <input type="checkbox" id="read" name="sex" value="read" checked/>
                    <label for="read"></label>
                </span>
                我已阅读并接受<i>《贡融商户协议》</i>和<i>《商家入驻须知》</i>
            </P>
            <h2 class="pay">支付</h2>
        </footer>
    </div>
</template>

<script>
import { Switch } from "mint-ui";
import axios from "axios";
import { setCookie, getCookie } from "../../assets/js/cookie.js";
export default {
  data() {
    return {
      value: false
    };
  },
  mounted: function() {
    var accessToken = getCookie("access_token");

    $(".pay").click(function() {
      var type = $('input:radio[name="sex"]:checked').val();
      var datas = { payType: type };
      axios({
        method: "post",
        url: "http://cloud.eyun.online:9080/order/api/leaguer-orders",
        data: datas,
      })
        .then(function(response) {
         var param3 = response.data
          var val = {
            func: "pay",
            param: {
              payType: "Ali",
              orderStr: param3
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
        .catch(error => {
          console.log(error);
        });
    });
  },
  methods: {}
};
</script>

<style scoped>
.MerchantsPayCost {
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
.list {
  padding-bottom: 0.2rem;
  background: #fff;
}
.list li {
  height: 0.92rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  font-size: 0.28rem;
}
.list li span {
  color: #676767;
}
.list li em {
  color: #2f2f2f;
}
.list p {
  text-align: center;
  margin-top: 0.26rem;
  font-size: 0.32rem;
  color: #ef5081;
}
.slide {
  height: 1.1rem;
  margin-top: 0.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.slide p {
  font-size: 0.32rem;
  color: #2f2f2f;
}
.slide .mint-switch {
  height: 0.54rem !important;
}
/*上分割线*/

.pay {
  width: 100%;
  height: 4rem;
}
.pay ul:last-child {
  margin-bottom: 3rem;
}
.top_bottom {
  background: #fff;
}
.top_bottom1 {
  width: 100%;
  height: 0.78rem;
  background: #fff;
  position: relative;
  margin-top: 0.02rem;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
}
.top_bottom1 li {
  width: 50%;
  text-align: left;
  float: left;
  line-height: 0.96rem;
  height: 0.96rem;
  background: #fff;
  margin-top: 0.15rem;
}
.top_bottom1 li:nth-child(1) {
  margin-top: 0;
}
.top_bottom1 li:nth-child(2) {
  line-height: 0.45rem;
  position: relative;
}
.top_bottom1 li:nth-child(2) p:nth-child(2) {
  margin-top: 0.3rem;
}
.top_bottom1 img {
  width: 10%;
  left: 0.4rem;
  margin-top: 0.15rem;
  position: absolute;
}
.top_bottom1 p {
  line-height: 0.2rem;
  font-size: 0.32rem;
  margin-left: -2rem;
}
.top_bottom1 p:nth-child(1) {
  color: #2f2f2f;
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
input[type="checkbox"] + label::before {
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
input[type="checkbox"]:checked + label::before {
  background: red;
  background: url("../../assets/manage/change.png");

  background-size: 100% 100%;
}
.top_bottom1 input {
  display: none;
}
.top_bottom1 span {
  display: inline-block;
  position: absolute;
  line-height: 0.45rem;
  right: 0.5rem;
  top: 0.25rem;
}

/* 分割线 */
.footer {
  height: 1.6rem;
}
.footer p {
  height: 0.6rem;
  line-height: 0.6rem;
  background: #efefef;
}
.footer p input {
  display: none;
}
.footer h2 {
  height: 1rem;
  background: #ff5064;
  color: #fff;
  font-size: 0.32rem;
  line-height: 1rem;
  text-align: center;
  font-weight: normal;
}
</style>
