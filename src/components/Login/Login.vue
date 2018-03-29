<template>
  <div class='Login'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">登陆</h1>
           <div class="mint-header-button is-right" @click='register'>注册</div>
        </header>
        <div class='content main'>
            <div class='form'>
                   <p><label for="">账号</label><input type="text" @keydown='down' v-model="PassName" placeholder="请输入账号"></p>
                   <p><label for="">密码</label><input type="text"  @keydown='down' v-model="PassWord" placeholder="请输入密码"></p>
                   <button class='btn'>登录</button>
            </div>
            <p class='ForgetPassWord' @click='ForgetPassWord'>忘记密码?</p>
        </div>

        <div class='footer'>
            <div class='LodingType'>
                <p></p><h2>其他方式登录</h2><p></p>
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
export default {
    data(){
        return{
            PassName:'',
            PassWord:''
        }
    },
    methods:{
        register(){
            this.$router.push({name:"Register"})
            sessionStorage.setItem('name',"注册")
        },
        ForgetPassWord(){
            this.$router.push({name:"Register",params:{name:'重新设置密码'}})      
        },
        down(){
            if(this.PassName ==""   ){
                $('.btn').removeClass('active')
            }else{
                 $('.btn').addClass('active')
            }
        }
    },
    created(){
       
        // this.$http.get(`http://192.168.1.105:8103/sms/initSmsCode?phone=18310802847`).then(res => res.data);
        // this.$http.get('http://192.168.1.105:8103/sms/initSmsCode?phone=18310802847')
        //         .then(function (response) {
        //         console.log(response);
        //         })
        //         .catch(function (error) {
        //         console.log(error);
        //     });

        // $.ajax({
        //     url:'http://192.168.1.105:8103/sms/initSmsCode?phone=18310802847',
        //     method:'get',
        //      dataType:'jsonp',
        //     success:function(res){
        //         console.log(res)
        //     }
        // })
    }
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
