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
          <p class="yzm">确认密码<input type="password" id="affirmPassword" v-model="affirmPassword">
          </p>
          <p class="next">
              <button @click="accomplish" class="btn">完成</button>
          </p>
      </div>
  </div>
</template>
<script>
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
            var iphone = this.$store.getters.iphone
            var authCode = this.$store.getters.authCode
            var recommend = this.$store.getters.recommend
            var val = {
                login : iphone,
                password : this.setPassword,
                verifyCode : authCode,
                inviterPhone : recommend
            }
            var flag = ''
            if(setPassword == affirmPassword){
                if(iphone !== '' &&  setPassword !== '' && authCode !== ''){
                    this.$axios.post('uaa/api/register/app',val)
                    .then(function(response) {
                        alert('注册成功，请去登录');
                        this.$store.commit(types.LOGOUT);
                        var  val={
                            "func":"closeCurrent",
                            "param":{'finallyIndex':'4','refreshAll':true},
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
                        if(error.response.status === 400){
                            alert('您已经注册成功，请登录')
                        }
                    }); 
                }else{
                    alert('请确定是否输入手机号、验证码、密码')
                }
            }else{
                alert('两次密码输入不符')
                document.getElementById("setPassword").value="";
                document.getElementById("affirmPassword").value="";
                location.reload()
            }
        },
        Register(){
            console.log(this.$router)
            this.$router.push({name:"Register"})
        },
    }, 
    mounted:function () {
        $('input').on('keyup',function(){
            if($('#setPassword').val().length>=1 && $('#affirmPassword').val().length!=0){
                $('.btn').addClass('Color')         
            }else{
                $('.btn').removeClass('Color')  
            }
        })
    }
}
</script>
<style scoped>
    .Color{
        background:red!important;
    }
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
