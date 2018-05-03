<template>
    <div>
        <header class="header">
         <ul>
             <router-link :to="{ path: '/ID' }" tag='li'>&lt;</router-link>
             <li>设置新密码</li>
             <li><span></span></li>
         </ul>
      </header>
      <div class="top">
          <ul>
              <li><img src="../../assets/Mine/密码.png" alt=""> 修改密码</li>
              <li>定期修改密码,有助于保护您的账户安全与个人隐私</li>
          </ul>
          <p class="oldpsd">
              旧密码
          </p>
          <p class="oldpsdwrite">
              <input type="password" placeholder="请输入你的旧密码" id="oldpsd">
          </p>
          <p class="newpsd">
              新密码
          </p>
          <p class="newpsdwrite">
              <input type="password" placeholder="设置6-18位数字+字母组合密码" id="newpsd">
          </p>
          <p class="newpsdwrite2">
              <input type="password" placeholder="请再次输入您的新密码" id="newpsd2">
          </p>
      </div>
            <button class="sure">确定</button>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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
    .top{
        width: 100%;
        background: #fff;
        
    }
    .top ul{
        padding-left: .3rem;
    }
    .top ul img{
        width: .2rem;
        padding-right: .05rem;
    }
    .top li:nth-child(1){
        padding-top: .22rem;
        font-size: .24rem;
        color: #2f2f2f;
    }
    .top li:nth-child(2){
        padding-top: .16rem;
        font-size: .24rem;
        color: #696969;
        padding-left: .32rem;
        padding-bottom: .2rem;
    }
    .oldpsd{
        padding-left: .3rem;
        font-size: .28rem;
        color: #2f2f2f;
        padding-top: .24rem;
        padding-bottom: .24rem;
        background: #f5f5f5;
    }
    .oldpsdwrite{
        width: 100%;
        height: .78rem;
        line-height: .78rem;
        background: #fff;
        padding-left: .3rem;
    }
    .oldpsdwrite input{
        width: 90%;
        height: .3rem;
        font-size: .2rem;
        border: none;
    }
    .newpsd{
        padding-left: .3rem;
        font-size: .28rem;
        color: #2f2f2f;
        padding-top: .24rem;
        padding-bottom: .24rem;
        background: #f5f5f5;
    }
    .newpsdwrite{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        background: #fff;
        padding-left: .3rem;
    }
    .newpsdwrite input{
        width: 80%;
        height: .3rem;
        font-size: .2rem;
        border: none;
    }
    .newpsdwrite2{
        width: 100%;
        height: .78rem;
        line-height: .78rem;
        background: #fff;
        padding-left: .3rem;
      
        border-top: .18rem solid #f5f5f5;
    }
    .newpsdwrite2 input{
        width: 80%;
        height: .3rem;
        font-size: .2rem;
        border: none;
    }
    .sure{
        width: 90%;
        height: .96rem;
        margin: 0 auto;
        background: #ff0103;
        color: #fff;
        border-radius: .1rem;
        border: none;
        margin-top: 1rem;
    }
</style>

