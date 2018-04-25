<template>
  <div class='Login'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal" @click="closeCurrent">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">登陆</h1>
           <div class="mint-header-button is-right" @click='register' >注册</div>
        </header>
        <div class='content main'>
            <div class='form'>
                   <p><label for="" >账号</label><input type="text" class='value' v-model="PassName" placeholder="请输入账号" id='passname'></p>
                   <p><label for="">密码</label><input type="password"   v-model="PassWord" placeholder="请输入密码" id='password'></p>
                   <button class='btn' @click='btn'>登录</button>
            </div>
            <p class='ForgetPassWord'><span @click='ForgetPassWord'>忘记密码?</span></p>
        </div>

        <!-- <div class='footer'>
            <div class='LodingType'>
                <p></p><h2 class='h2'>其他方式登录</h2><p></p>
            </div>
            <ul>
                <li><img src="../../assets/Login/QQ.png" alt=""></li>
                <li><img src="../../assets/Login/微信.png" alt=""></li>
                <li><img src="../../assets/Login/支付宝.png" alt=""></li>
            </ul>
        </div> -->
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../assets/js/cookie.js";

export default {
  data() {
    return {
      PassName: "",
      PassWord: "",
      msg: "",
      registrationID:""
    };
  },
  methods: {
    created() {
     
    },
    register() {
      this.$router.push({ name: "Register" });
    },
    ForgetPassWord() {
      this.$router.push({ name: "RegisterNew" });
    },
    messageSink(msg) {},
    // 传token
    upperCase() {
      var theinput = document.getElementsByClassName("value")[0].value;
      var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      //(p1.test(theinput));
      if (p1.test(theinput) == false) {
        console.log("请填写正确电话号码!!");
        document.getElementsByClassName("value")[0].value = "";
      } else {
        console.log("succeess");
      }
    },
    closeCurrent() {
      //点击返回
      var val = {
        func: "closeCurrent",
        param: {}
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
    btn() {
      var data = {'username':this.PassName,'password':this.PassWord,'registrationID':this.registrationID}
      this.$axios.post('http://cloud.eyun.online:9080/auth/login/app',data)
      .then(function(response) {
          var accessToken = response.data.access_token;
          setCookie('access_token',accessToken,1000*60);
          var  val={
              "func":"closeCurrent",
              "param":{'finallyIndex':'1','refreshAll':true},
          };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
              window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){  
              window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
      })
      .catch(function(error) {
        alert(error)
          // if(error.response.status === 500){
          //     alert('服务器繁忙，请耐心等待')
          // }
      });
    },
    setDeviceId(registrationID){
      this.registrationID = registrationID
    }
  },

  mounted: function() {
    window.messageSink = this.messageSink;
    window.mobileSetToken = this.mobileSetToken;
    window.setToken = this.setToken;
    window.closeCurrent = this.closeCurrent;
    window.setDeviceId = this.setDeviceId;
    $("input").on("keyup", function() {
      if (
        $("#passname").val().length >= 1 &&
        $("#password").val().length >= 1
      ) {
        $(".btn").addClass("Color");
      } else {
        $(".btn").removeClass("Color");
      }
    });
  }
};
</script>

<style scoped>
.Color {
  background: red !important;
}
.Login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #fff;
}
.active {
  background: red !important;
}
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 0.94rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #e7e7e7;
}
.is-right {
  font-size: 0.28rem;
  color: #676767;
}
.main {
  background: #fff;
}
.form {
  margin-top: 1rem;
  padding: 0 0.4rem;
}
.form p {
  height: 1rem;
  border-bottom: 1px solid #e7e7e7;
  line-height: 1rem;
}
.form p label {
  font-size: 0.32rem;
  color: #2f2f2f;
  margin-right: 0.5rem;
  font-weight: bold;
}
.form p input {
  width: 60%;
  border: 0;
  font-size: 0.32rem;
  color: #2f2f2f;
}
.form button {
  width: 100%;
  margin-top: 0.5rem;
  height: 0.96rem;
  font-size: 0.32rem;
  color: #ffffff;
  border-radius: 0.1rem;
  background: #d8d8d8;
  border: 0;
}
.ForgetPassWord {
  text-align: right;
  font-size: 0.28rem;
  color: #676767;
  padding-right: 0.55rem;
  padding-top: 0.3rem;
}
.footer {
  height: 3.15rem;
  background: #fff;
}
.footer .LodingType {
  display: flex;
  height: 0.4rem;
  align-items: center;
  justify-content: center;
}
.footer .LodingType h2 {
  font-size: 0.24rem;
  margin: 0 0.2rem;
  color: #676767;
}
.footer p {
  width: 30%;
  border-bottom: 2px solid #d8d8d8;
}
.footer ul {
  display: flex;
  margin-top: 1rem;
}
.footer ul li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer ul li img {
  width: 1rem;
  height: 1rem;
}
</style>
