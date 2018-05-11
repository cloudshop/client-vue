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
             <h1 class="mint-header-title">注册</h1>
            <div class="mint-header-button is-right"></div>
     </header>
    <div class="register_main">
      <div class="iphone">
        <p>+86 <span>∨</span></p>
        <input type="text" placeholder="请输入手机号" id="mytest"  v-model="phone"  @blur="upperCase">
        <div class="iphones"><span class="one">|</span><button class="iphone_btn"  id='iphone_btn' @click='gain(".iphone_btn")'>获取验证码</button></div>
      </div>

      <div class="iphone">
        <p class="authCodes"><img src="../../assets/Login/验证码-(1).png" alt=""></p>
        <input type="text" placeholder="请输入验证码"  id='authCode' v-model="authCode">
      </div>

      <div class="iphoneRecommend">
        <p>+86 <span>∨</span></p>  
        <input type="text"  id="recommend" placeholder="请输入您推荐人的手机号"  v-model="recommend">
      </div>
        <div class="apps">
            <div class="inputs">
            <input type="button" id="tonglian" class="checkboxs"  value="通联" name="sex"  v-model="yesIdo" @click="checkChange">
            <!-- <label for="tonglian"></label> -->
            </div>
            <p class="yes">我已经同意<router-link to="/Agreement" class="xy">《贡融积分会员注册协议》</router-link></p>
        </div>
      <div class="next">      
        <input type='button' class="next_btn" @click="next" value='下一步' :disabled="!phone || !authCode">
      </div>
      
    </div>
  </div>
</template>

<script>
import * as types from '../../store/types'

export default {
    data(){
      return{
        phone:'',
        authCode:'',
        recommend: '',
        yesIdo:false
      }
    },
    methods:{
      checkChange(){
        this.yesIdo = !this.yesIdo;
        if(this.yesIdo == true){
          $('#tonglian').addClass('Color')
        }else{
          $('#tonglian').removeClass('Color')
        }
      },
      upperCase() {
        var theinput = document.getElementById("mytest").value;
        console.log(theinput)
        var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        var p2 = /^[\^\\%@&\*~'\?\/\<\>\|\"`]+$/;
        //(p1.test(theinput));
        if (p1.test(theinput) == false) {
          alert("请填写正确电话号码!!");
          document.getElementById("mytest").value = "";
        } else {
          console.log("succeess");
          this.iphoneYN = true;
        }
      },
      next(){
        var recommend=document.getElementById("recommend").value; 
        var authCode=document.getElementById("authCode").value; 
        var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        this.$store.commit(types.VERIFY_CODE,authCode) 
        var that = this;
        if(recommend != ''){
          if(p1.test(recommend) == true) {
            if(this.yesIdo == true){
              this.$axios.get('verify/api/verify/smsvalidate?'+'phone='+this.phone+'&smsCode='+this.authCode)
              .then(function(res) {
                  if(res.message == 'success' || res.data.message == 'success'){
                    that.$router.push({path:'/SetPsd'})
                  }else{
                    alert(res.content)
                  }
              })
              .catch(function(error) {
                   alert(error.response.data.title)
              })
              }else{
                alert('您是否同意贡融积分会员注册协议')
              }
          }
          else{
            alert('推荐人手机填写错误')
          }
        }
        else{
          if(this.yesIdo == true){
            this.$axios.get('verify/api/verify/smsvalidate?'+'phone='+this.phone+'&smsCode='+this.authCode)
            .then(function(res) {
                if(res.message == 'success' || res.data.message == 'success'){
                  that.$router.push({path:'/SetPsd'})
                }else{
                  alert(res.content)
                }
            })
            .catch(function(error) {
                 alert(error.response.data.title)
            })
          }else{
              alert('您是否同意贡融积分会员注册协议')
          }
        }
      },
      gain(obj){
        var theinput=document.getElementById("mytest").value; 
        this.$store.commit(types.USERPHONE,theinput)
        var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
        if(p1.test(theinput) != false) { 
          this.$axios.get('verify/api/verify/smscode?phone='+this.phone)
          .then(function(res) {
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
              alert(error.response.data.title)
          })
        }else {
          alert('请填写正确手机号！'); 
          document.getElementById("mytest").value="";
        }
      }
    },
    mounted:function () {
        $('input').on('keyup',function(){
             if($('#mytest').val().length>=1 && $('#authCode').val().length !== 0){
                $('.next_btn').addClass('Color')         
             }else{
                $('.next_btn').removeClass('Color')  
             }
        })
    },
    created(){

    }
}
</script>

<style scoped>
.checkboxs{
  border-radius: 60%;
  height: 50%;
  border:none;
  margin-top: .05rem;
  font-size: 0;
  background: #ccc
}
.Color{
    background:red!important;
}
.registers{
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff !important;
}
  .apps{
      width: 100%;
      height: .40rem;
      display: flex;
      margin-top: .2rem;
  }
  .inputs {
      width: 0.32rem;
      height: 0.32rem;
      border-radius: 50%;
      left: .2rem;
      position: relative;
  }
  .inputs .checkboxs {
      width: 65%;
      height: 65%;
      position: absolute;
  }
  .apps .yes{
      height: .40rem;
      text-indent: .21rem;
      font-size: .28rem;
  }
  /* input[type="checkbox"] + label::before {
      box-sizing: border-box;
      content: " ";
      display: inline-block;
      vertical-align: middle;
      width: 1.8em; 
      height: 1.8em;
      background: url("../../assets/manage/change_no.png");
      background-size: 100% 100%;
      border-radius: 50%;
      }
  input[type="checkbox"]:checked + label::before {
      background: url("../../assets/manage/change.png");
      background-size: 100% 100%;
  }*/
  
  .xy{
      color: #ff0103
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
button{
  border: none;
  background: #fff;
}
.next_btn .iphone_btn{
  height: 100%;
  display: flex;
  font-size: .24rem;
  color: #2f2f2f;
  border: none;
}
#iphone_btn{
  height: 100%;
  display: flex;
  font-size: .24rem;
  color: #2f2f2f;
  border: none;
}
.iphone .authCodes img{
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
  margin-top: .2rem;
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

