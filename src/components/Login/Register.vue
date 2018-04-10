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
             <h1 class="mint-header-title">{{name}}</h1>
            <div class="mint-header-button is-right"></div>
     </header>
    <div class="register_main">

      <div class="iphone">
        <p>+86 <span>∨</span></p>
        <input type="text" placeholder="请输入手机号" id="mytest" @blur="upperCase()" v-model="phone">
      </div>

      <div class="verificationCode">
        <input type="text" placeholder=" 请输入验证码"  v-model="authCode">
        <div class="verificationCode_btn" @click='gain'>获取验证码</div>  
      </div>

      <div class="next">      
        <input type='button' class="next_btn" @click="next" value='下一步'>
      </div>

    </div>
  </div>
</template>

<script>
export default {

    data(){
      return{
        phone:'',
        authCode:'',
        name:this.$route.params.name
      }
    },
    
    methods:{
      next(){
        this.$router.push({path:'/SetPsd'})
      },
      gain(){
          // $.ajax({
          //    url:'http://192.168.1.105:8132/api/smsCode?phone=18310802847',
          //    method:'get',
          //    dataType:'jsonp',
          //    callback:'cb',
          //    success:function(res){
          //      console.log(res)
          //    },
          //    error(res){
          //      console.log(res)
          //    }
          // }) s 
      },
      upperCase(){
       var theinput=document.getElementById("mytest").value; 
          var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          //(p1.test(theinput)); 
          if(p1.test(theinput)==false) { 
          console.log('请填写正确电话号码!!'); 
          document.getElementById("mytest").value=""; 
          }else {
          console.log("succeess")
          }
      }
    },
    created(){
      this.name = sessionStorage.getItem('name');
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
  flex: 1;
  border: none;
  font-size: .32rem;
}
input::-webkit-input-placeholder{
  font-size: .30rem;
  color: #c4c4c4;
  padding-left: .2rem;
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
.verificationCode_btn{
  width: 2.58rem;
  height: .86rem;
  font-size: .32rem;
  color: #2f2f2f;
  border: 1px solid #f8f8f8;
  text-align: center;
  line-height: .86rem;
  border: 1px solid #e7e7e7;
  border-radius:  0 .08rem .08rem 0;
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
}
</style>
