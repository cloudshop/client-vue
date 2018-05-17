<template>
    <div class="cash">
        <header class="mint-header header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">提现</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class="main">
            <h2 class="h2">提示:请务必填写正确的提现信息！如因您所填写提现信息错误造成的资金损失，贡融平台概不负责。</h2>
            <p>
                银行卡号：&#12288;&#12288;<input type="text" class="card">
            </p>
            <p>
                银行卡开户行：<input type="text" class="bank">
            </p>
            <p>
                持卡人姓名：&#12288;<input type="text" class="username">
            </p>
            <p>
                提现金额：&#12288;&#12288;<input type="text" class="number" placeholder="提现金额只能是100的整数倍">
            </p>
            <p class="ppp">
                <button @click="sub" class="btn">提交</button>
            </p>
        </div>
        <div class="password">
          <div class="password_bottom">
              <span @click="del">×</span>
              <p class="password_p">
                  <input type="password" maxlength="6" id="psd" v-model="psd" placeholder="请输入支付密码">
              </p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      name: "",
      phone: "",
      address: "",
      psd: ""
    };
    var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  },
  methods: {
    sub() {
      var cardnum = $(".card").val();
      var bank = $(".bank").val();
      var username = $(".username").val();
      var number = $(".number").val();
      if (cardnum == "" || bank == "" || username == "" || number == "") {
        alert("请填全信息");
      } else {
        if (!isNaN(number)) {
          number = 1 * number;
          if (number > 0 && number % 100 == 0) {
            $(".password").fadeIn(300);
          } else alert("提现金额需要是100的整数倍");
        }
        // $('.password').fadeIn(300)
        var data = {
          card: cardnum,
          bank: bank,
          name: username,
          number: number
        };
      }
    },
    del() {
      $(".password").fadeOut(200);
    }
  },
  watch: {
    psd(curVal) {
      if (curVal.length == 6) {
        var cardnum = $(".card").val();
        var bank = $(".bank").val();
        var username = $(".username").val();
        var number = $(".number").val();
        var psd = curVal;
        var data = {
          bankcardNumber: cardnum,
          openingBank: bank,
          cardholder: username,
          money: number,
          password: psd
        };
        console.log(data);
        this.$axios
          .post("wallet/api/put-forward", data)
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style scoped>
.cash {
  width: 100%;
  height: 100%;
}
.header {
  height: 0.9rem;
  background: #fff;
  color: #2f2f2f;
  overflow: hidden;
  border-bottom: 0.01rem solid #e7e7e7;
}
.main {
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.main p {
  height: 1.2rem;
  font-size: 0.3rem;
  line-height: 1.2rem;
  padding-left: 0.28rem;
  border-bottom: 0.01rem solid #e7e7e7;
}
.main p input {
  width: 60%;
  padding-left: 0.2rem;
  height: 0.7rem;
  font-size: 0.3rem;
  border: 1px solid #e7e7e7;
}
.main p:last-child {
  text-align: center;
  border: none;
  margin-top: 1rem;
}
.main p button {
  margin: 0 auto;
  width: 3.5rem;
  height: 0.9rem;
  background: #ff0103;
  border: none;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 0.1rem;
}
h2 {
  line-height: 0.4rem;
  font-style: normal;
  font-weight: normal;
  padding-left: 0.3rem;
  font-size: 0.26rem;
  border-bottom: 0.01rem solid #e7e7e7;
  color: red;
}
.password {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.password_bottom {
  width: 100%;
  height: 50%;
  background: #fff;
  position: fixed;
  bottom: 0;
}
.password_p {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  /* background: #ccc; */
  text-align: center;
}
.password_p input {
  text-align: center;
  width: 3rem;
  height: 0.7rem;
  border: 1px solid #ccc;
}
.password_bottom span {
  display: inline-block;
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  position: absolute;
  float: right;
  font-size: 0.5rem;
  right: 0;
  color: #ccc;
}
</style>
