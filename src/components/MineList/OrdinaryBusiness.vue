<template>
   <div class='OrdinaryBusiness'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back" @click='OrdinaryBusinessPageClose'></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">申请商家</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content'>
            <p>信息仅用于审核,绝不外泄</p>

            <div class='main'>
               <h2>本人身份证照片</h2>
               <div class='self'>    
                     <div class='list'>
                        <input type="file" class='file'>
                        <div class='relative'>
                            <img src="../../assets/Mine/相机.png" alt="">
                            <span>身份证正面</span>
                        </div>                       
                     </div>
                    <div class='list'>
                        <input type="file"  class='file'>
                         <div class='relative'>
                            <img src="../../assets/Mine/相机.png" alt="">
                            <span>身份证反面</span>
                        </div>
                    </div>
               </div>
                
            </div>

            <div class='main'>
               <h2>本人手持身份证照片</h2>
                <div class='list'>
                        <input type="file"  class='file'>
                         <div class='relative'>
                            <img src="../../assets/Mine/相机.png" alt="">
                            <span>上传照片</span>
                        </div>
                </div>
            </div>

            <div class='main'>
               <h2>企业营业执照照片</h2>
                 <div class='list'>
                        <input type="file"  class='file'>
                         <div class='relative'>
                            <img src="../../assets/Mine/相机.png" alt="">
                            <span>上传照片</span>
                        </div>
                 </div>
            </div>

            <div class='store'>
                <h2>店铺名称</h2>
                <input type="text" placeholder="请输入店铺的名称">
                <button>提交申请</button>
            </div>
        </div>
   </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
        methods:{
            OrdinaryBusinessPageClose(){
                this.$parent.$parent.OrdinaryBusinessPage = false;
            }
        }
}
</script>

<style scoped>
.OrdinaryBusiness{
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background:#f5f5f5;
}
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    font-size:.32rem;
    border-bottom:1px solid #e7e7e7;
}
p{
    height:.78rem;
    line-height: .78rem;
    font-size:.22rem;
    color:#696969;
    padding-left:.3rem;
}
.main{
    background:#fff;
    margin-top:.12rem;
    width:100%;
}
h2{
    font-size:.28rem;
    color:#2f2f2f;
    padding-left:.3rem;
    padding-top:.2rem;
}
.main .self{
    display:flex;
}
.main .self .list:nth-child(2){
    margin-left:.4rem;
}
.list{
    position: relative;
    padding-top:.4rem;
    padding-left:.3rem;
    padding-bottom:.32rem; 
}
.relative{
    position: absolute;
    top:.39rem;
    width:2.4rem;
    height:1.6rem;
    border:1px dashed #c4c4c4;
}
.relative img{
    width:.78rem;
    height:.7rem;
    margin-left:.8rem;
    margin-top:.24rem;
    margin-bottom:.24rem;
    display:block;
}
.relative span{
    display:block;
    text-align:center;
    font-size:.24rem;
    color:#c4c4c4;
}
.file{
    width:2.4rem;
    height:1.6rem;
    position: relative;
    z-index:22;
    opacity:0;
}
.store{
    background:#fff;
    margin-top:.12rem;
    height:3.03rem;
}
.store input{
    height:.54rem;
    width:70%;
    border-radius: .11rem;
    background:#f5f5f5;
    border:0;
    margin-left:.3rem;
    margin-top:.24rem;
    padding-left:.2rem;   
    font-size:.28rem;
}
input::-webkit-input-placeholder{ 
 color:#b7b7b7;
}
.store button{
    display:block;
    width:70%;
    margin-left:15%;
    margin-top:.6rem;
    height:.8rem;
    border-radius:.12rem;
    background: #0bacff;
    border:0;
    font-size:.32rem;
    color:#fffefe;
}
</style>
