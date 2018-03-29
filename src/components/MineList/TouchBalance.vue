<template>
    <div class='TouchBalance'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back" @click='BalanceClose'></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">明细</h1>
            <div class="mint-header-button is-right" >筛选</div>
        </header>    
        <div class='content'>
           <ul class='list'>
               <li>
                    <dl class='left'>
                        <dt>2018-03-06</dt>
                        <dd>提现</dd>
                    </dl>
                    <dl class='right'>
                        <dt>-1000</dt>
                        <dd>1205.75</dd>
                    </dl>
               </li>
               <li>
                    <dl class='left'>
                        <dt>2018-03-06</dt>
                        <dd>提现</dd>
                    </dl>
                    <dl class='right'>
                        <dt>-1000</dt>
                        <dd>1205.75</dd>
                    </dl>
               </li>
               <li>
                    <dl class='left'>
                        <dt>2018-03-06</dt>
                        <dd>提现</dd>
                    </dl>
                    <dl class='right'>
                        <dt>-1000</dt>
                        <dd>1205.75</dd>
                    </dl>
               </li>
               
           </ul>
        </div>
    </div>
</template>

<script>
import { Header,Popup } from 'mint-ui';
export default {
    data(){
        return{
            Balance:true
        }
    },
    methods:{
     BalanceClose:function(){
       this.$parent.$parent.Balance = false
     }
    }
}
</script>

<style scoped> 
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
     font-size:.32rem;
}
.is-right{
    color:#0096ff;
    font-size:.28rem;
}
.TouchBalance{
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
}
.list li{
    height:1.26rem;
    border-bottom:1px solid #dfdfdd;
    display:flex;
    justify-content:space-between;
    padding:0 .3rem;
}
.list li .left{
    padding-top:.28rem;
}
.list li .left dt{
    font-size:.22rem;
    color:#929292;
}
.list li .left dd{
    padding-top:.2rem;
    color:#696969;
    font-size:.28rem;
}
.list li .right{
    padding-top:.34rem; 
}
.list li .right dt{
    font-size:.32rem;
    color:#2f2f2f;
    font-weight:bold;
}
.list li .right dd{
    padding-top:.1rem;
     font-size:.22rem;
     color:#696969;
}
</style>
