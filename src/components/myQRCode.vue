<template>
       <div class="myQrCode">
            <div class="myQrCode_header">
                <p>〈</p >
                <p>扫码注册</p >
                <p></p>
            </div>
           <div class="myQrCode_body">
                <div id="qrcode" v-show='flag' ref="qrcode"></div>
                <div class="codeCenter"><img src="../assets/user/logoCode.png" alt=""></div>
                <div class="borderCode"><img src="../assets/user/borderCode.png" alt=""></div>
                <div class="logins" v-show="logined">您还未登录，请先去登录,否则无法分享哦~</div>
           </div>
           <Foot></Foot>
       </div>
</template>

<script> 
import qrcode from "../../static/js/qrcode.js";
import Foot from './main/Foot';

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
                    this.userInfoTwo= 'http://app.grjf365.com/simpleregister/index.html?phoneNumber=' + res.data.phone;
                }else{
                    this.logined = true;
                    this.userInfoTwo= 'http://m.anzhi.com/app_b222_com.grjf365.gongrongpoints.html';
                }
                if(this.i==false){
                    var qrcode = new QRCode(document.getElementById("qrcode"), {  
                        width : 170,//设置宽高  
                        height : 170,
                        colorDark : '#ff0000',
                        colorLight : '#a3e6df',
                        correctLevel : QRCode.CorrectLevel.H
                    });  
                    qrcode.makeCode(this.userInfoTwo);  
                }
                this.i = true;
            })
        }
    },
    components:{
        Foot
    },
}
</script>

<style>
    .myQrCode_header {
        flex-shrink: 0;
        width: 100%;
        height: 0.96rem;
        display: flex;
        position: fixed;
        top: 0;
        z-index: 9;
        justify-content: space-between;
        align-items: center;
        color: #2f2f2f;
        background: #fff !important;
        border-bottom: 1px solid #f8f8f8;
    }
    .myQrCode_header p:nth-child(1) {
        padding-left: .4rem;
    }
    .myQrCode_header p:nth-child(2) {
        font-size: 0.32rem;
    }
    .myQrCode{
       position: relative;
       background: red;
    }
    .myQrCode_body{
        margin-top: .96rem;
        width: 100%;
        height: 100%;
        position: absolute;
        background: url('../assets/user/background.png') !important;
        background-repeat: no-repeat !important;  
        background-size: 100% 100% !important;  
    }
    .codeCenter {
        position: absolute;
        width: 16%;
        height: 9%;
        bottom: 337px;
        left: 152px;
    }
    .codeCenter img{
        width: 100%;
        height: 100%;
    }
    .borderCode{
        position: absolute;
        width: 54%;
        height: 30%;
        bottom: 267px;
        left: 83px;
    }
    .borderCode img{
        width: 100%;
        height: 100%;
    }
	#qrcode{
		height: 170px;
		width: 170px;
		margin: auto;
        position: relative;
        top: 30%;
	}
    .logins{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 60%;
    }
</style>