<template>
	<div class="myQrCode">
        <div v-show='false' class="phones">{{phones}}</div>
        <div id="qrcode" v-show='flag' ref="qrcode"></div>
        <div class="logins" v-show="flag1">
            <p class="goLogin">您还未登陆，请先去登录</p>
        </div>
        <Foot></Foot>
	</div>
</template>

<script> 
import { setCookie, getCookie } from "../assets/js/cookie.js";
import qrcode from "../../static/js/qrcode.js";
import Foot from './main/Foot';

export default {
    data(){
        return{
            flag: true,
            flag1: false,
            i:false,
            userInfoTwo: '',
            phones:''
        }
    },
    created(){
        var Cookie = getCookie('login');
        var phoness = getCookie('PSTM');
        this.$axios.get("api/user/api/user-annexes/userInfo")
        .then((res) => {
            this.phones = res.data.phone
        })
        var phone = $(".phones").text()
        if(Cookie == ''){
            this.userInfoTwo= 'http://m.anzhi.com/app_b222_com.grjf365.gongrongpoints.html';
        }
        else{
            this.userInfoTwo= 'http://app.grjf365.com/simpleregister/index.html?phoneNumber'+'='+phone
        }
    },
    mounted() {
        this._getQart()
    },
    methods: {
        _getQart: function() {
            if(this.i==false){
                var qrcode = new QRCode(document.getElementById("qrcode"), {  
                    width : 200,//设置宽高  
                    height : 200  
                });  
                qrcode.makeCode(this.userInfoTwo);  
            }
            this.i = true;
        },
    },
    components:{
        Foot
    },
}
</script>

<style>
	#qrcode{
		height: 200px;
		width: 200px;
		margin: auto;
	}
</style>