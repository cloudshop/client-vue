<template>
    <div class='ShareResults'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">分享业绩</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='content main'>
            <div class='banner'></div>
            <div class='first-ShareResults'>
                <div class='title'>
                    <img src="../../assets/ShareResults/分割.png" alt="">
                            <h3>分享业绩</h3>
                    <img src="../../assets/ShareResults/分割右.png" alt="">
                </div>
                <ul class='list'>
                    <li><p>商家销售交易额</p><span>￥2018.00</span></li>
                    <li><p>商家销售让利额</p><span>￥2018.00</span></li>
                    <li><p>会员消费交易额</p><span>￥2018.00</span></li>
                    <li><p>商家消费让利额</p><span>￥2018.00</span></li>
                </ul>
            </div>
            <div class='last-ShareResults'>
                 <div class='title'>
                    <img src="../../assets/ShareResults/分割.png" alt="">
                            <h3><p>全体系业绩</p><span>(包括直推业绩)</span></h3>
                    <img src="../../assets/ShareResults/分割右.png" alt="">
                </div>

                <ul class='list'>
                    <li><p>会员总数</p><span>5</span></li>
                    <li><p>普通商家总数</p><span>560</span></li>
                    <li><p>增值商家总数</p><span>54</span></li>
                    <li><p>商家销售交易额</p><span>100</span></li>
                    <li><p>商家消费让利额</p><span>560</span></li>
                    <li><p>会员消费交易额</p><span>54</span></li>
                    <li><p>会员消费让利额</p><span>100</span></li>
                </ul>
            </div>

            <footer class='footer'>

        </footer>
        </div>

        
    </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {

}
</script>

<style scoped>
.ShareResults{
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
    color:#000;
    height:.94rem;
    border-bottom:1px solid #e7e7e7;
    font-size:.32rem;
}
.banner{
    width:100%;
    height:3rem;
    background:#ff5064;  
}
.first-ShareResults{
    background:#fff;
    width:90%;
    height:4.67rem;
    margin-left:5%;
    margin-top:-2.51rem;
    border-radius:.1rem;
    box-shadow: 2px 2px 1px #e4e4e4;
}
.last-ShareResults{
    width:90%;
    height:7.04rem;
    background:#fff;
    margin-left:5%;
    border-radius:.1rem;
    box-shadow: 2px 2px 1px #e4e4e4;
    margin-top:.5rem;
}
.title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 .3rem;
    height:.96rem;
}
.title h3{
    font-size:.32rem;
    color:#2f2f2f;
}
.title h3 p{
    font-size:.32rem;
    color:#2f2f2f;
   text-align:center;
}
.title h3 span{
    font-size:.2rem;
    color:#c4c4c4;
    font-weight: normal;
    text-align:center;
}
.title img{
    width:1.81rem;
    height:.23rem;
}
.last-ShareResults .title{
    padding-top:.2rem;
}
.last-ShareResults .list span{
    color:#000;
}
.list li:first-child{
    margin-top:.2rem;
}
.list li{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 .3rem; 
   margin-top: .5rem;
}
.list li p{
    font-size:.24rem;
    color:#2f2f2f;
}
.list li span{
    font-size:.28rem;
    color:#ff5064;
}
.footer{
    height:.3rem;
    background:#f5f5f5;
}
</style>
