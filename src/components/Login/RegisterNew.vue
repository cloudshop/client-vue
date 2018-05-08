<template>
  <div class="registers">
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                  <mt-button icon="back" @click="callBack"></mt-button>
              </a>
            </div> 
             <h1 class="mint-header-title">重置手机密码</h1>
            <div class="mint-header-button is-right"></div>
     </header>
    <div class="register_main" v-show="flag">
      <div class="iphone">
        <p>+86 <span>∨</span></p>
        <input type="text" placeholder="请输入手机号" id="mytest" class="iphones"  v-model="phone" @blur="upperCase">
        <div class="iphones"><span class="one">|</span><button class="iphone_btn"  id='iphone_btn' @click='gain(".iphone_btn")'>获取验证码</button></div>
      </div>
      <div class="iphone">
        <p class="authCode"><img src="../../assets/Login/验证码-(1).png" alt=""></p>
        <input type="text" id="yzms" placeholder="请输入验证码"  v-model="authCode">
      </div>
      <div class="next">      
        <input type='button' class="next_btn" disabled @click="nextPwd" value='下一步' >
      </div>
    </div>
    <div class="center content" v-show="flag1">
        <p>设置密码<input type="password" class="input" id="setPassword" v-model="setPassword" ></p>
        <p class="yzm">确认密码<input type="password" class="input" id="affirmPassword" v-model="affirmPassword"></p>
          <div class="nexts">      
            <input type='button' class="nexts_btn" disabled @click="next" value='下一步' >
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
        setPassword:'',
        affirmPassword: '',
        flag: true,
        flag1: false
      }
    },
    methods:{
        callBack(){
          if(this.flag==false){
            this.flag=true;
            this.flag1=false;
          }else{
            this.$router.go(-1)
          }
        },
       upperCase() {
        var theinput = document.getElementsByClassName("iphones")[0].value;
        var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        // var p2 = /^[\^\\%@&\*~'\?\/\<\>\|\"`]+$/;
        if (p1.test(theinput) == false) {
          alert("请填写正确电话号码!!");
          document.getElementsByClassName("iphones")[0].value = "";
        } else {
          this.iphoneYN = true;
        }
      },
      nextPwd:function(){
        this.flag=false;
        this.flag1=true;
      },
      next(){
         var setPassword=document.getElementById("setPassword").value; 
         var affirmPassword=document.getElementById("affirmPassword").value; 
         var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
          var that = this;
          if(setPassword !== affirmPassword) { 
            alert('两次密码输入不符')
            document.getElementById("setPassword").value="";
            document.getElementById("affirmPassword").value="";
          }else {
            var data = {'login':this.phone,'password':this.setPassword,'verifyCode':this.authCode}
            this.$axios.post('api/uaa/api/account/update-password',data)
            .then(function(response) {
              if(response.status == 200){
                alert('修改成功')
              }
            })
            .catch(function(error) {
              if(error.response.status === 500){
                  alert('服务器繁忙，请耐心等待')
              }
            });
        }
      },
      gain(obj){
          var theinput=document.getElementById("mytest").value; 
          this.$store.commit(types.USERPHONE, this.theinput)
          var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          if(p1.test(theinput)==false) { 
            alert('请填写正确手机号！'); 
            document.getElementById("mytest").value="";
          }else {
            this.$axios.get('api/verify/api/verify/smscode/login/'+this.phone)
            .then(function(response) {
              var countdown=60;
              settime(obj);
              function settime(obj) {
                  if (countdown == 0) {
                      $(obj).attr("disabled",false);
                      $(obj).text("获取验证码");
                      countdown = 60;
                      return;
                  } else {
                      $(obj).attr("disabled",true);
                      $(obj).text(countdown + " s 重新发送");
                      countdown--;
                  }
                    setTimeout(function() {
                      settime(obj) 
                    }
                  ,1000)
                }
            })
            .catch(function(error) {
              if(error.response.status === 500){
                  alert('服务器繁忙，请耐心等待')
              }
            });
          }
      }
    },
    created(){

    },
    mounted:function () {
        $('input').on('keyup',function(){
            if($('#mytest').val().length>=1 && $('#yzms').val().length>=1){
                $('.next_btn').addClass('Color')  
                $('.next_btn').removeAttr("disabled");       
            }else{
                $('.next_btn').removeClass('Color')  
                $('.next_btn').attr('disabled',"true");
                
            }
        })
        $('input').on('keyup',function(){
            if($('#setPassword').val().length>=1 && $('#affirmPassword').val().length>=1){
                $('.nexts_btn').addClass('Color')         
            }else{
                $('.nexts_btn').removeClass('Color')  
            }
        })
    }
}
</script>

<style scoped>
    .Color {
      background: red !important;
    }
   .center{
        width: 98%;
        background: #fff;
        font-size: .32rem;
        margin-left: 2%;
    }
    .center .input{
        width: 3rem;
        margin-left: .3rem;
        border: none;
    }
    .center p:first-child{
        width: 98%;
        margin: auto;
        height: .95rem;
        line-height: .95rem;
        font-size: .32rem;
        border-bottom: 1px solid #e7e7e7;
    }
    .yzm{
        width: 98%;
        margin: auto;
        height: .95rem;
        font-size: .32rem;
        line-height: .95rem;
        border-bottom: 1px solid #e7e7e7;
    }
    .yzm button{
       height: .95rem; 
       flex: 1;
       border: none;
       border: 1px solid #e7e7e7;
       background: #fff;
       border-left: none;
       border-top-right-radius: .2rem;
       border-bottom-right-radius: .2rem;
       border-left: 1px solid #e7e7e7;
       margin-left: -.3rem;
    }
    #iphone_btn{
      height: 100%;
      display: flex;
      font-size: .26rem;
      color: #2f2f2f;
      border: none;
      background: #fff;
    }
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
}
.nexts{
  width: 98%;
  height: .96rem;
  margin-top: .5rem;
}
.nexts_btn{
  width: 98%;
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
