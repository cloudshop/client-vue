<template>
  <div class="change_psd">
       <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal" @click='Register'>
                    <mt-button icon="back"></mt-button>
                   </button>
                 </a>
            </div> 
             <h1 class="mint-header-title">设置密码</h1>
           <div class="mint-header-button is-right"></div>
        </header>
      <div class="center content">
          <p>设置密码<input type="password" id="setPassword" v-model="setPassword"></p>
          <p class="yzm">
            确认密码<input type="password" id="affirmPassword" v-model="affirmPassword">
          </p>
          <p class="next">
              <button @click="accomplish">完成</button>
          </p>
      </div>
  </div>
</template>
<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
export default {
    data(){
        return{
            setPassword:'',
            affirmPassword: ''
        }
    },
    methods:{
        accomplish(){
            var setPassword=document.getElementById("setPassword").value; 
            var affirmPassword=document.getElementById("affirmPassword").value; 
            var iphone = getCookie('iphone')
            var authCode = getCookie('authCode')
            var val ={
                    "login": iphone,
                    "password": this.setPassword,
                    "verifyCode": authCode
                }
            if(setPassword == affirmPassword){
var UaaApi = require('uaa_api');

var apiInstance = new UaaApi.AccountresourceApi();

var managedUserVM = new UaaApi.ManagedUserVM(); // ManagedUserVM | managedUserVM
managedUserVM.login = iphone
managedUserVM.password = this.setPassword
managedUserVM.verifyCode = authCode

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    alert(error)
  } else {
    console.log('API called successfully.');
    alert('注册成功')
  }
}
            //     this.$axios.post('http://cloud.eyun.online:9080/uaa/api/register/app',val)
            //     .then(res=>{
            //         console.log(res) 
            //         alert('注册成功')
            //     })
	           // .catch(err=>{ 
	           //     console.log(err)
	           //     alert(err)
	           // })
                // .then(function(response) {
                //   console.log(response)
                //   alert('注册成功')
                // })
                // .catch(function(error) {
                //   console.log(error);
                //   alert(error)
                // });
            }else{
                alert('两次密码输入不符')
                document.getElementById("setPassword").value="";
                document.getElementById("affirmPassword").value="";
            }
        },
        Register(){
            console.log(this.$router)
            this.$router.push({name:"Register"})
        }
    }
}
</script>
<style scoped>
    .change_psd{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    header{
        width:100%;
        background:#fff;
        color:#2f2f2f;
        height:.94rem;
        font-size:.32rem;
        border-bottom:1px solid #e7e7e7;
    }
    .center{
        width: 100%;
        background: #fff;
        font-size: .32rem;
    }
    .center input{
        width: 3rem;
        margin-left: .3rem;
        border: none;
    }
    .center p:first-child{
        width: 80%;
        margin: auto;
        padding-top: 1rem;
        font-size: .32rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid #ccc;
    }
    .yzm{
        width: 80%;
        margin: auto;
        padding-top: .5rem;
        font-size: .32rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid #ccc;
    }
    
    
    .yzm button{
       height: .95rem; 
       flex: 1;
       /* border-radius: .2rem; */
       border: none;
       border: 1px solid #e7e7e7;
       background: #fff;
       border-left: none;
       border-top-right-radius: .2rem;
       border-bottom-right-radius: .2rem;
       border-left: 1px solid #e7e7e7;
       margin-left: -.3rem;
    }
    .next{
        width: 100%;
        text-align: center;
        padding-top: .5rem;
    }
    .next button{
        width: 80%;
        height: .96rem;
        border-radius: .1rem;
        border: none;
        background: #d8d8d8;
        color: #fff;
    }
</style>
