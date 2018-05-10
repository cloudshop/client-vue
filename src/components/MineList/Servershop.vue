<template>
  <div class='Appreciation'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                    <router-link :to="{ path: '/mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">商家平台使用费缴纳</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='content'>
            <router-link to="/servershop2"><p>服务商缴费 <span>&gt;</span></p></router-link>
            <p>凭证拍照上传 <span>&gt;</span></p>
        </div>
        
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
        }
    },
    methods:{
          AppreciationPageClose(){
            this.$parent.$parent.AppreciationPage = false
        }
    }
}
</script>

<style scoped>
.Appreciation{
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
.content p{
    height: .96rem;
    line-height: .96rem;
    font-size: .28rem;
    background: #fff;
    padding-left: .4rem;
    box-sizing: border-box;
    color: #282828;
}
.content p:first-child{
    border-bottom: 1px solid #e7e7e7;
}
.content span{
    float: right;
    padding-right: .3rem;
    font-size: .3rem
}
</style>
