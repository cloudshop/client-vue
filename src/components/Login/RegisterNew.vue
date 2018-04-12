<<<<<<< HEAD
<template>
  <div class="registers">
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                  <router-link :to="{ path: '/Login' }" class="mint-button mint-button--default mint-button--normal" tag='button'>
                   <mt-button icon="back"></mt-button>
                  </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">重置手机密码</h1>
            <div class="mint-header-button is-right"></div>
     </header>
    <div class="register_main">

      <div class="iphone">
        <p>+86 <span>∨</span></p>
        <input type="text" placeholder="请输入手机号" id="mytest"  v-model="phone">
        <div class="iphones"><span class="one">|</span><span class="iphone_btn" @click='gain'>获取验证码</span></div>
      </div>

      <div class="iphone">
        <p class="authCode"><img src="../../assets/Login/验证码-(1).png" alt=""></p>
        <input type="text" placeholder="请输入验证码"  v-model="authCode">
      </div>

      <div class="next">      
        <input type='button' class="next_btn" @click="next" value='下一步' >
      </div>

    </div>
  </div>
</template>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
export default {
    data(){
      return{
        phone:'',
        authCode:'',
        recommend: '',
      }
    },
    methods:{
      next(){
          // var recommends=document.getElementById("recommends").value; 
          // var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
          // setCookie('authCode',this.authCode,1000*60)
          // //(p1.test(theinput)); 
          // var that = this;
          // if(p1.test(recommends) != "") { 
          //   if(p1.test(recommends)==false) { 
          //     alert('请填写推荐人正确手机号！'); 
          //     document.getElementById("mytest").value="";
          //   }
          // }else {
          //   console.log(0)
          //   $.ajax({
          //     url:'http://cloud.eyun.online:9080/verify/api/verify/smsvalidate?'+'phone='+this.phone+'&smsCode='+this.authCode,
          //     method:'get',
          //     callback:'cb',
          //     success:function(res){
          //       if(res.message == 'success'){
          //         that.$router.push({path:'/SetPsd'})
          //       }else{
          //         alert('验证码填写错误')
          //       }
          //     },  
          //     error(res){
          //       console.log(res)
          //     }
          //   })
          // }
          // this.$router.push({path:'/SetPsd'})
      },
      gain(){
          // var theinput=document.getElementById("mytest").value; 
          // setCookie('iphone',this.theinput,1000*60)
          // var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          // if(p1.test(theinput)==false) { 
          //   alert('请填写正确手机号！'); 
          //   document.getElementById("mytest").value="";
          // }else {
          //   $.ajax({
          //     url:'http://cloud.eyun.online:9080/verify/api/verify/smscode?phone='+this.phone,
          //     method:'get',
          //     callback:'cb',
          //     success:function(res){
          //       console.log(res)
          //     },  
          //     error(res){
          //       console.log(res)
          //     }
          //   })
          // }
      }
    },
    created(){

    }
}
</script>

<style scoped>
.registers{
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff !important;
}
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    font-size:.32rem;
    border-bottom:1px solid #e7e7e7;
}
.register_header p:nth-child(2){
  font-size: .32rem;
}
.register_main{
  width: 92%;
  margin-left: 4%;
  height: auto;
}
.iphone{
  width: 100%;
  height: 1rem;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
}
.iphone p{
  display: flex;
  width: 20%;
  height: 100%;
  font-size: .32rem;
  color:#2f2f2f;
  justify-content: center;
  align-items: center;
}
.iphone p span{
  font-size: .22rem;
  margin-left: .15rem;
}
.iphone input{
  width: 45%;
  border: none;
  font-size: .32rem;
}
.iphone div{
  width: 35%;
  height: 100%;
  font-size: .32rem;
  display: flex;
  align-items: center;
}
.iphone div .one{
  width: .6rem;
  height: 100%;
  font-size: .32rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.next_btn .iphone_btn{
  width: 30%;
  height: 100%;
  display: flex;
  font-size: .32rem;
  color: #2f2f2f;
}
.iphone .authCode img{
  width: 53%;
  margin-right: .2rem;
}
input::-webkit-input-placeholder{
  font-size: .30rem;
  color: #c4c4c4;
  padding-left: .2rem;
}
.iphoneRecommend{
  width: 100%;
  height: 1rem;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
}
.iphoneRecommend p{
  display: flex;
  width: 20%;
  height: 100%;
  font-size: .32rem;
  color:#2f2f2f;
  justify-content: center;
  align-items: center;
}
.iphoneRecommend p span{
  font-size: .22rem;
  margin-left: .15rem;
}
.iphoneRecommend input{
  width: 60%;
  border: none;
  font-size: .32rem;
}

.verificationCode{
  width: 100%;
  height: .88rem;
  display: flex;
  margin: .3rem 0;
}
.verificationCode input{
  flex: 1;
  height: .81rem;
  border: none;
  border: 1px solid #e7e7e7;
  border-right: none;
  border-radius: .08rem 0 0 .08rem;
  font-size: .32rem;
  padding-left:.2rem;
}
.next{
  width: 100%;
  height: .96rem;
  margin-top: .5rem;
}
.next_btn{
  width: 100%;
  height: .96rem;
  color:#fff;
  font-size: .32rem;
  text-align: center;
  line-height: .96rem;
  display: inline-block;
  background: #c4c4c4;
  border-radius: .08rem;
  border:0;
  margin-top: 1rem;
}
</style>
=======
<template>
  <div class="registers">
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                  <router-link :to="{ path: '/Login' }" class="mint-button mint-button--default mint-button--normal" tag='button'>
                   <mt-button icon="back"></mt-button>
                  </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">重置手机密码</h1>
            <div class="mint-header-button is-right"></div>
     </header>
    <div class="register_main">

      <div class="iphone">
        <p>+86 <span>∨</span></p>
        <input type="text" placeholder="请输入手机号" id="mytest"  v-model="phone">
        <div class="iphones"><span class="one">|</span><span class="iphone_btn" @click='gain'>获取验证码</span></div>
      </div>

      <div class="iphone">
        <p class="authCode"><img src="../../assets/Login/验证码-(1).png" alt=""></p>
        <input type="text" placeholder="请输入验证码"  v-model="authCode">
      </div>

      <div class="next">      
        <input type='button' class="next_btn" @click="next" value='下一步' >
      </div>

    </div>
  </div>
</template>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
export default {
    data(){
      return{
        phone:'',
        authCode:'',
        recommend: '',
      }
    },
    methods:{
      next(){
          // var recommends=document.getElementById("recommends").value; 
          // var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
          // setCookie('authCode',this.authCode,1000*60)
          // //(p1.test(theinput)); 
          // var that = this;
          // if(p1.test(recommends) != "") { 
          //   if(p1.test(recommends)==false) { 
          //     alert('请填写推荐人正确手机号！'); 
          //     document.getElementById("mytest").value="";
          //   }
          // }else {
          //   console.log(0)
          //   $.ajax({
          //     url:'http://cloud.eyun.online:9080/verify/api/verify/smsvalidate?'+'phone='+this.phone+'&smsCode='+this.authCode,
          //     method:'get',
          //     callback:'cb',
          //     success:function(res){
          //       if(res.message == 'success'){
          //         that.$router.push({path:'/SetPsd'})
          //       }else{
          //         alert('验证码填写错误')
          //       }
          //     },  
          //     error(res){
          //       console.log(res)
          //     }
          //   })
          // }
          // this.$router.push({path:'/SetPsd'})
      },
      gain(){
          // var theinput=document.getElementById("mytest").value; 
          // setCookie('iphone',this.theinput,1000*60)
          // var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          // if(p1.test(theinput)==false) { 
          //   alert('请填写正确手机号！'); 
          //   document.getElementById("mytest").value="";
          // }else {
          //   $.ajax({
          //     url:'http://cloud.eyun.online:9080/verify/api/verify/smscode?phone='+this.phone,
          //     method:'get',
          //     callback:'cb',
          //     success:function(res){
          //       console.log(res)
          //     },  
          //     error(res){
          //       console.log(res)
          //     }
          //   })
          // }
      }
    },
    created(){

    }
}
</script>

<style scoped>
.registers{
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff !important;
}
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    font-size:.32rem;
    border-bottom:1px solid #e7e7e7;
}
.register_header p:nth-child(2){
  font-size: .32rem;
}
.register_main{
  width: 92%;
  margin-left: 4%;
  height: auto;
}
.iphone{
  width: 100%;
  height: 1rem;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
}
.iphone p{
  display: flex;
  width: 20%;
  height: 100%;
  font-size: .32rem;
  color:#2f2f2f;
  justify-content: center;
  align-items: center;
}
.iphone p span{
  font-size: .22rem;
  margin-left: .15rem;
}
.iphone input{
  width: 45%;
  border: none;
  font-size: .32rem;
}
.iphone div{
  width: 35%;
  height: 100%;
  font-size: .32rem;
  display: flex;
  align-items: center;
}
.iphone div .one{
  width: .6rem;
  height: 100%;
  font-size: .32rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.next_btn .iphone_btn{
  width: 30%;
  height: 100%;
  display: flex;
  font-size: .32rem;
  color: #2f2f2f;
}
.iphone .authCode img{
  width: 53%;
  margin-right: .2rem;
}
input::-webkit-input-placeholder{
  font-size: .30rem;
  color: #c4c4c4;
  padding-left: .2rem;
}
.iphoneRecommend{
  width: 100%;
  height: 1rem;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
}
.iphoneRecommend p{
  display: flex;
  width: 20%;
  height: 100%;
  font-size: .32rem;
  color:#2f2f2f;
  justify-content: center;
  align-items: center;
}
.iphoneRecommend p span{
  font-size: .22rem;
  margin-left: .15rem;
}
.iphoneRecommend input{
  width: 60%;
  border: none;
  font-size: .32rem;
}

.verificationCode{
  width: 100%;
  height: .88rem;
  display: flex;
  margin: .3rem 0;
}
.verificationCode input{
  flex: 1;
  height: .81rem;
  border: none;
  border: 1px solid #e7e7e7;
  border-right: none;
  border-radius: .08rem 0 0 .08rem;
  font-size: .32rem;
  padding-left:.2rem;
}
.next{
  width: 100%;
  height: .96rem;
  margin-top: .5rem;
}
.next_btn{
  width: 100%;
  height: .96rem;
  color:#fff;
  font-size: .32rem;
  text-align: center;
  line-height: .96rem;
  display: inline-block;
  background: #c4c4c4;
  border-radius: .08rem;
  border:0;
  margin-top: 1rem;
}
</style>
>>>>>>> c390c27d65e015749cd1f458b0daa20b065c73c1
