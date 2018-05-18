<template>
  <div id='main'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                        <mt-button @click="back">&lt;</mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">个人信息</h1>
            <div class="mint-header-button is-right"></div>
        </header>
      <div class="main">
          <ul class="list">
              <li><router-link :to="{ name: 'Myhead',params:{id} }">我的头像<span class="user_img"><img :src="arr.avatar"/></span><b>></b></router-link></li>
              <router-link :to="{ name: 'NickName',params:{nickname:arr.nickname} }" tag='li'>昵称<p class="user_name">{{arr.nickname}}</p><b>></b></router-link>
              <li>手机号<p>{{arr.phone}}</p><b></b></li>
              <li @click="address">我的地址<b>></b></li>
              <router-link :to="{ path: '/ID' }" tag='li'>账号与安全<b>></b></router-link> 
              <router-link :to="{ path: '/Approve' }" tag='li' v-show="bo==1?true:false">实名认证<b>></b></router-link> 
              <li v-show="bo==2?true:false">实名认证<b>{{statusString}}</b></li>    
              <li v-show="bo==3?true:false">实名认证<b>{{statusString}}</b></li>           
              <li>我的分享人 <b>{{arr.invPhone}}</b></li>
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
import * as types from '../../store/types'


export default {
  data() {
    return {
      arr: "null",
      data: [
        {
          name: "确定",
          method: this.confirms,
          nickname:"",
          statusString:"",
          bo:"",
          id:""
        }
      ],
      sheetVisible: false
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("user/api/user-annexes/userInfo")
      .then(function(res) {
          that.arr = res.data;
          that.id = that.arr.id;
          console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
      this.$axios
	      .get("user/api/my-auth")
	      .then(function(res) {
	          console.log(res.data);
	          if(res.data == ""){
	          	that.bo = 1;
	          }else if(res.data.statusString == "审核中"){
	          	that.bo = 2;
	          	that.statusString = "审核中";
	          	console.log(that.statusString);
	          }else if(res.data.statusString == "审核通过"){
	          	that.bo = 3;
	          	that.statusString = "已认证";
	          }else if(res.data.statusString == "未审核通过"){
	          	that.bo = 1;
	          }
	      })
	      .catch(function(error) {
	        console.log(error);
	      });
  },
  methods: {
    actionSheet: function() {
      this.sheetVisible = true;
    },
    confirms: function() {
        this.$axios({
            method: 'post',
            url: 'auth/logout/app'
        });
         this.$store.commit(types.LOGOUT);
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
    },
    back(){   
         var  val={
                "func":"closeCurrent",
                  "param":{
                    
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
.list li:nth-child(7) b{
  font-size: 0.27rem;
  font-weight: 200;
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
.user_img img{
	width: 0.98rem;
  height: 0.98rem;
  border-radius: 50%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
}
.list li:nth-child(2),
.list li:nth-child(3),
.list li:nth-child(4),
.list li:nth-child(5),
.list li:nth-child(7),
.list li:nth-child(8),
.list li:nth-child(9),
.list li:nth-child(10),
.list li:nth-child(6) {
  height: 0.84rem;
  line-height: 0.84rem;
}
.list li:nth-child(8) {
  margin-top: 0.2rem;
}
.list li:nth-child(9) b{
  font-size: 0.28rem;
  color: #2f2f2f;
  font-weight: 400;
}
.list li:nth-child(10){
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
a{
  color: #000;
}
.main .list .r{
	font-weight: 100;
	font-size: 0.25rem;
}
</style>
