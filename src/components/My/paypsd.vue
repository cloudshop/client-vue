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
              <img src="../../assets/Mine/paypsd.png">
              <!-- <img src="../../assets/Mine/paypsd.png"> -->
              <p class="p1">仅用于手机支付的6位数密码</p>
              <p class="p2">（不影响其他密码的使用）</p>  
              <button class="one">我已了解</button>
          </div>
          <div class="second">
              {{yzm}}
              <p class="p3">请设置6位纯数字的支付密码</p>
              <input type="password" class="paypd" maxlength='6'>
              <button @click="two">完成</button>
          </div>
    
      </div>
  </div>
</template>
<script>
export default {
  data() {
    var reg = /^\d{6}$/;
    return {
      yzm: ""
    };
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      let routerParams = this.$route.params.dataobj;
      // 将数据放在当前组件的数据内
      this.yzm = routerParams;
    },
    two(){
         var reg = /^\d{6}$/;
      var a = $(".paypd").val();
      if (reg.test(a) == false) {
        alert("请输入六位数字作为支付密码");
      } else {
        var yzm = sessionStorage.getItem("yzm"); //session获取验证码
        var psd = $('.paypd').val()
        var datas = {
          "code": yzm,
          "password": psd
        };
        this.$axios
          .post(
            "wallet/api/wallets/update-password",
            datas 
          )
          .then(function(res) {
            if(res.status == '200'){
                alert('设置成功')
            }
          })
          .catch(function(error) {
              console.log(error)
            var cont = error.response.data.title
            alert(cont)
          });
      }
    }
  },
  mounted: function() {
    // $('.first').hide()
    // $('.second').show()
    $(".first").show();
    $(".second").hide();
    //{{$route.params.num}}
    $(".one").click(function() {
      $(".first").hide();
      $(".second").show();
      // $('.first').show()
      // $('.second').hide()
    });
  }
};
</script>

<style scoped>
.paypsd {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 0.98rem;
  line-height: 0.98rem;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  color: #2f2f2f;
}
.header li:nth-child(1) {
  text-align: left;
  margin-left: 0.3rem;
}

.center img {
  width: 80%;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.first {
  width: 100%;
  background: #fff;
  padding-bottom: 100rem;
}
.p1 {
  width: 100%;
  font-size: 0.32rem;
  text-align: center;
  color: #2f2f2f;
  margin-top: 0.5rem;
}
.p2 {
  width: 100%;
  font-size: 0.28rem;
  text-align: center;
  color: #c4c4c4;
  margin-top: 0.15rem;
}
.p3 {
  width: 100%;
  text-align: center;
  font-size: 0.28rem;
  color: #c4c4c4;
  margin-top: 1rem;
}
.paypd {
  width: 80%;
  height: 0.8rem;
  display: block;
  margin: auto;
  border: 1px solid #e7e7e7;
  margin-top: 0.5rem;
  font-size: 0.4rem;
  text-align: center;
}
button {
  width: 80%;
  border-radius: 0.5rem;
  display: block;
  margin: auto;
  border: none;
  margin-top: 0.5rem;
  background: #ff0103;
  height: 0.7rem;
  color: #fff;
}
</style>

