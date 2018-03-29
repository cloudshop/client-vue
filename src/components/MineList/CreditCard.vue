<template>
  <div class='CreditCard'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">消费支付</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content main'>
            <h2>商家手机号</h2>
            <input type="text" placeholder="请输入商家注册手机号">
            <h2>消费金额</h2>
            <input type="text" placeholder="请输入消费金额">
            <div class='list'>
               <dl>
                    <dt><img src="../../assets/Mine/贡融券.png" alt=""></dt>
                    <dd>贡融券</dd>
               </dl>
               <p>1.12</p>
            </div>
            <div class='list'>
              <dl>
                    <dt><img src="../../assets/Mine/余额.png" alt=""></dt>
                    <dd>余额</dd>
              </dl> 
              <p>0.00</p>
            </div>
            
            
        </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.CreditCard{
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
.list{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-right:.5rem;
    margin-top:.48rem;
}
.list:last-child{
    border-bottom:1px solid #e7e7e7;
    padding-bottom:.3rem;
}
.list .list p{
    font-size:.22rem;
    color:#f00909;
    font-weight:bold;
}
.main{
    background:#fff;
    margin-top:.12rem;
    padding-left:.3rem;
}
.main h2{
    font-size:.28rem;
    padding-top:.2rem;
    padding-bottom:.28rem;
}
.main input{
    border-radius:.11rem;
    background:#f5f5f5;
    border:0;
    width:60%;
    height:.54rem;
    padding-left:.2rem;
}
.main dl{
    display:flex;
    align-items:center;
}
.main dl dt img{
    width:.4rem;
    height:.4rem;
}
.main dl dd{
    padding-left:.22rem;
    font-size:.22rem;
    color:#2f2f2f;
}
input::-webkit-input-placeholder{
    font-size:.28rem;
    color:#b7b7b7;
}

</style>
