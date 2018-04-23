<template>
<!-- <transition  leave-active-class="animated slideOutRight"> -->
  <div id='main'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                        <router-link :to="{ path: '/Mine' }" tag='mt-button'>&lt;
                        </router-link> 
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">个人信息</h1>
            <div class="mint-header-button is-right"></div>
        </header>
      <div class="main">
          <ul class="list">
              <li>我的头像<span class="user_img"></span><b>></b></li>
              <router-link :to="{ path: '/NickName' }" tag='li'>昵称 <p class="user_name">{{arr.nickname}}</p><b>></b></router-link>
              <li>手机号<p>{{arr.phone}}</p><b></b></li>
              <li @click="address">我的地址<b>></b></li>
              <router-link :to="{ path: '/ID' }" tag='li'>账号与安全 <b>></b></router-link>            
              <li>我的分享人 <b>></b></li>
              <li  @click="actionSheet">退出登录</li>
          </ul>
      </div>

        <mt-actionsheet  
                    :actions= "data"  
                    v-model="sheetVisible">  
        </mt-actionsheet>
    
  </div>
  <!-- </transition> -->
</template>
<script>
import ID from "../MineList/ID";
import Myaddress from "../MineList/MyAddress";
import MyTeam from "../MineList/MyTeam";
import { Header, Cell, Actionsheet, Popup } from "mint-ui";
import { setCookie, getCookie, delCookie } from "../../assets/js/cookie";
export default {
  data() {
    return {
      arr: "null",
      data: [
        {
          name: "确定",
          method: this.confirms
        }
      ],
      sheetVisible: false
    };
  },
  created() {
    var that = this;
    var accessToken = getCookie("access_token");

    $.ajax({
      // url: "http://cloud.eyun.online:9080/user/api/user-annexes/userInfo/3/",
      url: "http://cloud.eyun.online:9080/user/api/user-annexes/userInfo/3/",
      method: "get",
      callback: "cb",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + accessToken
        //   'Content-Type':"application/json"
      },
      success: function(res) {
        console.log(res.nickname);
        that.arr = res;
      },
      error(res) {
        console.log(res);
      }
    });
    // this.$axios
    //   .get(
    //     "http://cloud.eyun.online:9080/user/api/user-annexes/userInfo/",
    //     {
    //       headers: {
    //         Authorization: "Bearer " + accessToken
    //       }
    //     }
    //   )
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  methods: {
    actionSheet: function() {
      this.sheetVisible = true;
    },
    confirms: function() {
      alert("退出登陆");
      var accessToken = getCookie("access_token");
      $.ajax({
        url: "http://cloud.eyun.online:9080/auth/logout",
        // method:'post',
        type: "POST",
        contentType: "application/json",
        headers: {
          Authorization: "Bearer " + accessToken
          //   'Content-Type':"application/json"
        },
        success: function(res) {
          console.log(res);
          var deltoken = delCookie("access_token");
          var val = {
            
            "func": "closeCurrent",
            "param": {
              "finallyIndex": "1",
              "refreshAll": true
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
        
          console.log(val);
        },
        error(res) {
          console.log(res);
        var deltoken = delCookie("access_token");
          var val = {
            
            "func": "closeCurrent",
            "param": {
              "finallyIndex": "1",
              "refreshAll": true
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
      });
    },
    address: function() {
      this.$router.push({ name: "MyAddress" });
    }
  },
  components: {}
};
</script>
<style scoped>
#Mine {
  width: 100%;
  overflow: hidden;
}
header {
  width: 100%;
  background: #fff;
  color: #000;
  height: 0.94rem;
  font-size: 0.32rem;
}
.list li {
  width: 100%;
  line-height: 100%;
  padding-left: 0.3rem;
  font-size: 0.28rem;
  background: #fff;
  border-top: 1px solid #e7e7e7;
  position: relative;
}
.list li b {
  float: right;
  font-size: 0.4rem;
  display: inline-block;
  position: absolute;
  right: 0.6rem;
}
.list li p {
  float: right;
  padding-right: 20%;
}
.list li:nth-child(1) {
  height: 1.4rem;
  line-height: 1.4rem;
  color: #2f2f2f;
}
.user_img {
  display: inline-block;
  width: 0.98rem;
  height: 0.98rem;
  border-radius: 50%;
  background: #ccc;
  position: absolute;
  padding-right: 0%;
  top: 15%;
  right: 20%;
}
.list li:nth-child(2),
.list li:nth-child(3),
.list li:nth-child(4),
.list li:nth-child(5),
.list li:nth-child(7),
.list li:nth-child(6) {
  height: 0.84rem;
  line-height: 0.84rem;
}
.list li:nth-child(6) {
  margin-top: 0.2rem;
}
.list li:nth-child(7) {
  padding: 0;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.28rem;
  color: #2f2f2f;
}
.mint-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
  background: #f5f5f5;
}
</style>
