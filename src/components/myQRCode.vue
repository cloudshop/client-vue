<template>
	<div class="myQrCode">
        <div id="qrcode" v-show='flag' ref="qrcode"></div>
        <div class="logins" v-show="logined">您还未登录，请先去登录,否则无法分享哦~</div>
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
                this.phones = res.data.phone
                // var phone = $(".phones").text()
                if(this.$store.getters.isAuthed() === true){
                    this.userInfoTwo= 'http://app.grjf365.com/simpleregister/index.html?phoneNumber=' + res.data.phone;
                }else{
                    this.logined = true;
                    this.userInfoTwo= 'http://m.anzhi.com/app_b222_com.grjf365.gongrongpoints.html';
                }
                if(this.i==false){
                    var qrcode = new QRCode(document.getElementById("qrcode"), {  
                        width : 200,//设置宽高  
                        height : 200  
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
	#qrcode{
		height: 230px;
		width: 200px;
		margin: auto;
        position: relative;
	}
    .logins{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 70%;
    }
</style>