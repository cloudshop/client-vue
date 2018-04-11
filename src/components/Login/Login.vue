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
                   <p><label for="" id='zh'>账号</label><input type="text" class='value val' v-model="PassName" placeholder="请输入账号" ></p>
                   <p><label for="">密码</label><input type="password"  class='val' v-model="PassWord" placeholder="请输入密码"></p>
                   <button class='btn' @click='btn'>登录</button>
            </div>
            <p class='ForgetPassWord'><span @click='ForgetPassWord'>忘记密码?</span></p>
            {{msg}}
        </div>

        <div class='footer'>
            <div class='LodingType'>
                <p></p><h2 class='h2'>其他方式登录</h2><p></p>
            </div>
            <ul>
                <li><img src="../../assets/Login/QQ.png" alt=""></li>
                <li><img src="../../assets/Login/微信.png" alt=""></li>
                <li><img src="../../assets/Login/支付宝.png" alt=""></li>
            </ul>
        </div>
  </div>
</template>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'

export default {
    data(){
        return{
            PassName:'',
            PassWord:'',
            msg:'',
        }
    },
    methods:{
        mobileSetToken(token,ss){
          $('.h2').text(token+ss);
          setCookie('token',token,1000*60);
        },
        denglu(){
            // var UaaJavascript = require('uaa-javascript');
            // console.log(api);
            // var apiClient = new UaaJavascript.ApiClient(); 
            // var api = new UaaJavascript.AuthApi(apiClient);
            // api.login('admin', 'admin');
            var UaaJavascript = require('uaa-javascript');
            var apiInstance = new UaaJavascript.AccountResourceApi();
            var managedUserVM = new UaaJavascript.ManagedUserVM(); // ManagedUserVM | managedUserVM
            var callback = function(error, data, response) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('API called successfully.');
                }
            };
            apiInstance.registerAccountUsingPOST(managedUserVM, function(error,data,response){
                console.log(error)
                console.log(data)
                console.log(response)
            });
        },
        register(){
            this.$router.push({name:"Register"})
        },
        ForgetPassWord(){
            this.$router.push({name:"RegisterNew"})
        },
        messageSink(msg){
            
        },
        // 传token
        // setToken(token){
        //     var tokenLength = token.length;
        //     if(token != null && tokenLength>10){
        //         $('.h2').text('yes');
        //         // setCookie('access_token',token,1000*60)
        //     }else{
        //         $('.h2').text('no');
        //     }
        // },
        upperCase(){
          var theinput=document.getElementsByClassName("value")[0].value; 
          var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          //(p1.test(theinput)); 
          if(p1.test(theinput)==false) { 
            console.log('请填写正确电话号码!!'); 
            document.getElementsByClassName("value")[0].value=""; 
          }else {
            console.log("succeess")
          }
        },
        // requestToken(){ // 再次去请求token
        //     console.log('requestToken')
        //     var  val={
        //         "func":"requestToken",
        //         "param":{
        //             "callBack": "setToken"
        //         },
        //     };
        //     var u = navigator.userAgent;
        //     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
        //     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        //     if(isiOS){
        //         window.webkit.messageHandlers.GongrongAppModel.postMessage(val)   
        //     }else{               
        //          window.androidObject.JSCallAndroid(val);
        //     }
        // },
        closeCurrent(){
                    var  val={
                        "func":"closeCurrent",
                        "param":{},
                    };
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                    if(isiOS){
                        this.$router.push('/')
                        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);   
                    }else if(isAndroid){   
                        this.$router.push('/')            
                       window.androidObject.JSCallAndroid(val);
                   }
               
        },
        btn(){
            // IOS 方法 传token
                let data = {'username':this.PassName,'password':this.PassWord}
                this.$axios.post('/auth',data)
                .then((res)=>{
                var accessToken = res.data.access_token;
                
                var refreshToken = res.data.refresh_token;
                setCookie('access_token',accessToken,1000*60)

                // var  val={
                //     "func":"setAccessToken",
                //     "param":{
                //         "accessToken":accessToken
                //     },
                // };
                // var u = navigator.userAgent;
                // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                // if(isiOS){
                //     window.webkit.messageHandlers.GongrongAppModel.postMessage(val)   
                // }else if(isAndroid){               
                //     window.androidObject.JSCallAndroid(val);
                // }else{
                //     this.$router.push('/Login')
                // }

                var accessToken = getCookie('access_token');
                if(accessToken !== ''){
                    var  val={
                        "func":"closeCurrent",
                        "param":{},
                    };
                    var u = navigator.userAgent;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                    if(isiOS){
                        this.$router.push('/')
                        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);   
                    }else if(isAndroid){   
                        this.$router.push('/')            
                        window.androidObject.JSCallAndroid(val);
                    }
                }else{
                    this.$router.push('/Login')
                }
                
                // 再次请求
                // this.$axios.get("/order")
                // .then((res)=>{
                //     console.log(res)
                // })
                
                // if(res.data == -1){
                // 	this.tishi = "该用户不存在"
                // 	this.showTishi = true
                // }else if(res.data == 0){
                // 	this.tishi = "密码输入错误"
                // 	this.showTishi = true
                // }else if(res.data == 'admin'){
                // 	this.$router.push('/main')
                // }else{
                // 	this.tishi = "登录成功"
                // 	this.showTishi = true
                //  setCookie('access_token',datas,1000*60)
                // 	setTimeout(function(){
                // 		this.$router.push({path:'home',query:{id:1}})
                // 	}.bind(this),1000)
                // }
            })
        }
    },
    created(){
        // 获取
        // var getCookieDid = getCookie('access_token');
        // if(getCookieDid == ""){
        //     this.$nextTick(() => { 
        //         $('.h2').text('Nocookie');
        //     })
        //     this.requestToken()
        // }else{
        //     this.$nextTick(() => { 
        //         $('.h2').text('有cookie');
        //     })
        // }

        // var UaaJavascript = require('uaa-javascript');
        // console.log(api);
        // var apiClient = new UaaJavascript.ApiClient();
        // var api = new UaaJavascript.AuthApi(apiClient);
        // api.login('admin', 'admin');
    },
    mounted:function () {
        window.messageSink = this.messageSink;
        window.mobileSetToken = this.mobileSetToken;
        window.setToken = this.setToken;
        window.closeCurrent = this.closeCurrent;
      
        // 获取token
        // let uname = getCookie('access_token')
        // console.log(uname)
    },
    
}
</script>

<style scoped>
.Login{
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background:#fff;
}
.active{
    background:red!important    ;
}
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    font-size:.32rem;
    border-bottom:1px solid #e7e7e7;
}
.is-right{
    font-size:.28rem;
    color:#676767;
}
.main{
    background:#fff;
}
.form{
    margin-top:1rem;
    padding:0 .4rem;
}
.form p{
    height:1rem;
    border-bottom:1px solid #e7e7e7;
    line-height: 1rem;
}
.form p label{
    font-size:.32rem;
    color:#2f2f2f;
    margin-right:.5rem;
    font-weight:bold;
}
.form p input{
    width:60%;
    border:0;
    font-size:.32rem;
    color:#2f2f2f;
}
.form button{
    width:100%;
    margin-top:.5rem;
    height:.96rem;
    font-size:.32rem;
    color:#ffffff;
    border-radius:.1rem;
    background:#d8d8d8;
    border:0;
}
.ForgetPassWord{
    text-align:right;
    font-size:.28rem;
    color:#676767;
    padding-right:.55rem;
    padding-top:.3rem;
}
.footer{
    height:3.15rem;
    background:#fff;
}
.footer .LodingType{
    display:flex;
    height:.4rem;
    align-items:center;
    justify-content:center;
}
.footer .LodingType h2{
    font-size:.24rem;
    margin:0 .2rem;
    color:#676767;
}
.footer p{
    width:30%;
    border-bottom:2px solid #d8d8d8;
}
.footer ul{
    display:flex;
    margin-top:1rem;
}
.footer ul li{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
}
.footer ul li img{
    width:1rem;
    height:1rem;
}
</style>
