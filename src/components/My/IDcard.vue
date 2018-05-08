<template>
  <div class="ID">
      <header class="header">
         <ul>
             <router-link :to="{ path: '/ID' }" tag='li'>&lt;</router-link>
             <li>身份验证</li>
             <li><span></span></li>
         </ul>
      </header>
      <div class="center">
          <p class="p1">为了账户安全,需验证手机号: <span class="phone"></span></p>
          <!-- <p class="p2">
              <input type="text" placeholder="请输入您的手机号" maxlength="11" id="tel">
          </p> -->
          <p class="p2">
              <input type="text" maxlength='6' class="yzm">
              <span @click='send'>点击发送验证码</span>               
          </p>
           <button @click="next">下一步</button>
          <router-link to="setpaypsd">
             
          </router-link>
            <!-- <router-link to="setpaypsd" ,params:{num:hide()}> <button class="1">下一步</button></router-link> -->
         <!-- <router-link :to="{ name: 'setpaypsd',params:{num:'hide'} }"><button class="1">下一步</button></router-link> -->
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type,
      phone: ""
    };
  },
  created() {
    this.$axios
      .get("api/user/api/user-annexes/userInfo")
      .then(function(res) {
        //    console.log(res.data.phone);
        var tel = res.data.phone;
        $(".phone").text(tel);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods:{
    send(){
        this.$axios
          .get("api/verify/api/verify/smscode/wallet")
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error){
            console.log(error);
          });
    },
    next(){
      if($('.yzm').val()== '' || $('.yzm').val().length<6){
          alert('请输入6位验证码')
      }else{
        this.$router.push({path:'/setpaypsd'});
        var num = $('.yzm').val()
        sessionStorage.setItem("yzm",num);
        // this.$router.push({
        //     // path: 'yourPath', 
        //     name: 'setpaypsd',
        //     params: { 
        //         name: 'name', 
        //         dataObj: num
        //     }
        //     /*query: {
        //         name: 'name', 
        //         dataObj: this.msg
        //     }*/
        // })
      }
    }
  },
  mounted: function() {
    // var telnum = $('#tel').val();
    var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    $(".send").click(function() {
      //top
      $.ajax({
        url: "api/verify/api/verify/smscode/wallet",
        method: "get",
        success: function(res) {
          console.log(res);
        },
        error(res) {
          console.log(res);
        }
      });
      //bottom

    });
  }
};
</script>

<style scoped>
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
.p1 {
  width: 100%;
  height: 0.96rem;
  line-height: 0.96rem;
  padding-left: 0.3rem;
  font-size: 0.28rem;
  color: #c4c4c4;
}
.p2 {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  position: relative;
  margin-top: 0.2rem;
}
.p2 input {
  height: 0.8rem;
  padding-left: 0.3rem;
  border: none;
  position: relative;
  font-size: 0.32rem;
}
.p2 span {
  display: inline-block;
  vertical-align: middle;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 1px solid #ff0103;
  /* right: .4rem; */
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  color: #ff0103;
  position: absolute;
  top: 0.12rem;
  right: 0.4rem;
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
