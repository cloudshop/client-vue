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
          <p>请输入<span></span>收到的验证码</p>
          <p class="yzm">
              <input type="text">
              <button>重新发送</button>
          </p>
          <p class="next">
              <button @click='next'>下一步</button>
          </p>
      </div>
  </div>
</template>
<script>
    export default{
        methods:{
             next(){
                this.$router.push({path:'/SetPsd'})
            }
        }
    }

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
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
    }
    .header li:nth-child(1){
        text-align: left;
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
    }
    .center{
        width: 100%;
        background: #fff;
    }
    .center p:first-child{
        padding-left: .4rem;
        padding-top: 1rem;
        font-size: .24rem;
    }
    .yzm{
        width: 90%;
        padding-left: .4rem;
        padding-top: .5rem;
        padding-right: .4rem;
        display: flex;
    }
    .yzm input{
        height: .88rem;
        border: none;
        border: 1px solid #e7e7e7;
        border-right: none;
        border-radius: .2rem;
        flex: 2;
    }
    .yzm button{
       height: .95rem; 
       flex: 1;
       /* border-radius: .2rem; */
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
        width: 90%;
        height: .96rem;
        border-radius: .1rem;
        border: none;
        background: #d8d8d8;
        color: #fff;
    }
</style>
