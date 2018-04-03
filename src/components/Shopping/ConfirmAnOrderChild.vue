<template>
  <div class="confirmAnOrderChild">
         <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">商品清单</h1>
            <div class="mint-header-button is-right">共俩件</div>
        </header>
        <div class='content'>
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
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.confirmAnOrderChild{
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
.Single{
    height:2.26rem;
    background:#fff;
    border-bottom:1px solid #e7e7e7;
}
.Single dl {
    display:flex;
    padding:.3rem;
}
.Single dl dt{
    width:30%;
}
.Single dl  dt img{
    width:1.66rem;
    height:1.66rem;
    border-radius:.1rem;
}
.Single dl dd{
    margin-left:.3rem;
    width:70%;
}
.Single dl dd h2{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:.28rem;
    color:#242427;       
}
.Single dl dd p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-top:.15rem;
    font-size:.24rem;
    color:#676767;        
}
.Single dl dd .price{
    margin-top:.6rem;
    display:flex;
    justify-content:space-between;
}
.Single dl dd .price b{
    font-size:.28rem;
    color:#ff0103;
}
.Single dl dd .price em{
    font-size:.24rem;
    color:#676767;
}
.Single h2{
    font-weight:bold;
}
</style>
