<template>
   <div class='ModifyDiscount'>
     <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">修改让利折扣</h1>
            <div class="mint-header-button is-right" ></div>
        </header>
        <div class='content'>
            <nav class='nav'>
               <dl>
                   <dt>
                       <img src="../../assets/HomePage/bg.gif" alt="">
                   </dt>
                   <dd>
                       <p>欢乐空间</p>
                       <p><em></em><span>当前让利折扣:<b>1.5</b> 折</span></p>
                   </dd>
               </dl>
            </nav>
            <div class='Manual'>
                <h3>手动设置折扣<input type="number"/>折</h3>
                <!-- <div class="block">
                    <span class="demonstration">自定义初始值</span>
                    <el-slider v-model="value"></el-slider>
                </div> -->
            </div>
        </div>
   </div>      
     
</template>
<script>
export default {
    data(){
      return{
        value:2
        }
    },
   methods:{
      
    }
}

</script>
<style scoped>
.ModifyDiscount{
     width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
}
header{
    width:100%;
    background:#fff;
    color:#2f2f2f;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
    font-size:.32rem;
}
.nav{
    height:2rem;
    background:url('../../assets/ModifyDiscount/矩形19.png');
    background-size:100%;
}
.nav dl{
    height:2rem;
    display:flex;
}
.nav dl dt{
    margin-top:.4rem;
    margin-left:.3rem;
}
.nav dt img{
    width:1.2rem;
    height:1.2rem;
    border-radius:50%;
}
.nav dl dd{
    margin-left:.4rem;
    margin-top:.48rem;
    color:#fff;    
}
.nav dl dd p:nth-child(1){
    font-size:.36rem;
}
.nav dl dd p:nth-child(2){
    margin-top:.36rem;
    font-size:.28rem;
}
.nav dl dd p:nth-child(2) em{
    width:.23rem;
    height:.19rem;
    background: url('../../assets/ModifyDiscount/30_打折.png');
    display:inline-block;
    background-size:100% 100%;
}
.nav dl dd p:nth-child(2) span{
    padding-left:.1rem;
}
.Manual{
      height:2.54rem;
      background:#fff;
}
.Manual h3{
    padding-top:.36rem;
    padding-left:.3rem;
    font-size:.32rem;
    font-weight:normal;
}
.Manual h3 input{
    border-radius:.08rem;
    border:.02rem solid #1692e1;
    outline:0;
    margin-left:.2rem;
    margin-right:.2rem;
    text-align:center;
}
.block{
    width:90%;
    margin-left:5%;
}
</style>