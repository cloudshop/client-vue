<template>
    <div>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <router-link :to="{ path: '/Information' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">昵称设置</h1>
            <div class="mint-header-button is-right" id="sure" @click="determine()">确认</div>
        </header>
       <mt-field placeholder="请输入昵称" v-model="name" id="nickname"></mt-field>
       <p class='hint'>4-10个字符,可由中英文,数字组成。</p>
    </div>
</template>

<script>
import { Header, Field } from "mint-ui";
import axios from 'axios';
export default {
  data() {
    return {
      name: "",
      sure: "",
      popupVisible: true
    };
  },
  mounted: function() {
    $("#sure").click(function() {
      var nickname = $(".mint-field-core").val();
      // var nickname = $('.mint-field-core').val()
      //var data = { "avatar" :nickname,"type":2,"id":3 };
      var data = {
        nickname: nickname,
        type: 2
      };
      // console.log(data);
      axios({
        method: "post",
        url:"user/api/user-annexes-useregis/updaUserInfo/",
        data
      })
      .then(function(res) {
        console.log(res);
        alert('修改成功')
      })
      .catch(function(error) {
        console.log(error);
      })
    })
  },
  methods: {
    // DataValidations() {
    //   if (/^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,10}$/.test(this.name)) {
    //     alert("匹配正确");
    //   }
    // }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  background: #fff;
  color: #000;
  height: 0.94rem;
  border-bottom: 1px solid #e7e7e7;
  font-size: 0.32rem;
}
.mint-header-title {
  font-size: 0.32rem;
}
.mint-header-button {
  font-size: 0.28rem;
  color: #676767;
}
.hint {
  font-size: 0.2rem;
  color: #c4c4c4;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
</style>
