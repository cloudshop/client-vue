<template>
  <div class='ConfirmAnOrder'>
       <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">确认订单</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content'>
            <div class='nav'>
                <dl>
                    <dt> <b>皮皮虾啊</b>&nbsp;<b>138****438</b></dt>
                    <dd>
                        <img src="../../assets/Mine/定位.png" alt="">
                        <p>湖北武汉市洪山区城区群光广场1707</p>
                    </dd>
                </dl>
                <span>></span>
            </div>

            <div class='Single'>
                <dl>
                    <dt><img src="../../assets/Mine/headportrait.jpg" alt=""></dt>
                    <dd>
                        <h2>双肩包双肩包双肩包双肩包双肩包双肩包双肩包双肩包</h2>
                        <p>商品属性商品属性商品属性商品属性商品属性商品属性</p>
                        <div class='price'><b>￥128.00</b><em>X1</em></div>
                    </dd>
                </dl>

            </div>
            <div class='More'>

            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ConfirmAnOrder{
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
.nav{
    height:1.22rem;
    background:#fff;
    border-bottom:#e7e7e7 solid 1px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 .4rem 0 .15rem;
    margin-bottom:.19rem;
}
.nav dl dt{
    padding-left:.4rem;
}
.nav dl dt b{
    font-size:.24rem;
    color:#2f2f2f;
}
.nav img{    
    width:.24rem;
    height:.24rem;
}
.nav dl dd p {
   display: inline-block;
   margin-top:.2rem;
   color:#676767;
   font-size:.2rem;
}
.Single{
    height:2.26rem;
    background:#fff;
}
.Single dl {
    display:flex;
    padding:.3rem;
}
.Single dl  dt img{
    width:1.66rem;
    height:1.66rem;
    border-radius:.1rem;
}
.Single dl dd{
    margin-left:.3rem;
    /* overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap */
}
</style>
