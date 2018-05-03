<template>
    <div>
        <header class="header">
         <ul>
             <router-link :to="{ path: '/ID' }" tag='li'>&lt;</router-link>
             <li>修改支付密码</li>
             <li><span></span></li>
         </ul>
      </header>
      <div class="center">
          <p>
              请输入旧的支付密码
          </p>
         照相<input type="file" accept="image/*" capture="camera">  
         录像<input type="file" accept="video/*" capture="camcorder">  
          相册<input type="file" accept="image/*">  
          <input type="submit">
      </div>
    </div>
</template>
<script>
export default {
    mounted:function(){

    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        background: #fff;
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
    .center p{
        width: 100%;
        text-align: center;
        color: #6e6e6e;
        margin-top: 1rem
    }
</style>
