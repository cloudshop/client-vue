<template>
  <div class='ConfirmAnOrder'>
       <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal" @click ='PreviousMenu'>
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">确认订单</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content'>
            <div class='nav'>
                <dl @click='HarvestAddress'>
                    <dt> <b>皮皮虾啊</b>&nbsp;<b>138****438</b></dt>
                    <dd>
                        <img src="../../assets/Mine/定位.png" alt="">
                        <p>湖北武汉市洪山区城区群光广场1707</p>
                    </dd>
                </dl>
                <span>></span>
            </div>

         <div class='More'>
            <div class='Single'>
                <dl>
                    <dt><img src="../../assets/Mine/headportrait.jpg" alt=""></dt>
                    <dd>
                        <h2>双肩包双肩包双肩包双肩包双肩包双肩包双肩包双肩包</h2>
                        <p>商品属性商品属性商品属性商品属性商品属性商品属性</p>
                        <div class='price'><b>￥{{price}}</b><em>X{{text}}</em></div>
                    </dd>
                </dl>
            </div>
            <ul>
                <li><p>购买数量</p> <h2><span @click='Reduce'>-</span><input type="text" readonly v-model="text"><span @click='CountAdd'>+</span></h2></li>
            </ul>
         </div>
         <ul class='Manner'>
             <li>
                 <p>配送方式</p>
                 <h2>快递免邮&nbsp;&gt;</h2>
             </li>
             <li>
                 <p>卖家留言:</p>
                 <input type="text" placeholder="选填:填写内容已和商家协商确认">
             </li>
         </ul>
        <!-- <div class='MoreTwo'>
            <dl>
                <dt>
                    <img src="../../assets/Mine/headportrait.jpg" alt="">
                    <img src="../../assets/Mine/headportrait.jpg" alt="">
                </dt>
                <dd>共<em>二</em>件&nbsp;&gt;</dd>
            </dl>
        </div> -->
         
    
         <!-- <div class="change">
            <p>
                <img src="../../assets/Mine/贡融积分.png" alt="">
               <ul>
                   <li> 贡融积分(需支付<b>400</b>积分)</li>
                   <li>0.00</li>
               </ul>
                <span>
                    <input type="radio" id="jifen" name="sex" value="贡融积分" checked/>
                    <label for="jifen"></label>
                </span>
            </p>
            <p>
                <img src="../../assets/Mine/贡融券.png" alt="">
                <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul>
                <span>
                    <input type="radio" id="juan" name="sex" value="贡融卷"/>
                    <label for="juan"></label>
                </span>
            </p>
         </div> -->
        </div>
        
        <div class='Compute'>
            <p><span>共一件商品</span><b>小计:<em>￥{{price*text}}</em></b></p>
        </div>
        <div class='footer'>
            <p><span>抵扣1.00</span><b>合计:￥127</b></p>
            <button>去结算</button>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            text:this.$route.params.count,  // 购买数量
            price:this.$route.params.price, //单价
        }
    },
    methods:{
        CountAdd(){
            if(this.text<10){
                 this.text++;
            }     
        },
        Reduce(){
            if(this.text>1){
                this.text--;
            }           
        },
        PreviousMenu(){
            this.$router.push({name:"Product"}) 
        },
        HarvestAddress(){
            this.$router.push({name:"MyAddress",params:{'address':'/ConfirmAnOrder'}}) 
        }
    },
    mounted(){
    }
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
.More{
    margin-top:.1rem;
}
.More ul li{
    height:.8rem;
    border-top:1px solid #e7e7e7;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 .4rem;
}
.More ul li p{
    font-size:.28rem;
    color:#242427;
}
.More ul li h2 span{
    border:1px solid #e7e7e7;
    width:.41rem;
    height:.38rem;
    display:inline-block;
    text-align:center;
    line-height:.41rem;
}
.More ul li h2 span:first-child{
    border-radius:.1rem 0 0 .1rem;
    border-right:0;
}
.More ul li h2 span:last-child{
    border-radius: 0 .1rem .1rem 0;
     border-left:0;
}
.More ul li h2 input{
    border:1px solid #e7e7e7;
    width:.59rem;
    height:.34rem;
    display:inline-block;
    text-align:center;   
}
.MoreTwo dl{
     display:flex;
     justify-content:space-between;
     align-items:center;
     height:1.66rem;
     background:#fff;
     padding:0 .4rem;
}
.MoreTwo img{
    width:1.1rem;
    height:1.1rem;
}
.footer{
    height:.86rem;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:.86rem;
}
.footer p{
    height:.86rem;
    display:flex;
    justify-content:space-between;
    width:70%;
    align-items:center;
    padding:0 .4rem;
}
.footer p span{
    font-size:.28rem;
    color:#242427;
    font-weight:bold;
}
.footer p b{
    font-size:.32rem;
}
.footer button{
    width:30%;
    font-size:.32rem;
    color:#ffffff;
    background:#ff0103;
    border:0;
}
.change{
    width: 100%;
    height: 2.1rem;
    background: #fff;
    margin-top: .2rem;
}
.change p{
    height: 1rem;
    line-height: 1rem;
    padding-left: .3rem;
    box-sizing: border-box;
}
.change p:first-child{
    border-bottom: 1px solid #e7e7e7;
}
.change p span{
    float: right;
    padding-right: .3rem;
}
.change p input{
    display: none;
}
.change p ul{
    float: left;
    margin-left: .15rem;
    margin-top: .15rem;
}
.change p li{
    line-height: .4rem;
}
.change img{
    width: .5rem;
    float: left;
    vertical-align: middle;
    margin-top: .2rem
}
.Manner{
    background:#fff;
}
.Manner li{
   height:.8rem; 
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:0 .4rem;
   border-top:1px solid #e7e7e7;
}
.Manner li p{
    font-size:.28rem;
}
.Manner li input{
    width:70%;
    height:.5rem;
    border:0;
    font-size:.24rem;
}

h2{
    font-weight:normal;
}
input::-webkit-input-placeholder{
    color:#c4c4c4;
}
.Compute{
    height:.8rem;
    background:#efefef;
    line-height:.8rem;
}
.Compute p{
    float:right;
    padding-right:.15rem;
}
.Compute p span{
    font-size:.28rem;
    padding-right:.2rem;
}
.Compute p b{
    font-size:.32rem;
}

input[type="radio"] + label::before {
        box-sizing: border-box;
        content: " "; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        width: 2em;
        height: 2em;
        background: url("../../assets/manage/change_no.png");
        background-size: 100% 100%;
        /* margin-right: .4em; */
        border-radius: 50%;
        margin-top: -.1rem
    }
    input[type="radio"]:checked + label::before {
        background: red;
        background: url("../../assets/manage/change.png");
        
        background-size: 100% 100%;
    }
</style>
