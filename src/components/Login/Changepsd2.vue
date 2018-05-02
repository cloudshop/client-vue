<template>
  <div class="change_psd">
      <header class="header">
          <ul>
              <li><span>&lt;</span></li>
              <li>修改密码</li>
              <li></li>
          </ul>
      </header>
      
      <div class="center content">
          <p>设置密码<input type="password"></p>
          <p class="yzm"> 确认密码<input type="password"></p>
          <p class="next">
              <button>完成</button>
          </p>
      </div>
  </div>
</template>
<script>
    
</script>
<style scoped>
    .change_psd{
        width: 100%;
        height: 100%;
        background: #fff;
    }
   .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        line-height: .96rem;
        border-bottom: 1px solid #e7e7e7;
    }
    .header ul{display: flex;}
    .header li{
        flex: 1;
        text-align: center;
    }
    .header li:nth-child(1){text-align: left;}
    .header li:nth-child(1) span{padding-left: .3rem;}
    .center{
        width: 100%;
        background: #fff;
        font-size: .32rem;
    }
    .center input{
        width: 3rem;
        margin-left: .3rem;
        border: none;
    }
    .center p:first-child{
        width: 80%;
        margin: auto;
        padding-top: 1rem;
        font-size: .32rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid #ccc;
    }
    .yzm{
        width: 80%;
        margin: auto;
        padding-top: .5rem;
        font-size: .32rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid #ccc;
    }
    .yzm button{
       height: .95rem; 
       flex: 1;
       border: none;
       border: 1px solid #e7e7e7;
       background: #fff;
       border-left: none;
       border-top-right-radius: .2rem;
       border-bottom-right-radius: .2rem;
       border-left: 1px solid #e7e7e7;
       margin-left: -.3rem;
    }
    .next{
        width: 100%;
        text-align: center;
        padding-top: .5rem;
    }
    .next button{
        width: 80%;
        height: .96rem;
        border-radius: .1rem;
        border: none;
        background: #d8d8d8;
        color: #fff;
    }
</style>
