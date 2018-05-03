<template>
  <div class="paypsd">
      <header class="header">
         <ul>
             <router-link :to="{ path: '/ID' }" tag='li'>&lt;</router-link>
             <li>支付密码</li>
             <li><span></span></li>
         </ul>
      </header>
      <div class="center">
          <div class="first">
              <!-- <img src="../../assets/Mine/paypsd.png" alt=""> -->
              <!-- <img src="../../assets/Mine/paypsd.png"> -->
              <p class="p1">仅用于手机支付的6位数密码</p>
              <p class="p2">（不影响其他密码的使用）</p>  
              <router-link to="idcard"><button class="1">我已了解</button></router-link>
          </div>
          <div class="second">
              <p class="p3">请设置6位纯数字的支付密码</p>
              <input type="password" class="paypd" maxlength='6'>
              <button class="two">完成</button>
          </div>
    
      </div>
  </div>
</template>
<script>
export default {
    date(){
        var reg=/^\d{6}$/;      
    },

    mounted:function(){
        $('.first').hide()
        $('.second').show()
        //{{$route.params.num}}
         $('.one').click(function(){
             $('.first').hide()
             $('.second').show()
         })
         $('.two').click(function(){
              var reg=/^\d{6}$/; 
              var a = $('.paypd').val();
              if(reg.test(a)){
                  console.log("成功")
              }else{
                 alert("请输入六位数字作为支付密码")
              }
         })
     },
 
}
</script>

<style scoped>
    .paypsd{
        width: 100%;
        height: 100%;
        background: #fff;
        overflow: hidden;
    }
     .header{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        background: #fff;
        border-bottom: 1px solid #e7e7e7;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        font-size: .28rem;
        color: #2f2f2f;
    }
    .header li:nth-child(1){
        text-align: left;
        margin-left: .3rem
    }
    
    .center img{
        width: 80%;
        height: 100%;
        display: block;
        margin: 0 auto;
    }
    .first{
        width:100%;
        background: #fff;
        padding-bottom: 100rem;
    }
    .p1{
        width: 100%;
        font-size: .32rem;
        text-align: center;
        color: #2f2f2f;
        margin-top: .5rem;
    }
    .p2{
        width: 100%;
        font-size: .28rem;
        text-align: center;
        color: #c4c4c4;
        margin-top: .15rem;
    }
    .p3{
        width: 100%;
        text-align: center;
        font-size: .28rem;
        color: #c4c4c4;
        margin-top: 1rem; 
    }
    .paypd{
        width: 80%;
        height: .8rem;
        display: block;
        margin: auto;
        border: 1px solid #e7e7e7;
        margin-top: .5rem;
        font-size: .4rem;
        text-align: center;
    }
    button{
        width: 80%;
        border-radius: .5rem;
        display: block;
        margin: auto;
        border: none;
        margin-top: .5rem;
        background: #ff0103;
        height: .7rem;
        color: #fff;
    }
</style>

