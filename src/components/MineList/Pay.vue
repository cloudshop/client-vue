<template>
  <div>
     <header class="header">
         <ul>
             <li><span>《</span></li>
             <li>选择支付方式</li>
             <li></li>
         </ul>
     </header>
     <div class="center">
        <p class="center_top">请您尽快完支付 <span><i>400</i>元</span></p>
        <div class="change">
            <p class="one">
                <img src="../../assets/Mine/余额.png" alt="">
               <ul>
                   <li> 余额(需支付<b class="need"></b>元)</li>
                   <li><i class="now">1000</i>  <span class="nomoney">(余额不足)</span></li>
               </ul>
                <span>
                    <input type="radio" id="yue" name="sex" value="余额" checked/>
                    <label for="yue"></label>
                </span>
            </p>
            <p class="two">
                <img src="../../assets/top/支付宝.png" alt="">
                <!-- <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul> -->
                支付宝
                <span>
                    <input type="radio" id="zhifubao" name="sex" value="支付宝" />
                    <label for="zhifubao"></label>
                </span>
            </p>
            <p>
                <img src="../../assets/top/快捷支付.png" alt="">
                <!-- <ul>
                    <li>贡融卷(可抵扣<b>1</b>元)</li>
                    <li>1.00</li>
                </ul> -->
                快捷支付
                <span>
                    <input type="radio" id="kuaijiezhifu" name="sex" value="快捷支付"/>
                    <label for="kuaijiezhifu"></label>
                </span>
            </p>
            <p>
                <img src="../../assets/top/银联.png" alt="">
                联通
                <span>
                    <input type="radio" id="yinlian" name="sex" value="银联"/>
                    <label for="yinlian"></label>
                </span>
            </p>
         </div>
             <button class="botton">
                 确认支付（<span></span>元）
             </button>
    
     </div>
  </div>
</template>

<script>
export default {
    mounted:function(){
        $(".nomoney").hide()
        var a = $('.center_top i').text()
        $('.need').text(a)
        $('.botton span').text(a);
        var b = $('.now').text() 
    
      var  a1 = Number( a );
      var  b1 = Number( b );
        if( a1 > b1){
            console.log('没钱')
            $(".nomoney").show()
            $('.one').css("color","#c8c8c8")
            $('.one input').attr("disabled","disabled")
             $('.two input').attr('checked','checked');
        }else{
            $(".nomoney").hide()
           console.log('有钱')
        }
         $(".botton").on('click',function(){ 
    
                var re=$('input:radio[name="sex"]:checked').val();
              console.log('即将使用'+re+'支付'+a+'元');
          
          
          
      });
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        border-bottom: 1px solid #e7e7e7;
        box-sizing: border-box;
        background: #fff;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        line-height: .96rem;
    }
    .header li:first-child{
        text-align: left;
    }
    .header li span{
    padding-left: .3rem;
    }
    .center_top{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        background: #fde9e8;
        padding-left: .3rem;
        color: #2f2f2f;
        font-size: .24rem;
        position: relative;
    }
    .center_top span{
        float: right;
        font-size: .28rem;
        color: #ff0103;
        position: absolute;
        right: .6rem;
    }

    .change{
    width: 100%;
    height: 4.1rem;
    background: #fff;
    margin-top: .2rem;
    font-size: .28rem;
}
.change p{
    height: 1rem;
    line-height: 1rem;
    padding-left: .3rem;
    box-sizing: border-box;
}
.change p{
    border-bottom: 1px solid #e7e7e7;
}
.change p:last-child{
    border:none;
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
    margin-right: .2rem;
    float: left;
    vertical-align: middle;
    margin-top: .25rem
}
button{
    width: 100%;
    height: .8rem;
    background: #ff0103;
    font-size: .32rem;
    color: #fff;
    position: absolute;
    bottom: 0;
    border: none;
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
