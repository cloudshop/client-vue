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
            <div class="mint-header-button is-right" id="sure">确认</div>
        </header>
       <mt-field placeholder="请输入昵称" v-model="name" id="nickname"></mt-field>
       <p class='hint'>4-10个字符,可由中英文,数字组成。</p>
       <div class="q" v-show="bol">
         <div class="msg">
         <h4>提示：</h4>
          <p>修改成功</p>
          <router-link :to="{path:'/Information'}">确定</router-link>
       </div>
    </div>
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
      popupVisible: true,
      Nickname:"",
      bol:false
    };
  },
  mounted: function() {
    var that = this;
    // var bol = false;
    console.log(that.bol)
    $("#sure").click(function() {
      // this.bol = true;
      // console.log(this.bol)
      var nickname = $(".mint-field-core").val();
      var data = {
        nickname: nickname,
        type: 2
      };
      axios({
        method: "post",
        url:"user/api/user-annexes-useregis/updaUserInfo/",
        data
      })
      .then(function(res) {
        console.log(res);
        //alert('修改成功')
        that.bol = true;
        console.log(that.bol)
      })
      .catch(function(error) {
        console.log(error);
      })
    })
  },
  methods: {
    
  },
  created(){
    this.Nickname = this.$route.params.nickname;
// console.log(this.Nickname);
    this.name = this.Nickname;
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
.q{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(0,0,0,0.2);
}
.msg{
  width: 80%;
  height: 2.1rem;
  position: absolute;
  left: 5%;
  top: 40%;
  z-index: 10;
  padding: 0 5%;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 0.15rem;
}
.msg h4{
  font-size: 0.3rem;
  line-break: 0.5rem;
  line-height: 0.8rem;
}
.msg p{
  height: 0.6rem;
  font-size: 0.24rem;
  font-size: 0.25rem;
}
.msg a{
  display: block;
  width: 20%;
  height: 0.5rem; 
  text-align: center;
  line-height: 0.5rem;
  color: #f00;
  float: right;
  font-size: 0.24rem;
}
</style>
