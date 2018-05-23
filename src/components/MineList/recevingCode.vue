<template>
       <div class="receving">
            <div class="receving_header">
                <p>&lt;</p >
                <p>收款码</p >
                <p> </p>
            </div>
           <div class="receving_bodys">
              <div class='body_top'>
                <span class="spans"><img src="../../assets/Mine/reving1.png" alt=""></span>
                <p>二维码收款</p>
              </div>
                <div class='mains'>
                  <p>扫描二维码向我付钱</p>
                  <div id="qrcode" v-show='flag' ref="qrcode"></div>
                </div>
           </div>
           <!-- <Foot></Foot> -->
       </div>
</template>

<script scoped> 
import qrcode from "../../../static/js/qrcode.js";
// import Foot from './main/Foot';

export default {
    data(){
        return{
            flag: true,
            logined: false,
            i:false,
            userInfoTwo: '',
        }
    },
    mounted() {
        this._phone();
    },
    methods: {
        _phone: function(){
            this.$axios.get("user/api/user-annexes/userInfo")
            .then((res) => {
                if(this.$store.getters.isAuthed === true){
                    this.userInfoTwo= 'http://app.grjf365.com/#/grpay?phoneNumber=' + res.data.phone;
                }
                if(this.i==false){
                    var qrcode = new QRCode(document.getElementById("qrcode"), {  
                        width : 170,//设置宽高  
                        height : 170,
                    });  
                    qrcode.makeCode(this.userInfoTwo);  
                }
                this.i = true;
            })
        }
    },
    // components:{
    //     Foot
    // },
}
</script>

<style>
   
    .receving_header {
        flex-shrink: 0;
        width: 100%;
        height: 0.96rem;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 9;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        background: #ff5065 !important;
    }
    .receving_header p:nth-child(1) {
        padding-left: .4rem;
        font-size: .32rem;
    }
    .receving_header p:nth-child(2) {
        font-size: 0.32rem;
    }
    .receving{
       position: relative;
    }
    .receving_bodys{
        margin-top: .96rem;
        width: 100%;
        height: 100%;
        position: absolute;
        background: #ff5065;
    }
    .body_top{
      width: 6.74rem;
      height: 1.32rem;
      margin-left: 3.55%;
      margin-top: .3rem;
      margin-bottom: -1.8%;
      display: flex;
      background: url('../../assets/Mine/reving4.png') !important;
      background-repeat: no-repeat !important;  
      background-size: 100% 100% !important;    
    }
    .body_top .spans{
        width: .45rem;
        height: .45rem;
        margin-left: .42rem;
        margin-top: .4rem;
    }
    .body_top .spans img{
        width: 100%;
        height: 100%;
    }
    .body_top p{
        width: 80%;
        height: 100%;
        font-size: .3rem;
        color:#ff5065;
        align-items: center;
        margin-left: .24rem;
        margin-top: .45rem;
    }
    .mains{ 
      width: 7rem;
      height: 7rem;
      margin-left: 2%;
      background: url('../../assets/Mine/reving3.png') !important;
      background-repeat: no-repeat !important;  
      background-size: 100% 100% !important;  
    }
    .mains p{
        width: 100%;
        text-align: center;
        padding-top: 1rem;
        color: #404040;
        font-size: .3rem;
        font-weight: bold;
    }
    #qrcode{
      height: 170px;
      width: 170px;
      margin: auto;
      position: relative;
      top: 10%;
    }
    .codeCenter {
        position: absolute;
        width: 16%;
        height: 9%;
        bottom: 52%;
        left: 50.5%;
        margin-left: -8%;
    }
    .codeCenter img{
        width: 100%;
        height: 100%;
    }
    .logins{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 60%;
    }
</style>