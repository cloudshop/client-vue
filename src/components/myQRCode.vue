<template>
	<div class="myQrCode">
        <div id="qrcode" v-show='flag' ref="qrcode"></div>
        <div class="logins" v-show="flag1">
            <p class="goLogin">您还未登陆，请先去登录</p>
        </div>
        <Foot></Foot>
	</div>
</template>

<script> 
import Foot from './main/Foot'
export default {
    data(){
        return{
            flag: true,
            flag1: false,
            i:false,
            userInfo: ''
        }
    },
    created(){
        // console.log(document.cookie);
        // if(accessToken == ''){
        //     this.flag=false;
        // }
        // else{
        //     this.flag1=true;
        // }
        this.userInfo= '小可耐'
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
                qrcode.makeCode(this.userInfo);  
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