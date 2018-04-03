<template>
  <div class='creditCardOK'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                    <router-link :to="{ path: '/CreditCard' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">消费支付</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content main'>
            <ul>
                <li><b>商家店铺名称:</b><span>贡融积分</span></li>
                <li><b>商家注册手机:</b><span>13325484125</span></li>
                <li><b>商家让利:</b><span>10%</span></li>
            </ul>
            <p>本次消费共支付: <em>￥1.12</em></p>

             <button>马上支付</button>
        </div>

       
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.creditCardOK{
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
.main{
    margin-top:.12rem;
    background:#fff;
}
.main ul{
    margin-left:.3rem;
}
.main ul li{
    height:.88rem;
    line-height:.88rem;
    border-bottom:1px solid #e7e7e7;
    display:flex;
    justify-content:space-between;
    padding:0 .3rem 0 0;
}
.main ul li b{
    font-size:.28rem;
    color:#2f2f2f;
}
.main ul li span{
    font-size:.28rem;
    color:#696969;
}
.main p{
    float:right;
    margin-top:.56rem;
    margin-right:.3rem; 
    font-size:.22rem;
    font-weight:bold;
}
.main p em{
    color:#f00909;
    margin-left:.2rem;
}
.main button{
    width:60%;
    margin-left:20%;
    margin-top:.73rem;
    height:.8rem;
    font-size:.32rem;
    color:#fffefe;
    background:#ff0103;
    border-radius:.12rem;
    border:0;
}
</style>
