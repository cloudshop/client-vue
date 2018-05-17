<template>
    <div class="Xorder">
        <header class="mint-header header">
           <div class="mint-header-button is-left">
               <mt-button icon="back" @click="back"></mt-button>
            </div> 
             <h1 class="mint-header-title">现金支付</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div style="display:none">
              <span class="photo1">{{title1}}</span>
              <span class="photo2">{{title2}}</span>
            </div>
        <div class="main">
            <p>注：您当前的账户余额不得少于让利金额</p>
            <p>你的余额：<span>{{money}}</span></p>
            <p>用户手机：<input type="text" maxlength="11" id="phone"></p>
            <p>订单金额：<input type="text" id="ordermoney" v-model="ordermoney" maxlength="7"></p>
            <p>服务费&nbsp;&nbsp;：<input type="text" id="letmoney" placeholder="让利范围在12%～98%之间" v-model="msg" maxlength="2"></p>
            <p>让利金额：<span class="mone">{{msg*ordermoney/100}}</span> <br>  小票凭证:</p>
            <!--<p class="test">小票凭证：</p>-->
            <p class="upload">
              <span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </span>
              <span>
                  <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload2">
                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </span>
            </p>
            <p><input type="button" value="提交" @click="sub"></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      imageUrl2: "",
      title1:'',
      title2:'',
      bol: false,
      money: "",
      msg: "",
      ordermoney: "",
      id:''
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("wallet/api/wallets/user")
      .then(function(res) {
        that.money = res.data.balance;
        that.id = res.data.userid
      
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    lets(){
      console.log("123")
    },
    back() {
      var msg = "请确定是否返回，返回后图片将需要重新上传";
      if (confirm(msg) == true) {
        this.$router.push({ path: "/mine" });
        // $this.$router.push({name:'SellerCenter'});
      } else {
        return false;
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res);
      this.title1 = res[0];
    },
    handleAvatarSuccess2(res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw);
      console.log(res);
      this.title2 = res[0];
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    beforeAvatarUpload2(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    sub() {
      var useid = this.id
      var ban = this.money
      var tel = $("#phone").val();
      var money1 = $("#ordermoney").val();
      var letmon = $("#letmoney").val();
      var title1 = $('.photo1').text()
      var title2 = $('.photo2').text()
      var mo = $('.mone').text()
      var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        // if(tel == '' || title1== '' || title2== ''){

       if(ban < mo){
         alert('余额不足')
       }else{
           if(tel == ''|| title1== '' || title2== ''){
             alert('请输入完整信息')
        }else{
          if(p1.test(tel)==false){
            alert('请输入正确手机号')
          }
          if(letmon <12 || letmon >98){
        alert('让利比例需在12%～98%之间')
      }else{
          var letmoney = money1*letmon/100
          var data = {
              ment:money1,
              phone:tel,
              title:title1,
              title2:title2,
              userId:useid,
              // userId:3,
              transferAmount: mo
          }
           this.$axios
          .post("commission/api/user-annexes-offlineParams",data)
          
          // .post("commission/api/user-annexes-offlineParams",data)
          .then(function(res) {
            console.log(res);
            alert('提交成功')
            this.$router.push({ path: "/mine" });
          })
          .catch(function(error){
            console.log(error);
          });
      }
        }
      
       }   
          
      
    },
    
  },
  mounted: function() {
    $("#letmoney").focus(function() {
      if ($("#ordermoney").val() == "") {
        alert("请输入订单金额");
        $("#ordermoney").focus();
      }
    });
 
  }
};
</script>
<style scoped>
.back {
  background: none;
  border: 1px solid #fff;
}
.header {
  background: #fff;
  color: #2f2f2f;
  border-bottom: 0.01rem solid #efefef;
}
.main {
  width: 100%;
  background: #fff;
  height: 100%;
}
.main p {
  height: 0.9rem;
  line-height: 0.9rem;
  padding-left: 0.4rem;
  font-size: 0.28rem;
  color: rgb(102, 102, 102);
}
.main p:nth-child(8) {
  padding-left: 0;
}
.main p input {
  width: 60%;
  height: 0.6rem;
  border: 0.02rem solid #d2d2d2;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
}
.main p:nth-child(9) {
  text-align: center;
  margin-top: 0.8rem;
}
.main p:nth-child(9) input {
  height: 0.7rem;
  background: #ff0103;
  border: none;
  color: #fff;
}
.upload {
  display: flex;
  padding: -0.4rem;
  margin-top: 1rem
}
.upload span {
  flex: 1;
  text-align: center;
  display: block;
}
/* .upload span img {
  width: 100%;
  height: 100%;
} */
.avatar-uploader {
  width: 50%;
  margin: auto;
  line-height: 1.2rem;
  height: 1.2rem;
  overflow: hidden;
  border: 1px solid #ccc;
}
.avatar-uploader img{
  width: 100%;
  height: 100%;
}
</style>
