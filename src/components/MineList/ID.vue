<template>
   <div>
       <header class="header">
        <ul>
            <li @click="closeID">《</li>
            <li>账号和安全</li>
            <li></li>
        </ul>
        </header>
        <div class="center">
            <ul>
                <li>账号安全等级<span>低</span><b>请设置以下项目保护账号</b></li>
                <li><img src="../../assets/ID/绑定手机.png">已绑定手机<input type="tel" value="138****4338"><a>></a></li>
                <li><img src="../../assets/ID/登录密码..png">登录密码<a>></a></li>
                <li><img src="../../assets/ID/支付密码.png">支付密码<a>></a></li>
                <li><img src="../../assets/ID/重置手机密码.png">重置手机密码<a>></a></li>
            </ul>
        </div>
</div>      
     
</template>
<script>
export default {
    data(){
      return{

         }
    },
   methods:{
    closeID:function(){
            this.$parent.$parent.safety = false
        },
    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        background: #fff;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        font-size: .28rem;
        color: #2f2f2f;
    }
    .header li:nth-child(1){
        text-align: left;
        margin-left: .3rem
    }
    .center li{
        height: .96rem;
        line-height: .96rem;    
        padding-left: .3rem;
        background: #fff;
        border-top: 1px solid #e7e7e7;
    }
    .center li:nth-child(1){
        color: #2f2f2f;
        font-size: .28rem;
    }
    .center li:nth-child(1) span{
        margin-left: .5rem;
        margin-right: .5rem;
    }
    .center a{
        position: absolute;
        right: .3rem;
    }
    .center input{
        border: none;
        outline: none;
        height: 70%;
        margin-left: .3rem;
    }
    .center img{
        height: 50%;
        vertical-align: middle;
        margin-top: -.1rem;
        margin-right: .3rem;
    }
    .center li:nth-child(1) b{
        font-weight: normal;
        font-size: .28rem;
        color: #676767;
    }
    .center li:nth-child(2){
        margin-top: .2rem;
        border-top: none;
    }
</style>
