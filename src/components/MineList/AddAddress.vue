<template>
  <div>
      <header class="header">
          <ul> 
              <router-link :to="{ path: '/MyAddress' }" tag='li'>&lt;</router-link>
              <li>编辑收货地址</li>
              <li><span>删除</span></li>
          </ul>
      </header>
      <div class="center">
          <ul>
              <li>姓名：<input type="text" id="name"></li>
              <li>电话：<input type="tel" id="tel"></li>
              
          </ul>
          <p><img src="../../assets/manage/添加联系人.png"></p>
      </div>
      <ul class="bottom">
          <li>地区：<input type="text" id="address_big"></li>
          <li>详细地址：</li>
      </ul>
      
      <div class="button">
          <button>保存</button>
      </div>
  </div>
</template>
<script>
   export default {
    data(){
          return {

         }
    },
    methods:{
        closeEditAddress:function(){
            this.$parent.$parent.EditAddress = false
        },
    }
   } 
</script>
<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        border-bottom: 1px solid #e7e7e7;
         font-size:.32rem;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        line-height: .96rem;
        text-align: center
    }
    .header li:nth-child(1){
        text-align: left;
        margin-left: .3rem;
    }
    .header li:nth-child(3){
        text-align: right;
        margin-right: .3rem;
        color: #676767;
        font-size: .28rem;
    }
    .center{
        display: flex
    }
    .center ul{
        flex: 2;
        float: left;
    }
    .center li{
        height: .96rem;
        line-height: .96rem;
        padding-left: .3rem;
        font-size: .28rem;
        color: #676767;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }
    .center p{
        flex: 1;
        width: 1.68rem;
        height: 1.92rem;
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        text-align: center;
        border-left: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
    }
    .center img{
        width: 70%;
        height: 70%;
        margin-top: .3rem;
    }
    .center input{
        width: 3rem;
        margin-top: .15rem;
        height: .5rem;
        font-size: .28rem;
        color:#2f2f2f;
        border: none;
        outline: none;
    }
    .bottom{
        width: 100%;
    }
    .bottom li{
        height: .96rem;
        line-height: .96rem;
        padding-left: .3rem;
        font-size: .28rem;
        color: #676767;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }
    .bottom input{
        width: 3rem;
        margin-top: .15rem;
        height: .5rem;
        font-size: .28rem;
        color:#2f2f2f;
        border: none;
        outline: none;
    }
    .button{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom:1rem;
    }
    button{
        width: 3.26rem;
        height: .8rem;
        color:#fff;
        border: none;
        background: #ff0103;
        border-radius: .15rem;
       }
</style>
