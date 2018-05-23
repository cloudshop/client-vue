<template>
    <div>
        <div class="header">
            <ul>
                <li><span>&lt;</span></li>
                <li>贡融支付</li>
                <li></li>
            </ul>
        </div>
        <div class="main">
            <p class="money">消费金额: <input type="text" placeholder="请输入消费金额" v-model="mon" maxlength="5"></p>
            <p class="type">
                <ul>
                    <li><img src="../../assets/Mine/贡融券.png" alt="">贡融卷：<span class="ticke">{{arr.ticket}}</span></li>
                    <li><img src="../../assets/Mine/余额.png" alt="">余额&#12288;：<span class="bana">{{arr.balance}}</span></li>
                </ul>
            </p>
            <p class="changetype">
                <span><input type="checkbox" name="change" id="yn" checked>是否用贡融卷支付</span>
            </p>
            <p class="next">
                <input type="button" value="下一步" class="btn" @click="bun">
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        mon:'',
        arr:'',

    };
  },
  created(){
       var that = this;
    this.$axios
      .get("wallet/api/wallets/user")
      .then(function(res) {
          that.arr = res.data;
          console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods:{
      bun(){
         var aa = $('.ticke').text()
         var bb = $('.bana').text()
         var that = this 
          var a 
          var b = that.mon 
          if(b ==''){
              alert('请输入付款金额')
          }else{
            sessionStorage.setItem("monbumber", b);
            
            if ($('#yn').prop('checked')) {    
                if(aa > b){
                   this.$router.push('/Surepay'); 
                   sessionStorage.setItem("ticket", aa);
                   sessionStorage.setItem('balance',bb)
                   sessionStorage.setItem("changetype", "true");
                }else{
                   sessionStorage.setItem('balance',bb)
                   sessionStorage.setItem("ticket", aa);
                   sessionStorage.setItem("changetype", "true"); 
                   this.$router.push('/Surepay'); 
                }     
            }else{
                 sessionStorage.setItem('balance',bb)
                 sessionStorage.setItem("changetype", "false");
                 this.$router.push('/Surepay');
            }
            
          }
      }
  },
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        border-bottom: 1px solid #e7e7e7;
        background: #fff;
    }
    .header ul{
        display: flex
    }
    .header li{
        flex: 1;
        line-height: .96rem;
        text-align: center;
        font-size: .32rem;
    }
    .header li:first-child{
        text-align: left;
    }
    .header span{
        padding-left: .4rem;      
    }
    .main{
        width: 100%;
        background: #fff;
        margin-top: .5rem;
    }
    .money{
        width: 80%;
        height: 1rem;
        line-height: 1rem;  
        font-size: .28rem;
        padding-left: .5rem;
        border-bottom: 1px solid #e7e7e7;
        margin: auto
    }
    .money input{
        height: .5rem;
        border: none;
    }
    .type{
        width: 80%;
        /* background: red; */
        margin: auto;
        padding-left: .5rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        border-bottom: 1px solid #e7e7e7;
    }
    .type li{
        height: .5rem;
        line-height: .5rem;
        padding-left: .3rem;
        position: relative;
        font-size: .28rem;
    }
    .type img{
        width: .32rem;
        position: absolute;
        margin-top: .08rem;
        left: -.1rem;
    }
    .type span{
        color: #404040;
    }
    .changetype{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        /* background: red; */
        text-align: right;    
        font-size: .28rem;
    }
    .changetype span{
        padding-right: .5rem;
    }
    .next{
        width: 100%;
        text-align: center;
        margin-top: .5rem;
    }
    .next input{
        width: 80%;
        height: .7rem;  
        border-radius: .15rem;
        border: none;
        background: #ff0103;
        color: #fff;
        margin-bottom: .8rem
    }
</style>
