<template>
  <div class='CreditCard'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                     <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">消费支付</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content main'>
            <h2>商家手机号</h2>
            <input type="text" placeholder="请输入商家注册手机号">
            <h2>消费金额</h2>
            <input type="text" placeholder="请输入消费金额">
            <div class='list'>
               <dl>
                    <dt><img src="../../assets/Mine/贡融券.png" alt=""></dt>
                    <dd>贡融券</dd>
               </dl>
               <p>1.12</p>
            </div>
            <div class='list'>
              <dl>
                    <dt><img src="../../assets/Mine/余额.png" alt=""></dt>
                    <dd>余额</dd>
              </dl> 
              <p>0.00</p>
            </div>

            <div class="change">
            <p>
               <i>贡融卷可支付</i>
                <span>
                    <input type="radio" id="juan" name="sex" value="贡融劵" checked/>
                    <label for="juan"></label>
                </span>
            </p>
            <p>
                <i>余额可支付</i>
                <span>
                    <input type="radio" id="jifen" name="sex" value="贡融积分" />
                    <label for="jifen"></label>
                </span>
            </p>

            <button class="next" @click='next'>下一步</button>
        </div>
        </div>
        
  </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        next(){
            this.$router.push({name:"CreditCardOK"})
        }
    }
}
</script>

<style scoped>
.CreditCard{
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
.list{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-right:.5rem;
    margin-top:.48rem;
}
.list:last-child{
    border-bottom:1px solid #e7e7e7;
    padding-bottom:.3rem;
}
.list .list p{
    font-size:.22rem;
    color:#f00909;
    font-weight:bold;
}
.main{
    background:#fff;
    margin-top:.12rem;
    padding-left:.3rem;
}
.main h2{
    font-size:.28rem;
    padding-top:.2rem;
    padding-bottom:.28rem;
}
.main input{
    border-radius:.11rem;
    background:#f5f5f5;
    border:0;
    width:60%;
    height:.54rem;
    padding-left:.2rem;
}
.main dl{
    display:flex;
    align-items:center;
}
.main dl dt img{
    width:.4rem;
    height:.4rem;
}
.main dl dd{
    padding-left:.22rem;
    font-size:.22rem;
    color:#2f2f2f;
}
input::-webkit-input-placeholder{
    font-size:.28rem;
    color:#b7b7b7;
}
.change{
    padding-top: .2rem;
    width: 100%;
    height: 1rem;
    position: relative;
    border-top: 1px solid #e7e7e7;
    text-align: center
}
.change button{
    
    width: 50%;
    height: .7rem;
    background: #ff0103;
    color: #fff;
    border: none;
    border-radius: .1rem;
    margin-top: 1rem;
}
.change p{
    display: inline;
    height: .5rem;
    line-height: .5rem;   
 
}
.change i{
    padding-left: 50%
}
.change span{
    float: right;
    padding-right: .5rem;
}
.change input{
    display: none;
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
