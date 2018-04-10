<template>
    <div class="giving">
        <header class="header">
            <ul>
                 <router-link :to="{ path: '/Mine' }" tag='li'>
                 <span>〈</span>
                  </router-link> 
                <li>积分赠送</li>
                <li></li>
            </ul>
        </header>
        <div class="main">
            <p>
                <img src="../../assets/Mine/贡融积分.png" alt=""><i>积分总数</i>
                <span>100</span>
            </p>
            <ul>
                <li>接受积分的会员手机号</li>
                <li><input type="tel" placeholder="请输入手机号"  @blur="upperCase()" id="mytest"></li>
                <li>赠送积分</li>
                <li><input type="number" placeholder="请输入赠送积分"></li>
            </ul>
            <button class="next" @click="next">
                下一步
            </button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        next(){
            this.$router.push({name:"giving2"})
        },
        upperCase(){
          var theinput=document.getElementById("mytest").value; 
          var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
          //(p1.test(theinput)); 
          if(p1.test(theinput)==false) { 
          console.log('请填写正确电话号码!!'); 
          document.getElementById("mytest").value=""; 
          }else {
          console.log("succeess")
        }
       }
    }
}
</script>
<style scoped>
.giving{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.header{
    width: 100%;
    height: .96rem;
    border-bottom: 1px solid #e7e7e7;
    font-size:.32rem;
}
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        height: .96rem;
        line-height: .96rem;
        background: #fff;
        text-align: center;
    }
    .header li:nth-child(1){
        text-align: left;      
    }
    .header span{
        padding-left: .3rem;
    }
    .main{
        width: 100%;
        height: 100rem;
        background: #fff;
        margin-top: .12rem;

    }
    .main ul{
        position: relative;
    }
    .main p{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        border-bottom: 1px solid #e7e7e7;
    }
    .main p img{
        width: .5rem;
        vertical-align: middle;
        padding-left: .3rem;
        margin-right: .28rem;
    }
    .main p span{
        float: right;
        padding-right: .3rem;
    }
    .main li{
        padding-left: .3rem;
        background: #fff;
        font-size: .32rem;
    }
    .main li input{
        width: 4.28rem;
        height: .54rem;
        background: #f5f5f5;
        border-radius: .11rem;
        border: none;
        padding-left: .22rem;
        outline: none;
    }
    .main li:first-child{
        padding-top: .4rem;
    }
    .main li:nth-child(2){
        padding-top: .28rem;
    }
    .main li:nth-child(3){
        padding-top: .38rem;
    }
    .main li:nth-child(4){
        padding-top: .28rem;
    }
    button{
        width: 50%;
        height: .8rem;
        margin-left: 25%;
        margin-top: 1rem;
        border-radius: .11rem;
        background: #ff0103;
        border: none;
        color: #fff;
    }
</style>
