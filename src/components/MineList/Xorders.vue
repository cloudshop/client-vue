<template>
    <div class="Xorder">
        <div class="shopping_head">
        <div class="shopping_header">
            <p @click='close'>&lt;</p>
            <p>线下支付</p>
            <p></p>
        </div>
    </div>
        <div style="display:none">
              <span class="photo1">{{title1}}</span>
              <span class="photo2">{{title2}}</span>
            </div>
        <div class="main">
            <p>注：您当前的账户余额不得少于服务费</p>
            <p>你的余额&#12288;：<span>{{money}}</span></p>
            <p>用户手机&#12288;：<input type="text" maxlength="11" id="phone"></p>
            <p>订单金额&#12288;：<input type="text" id="ordermoney" v-model="ordermoney" maxlength="7"></p>
            <p>服务费比例：<input type="text" id="letmoney" placeholder="让利范围在12%～98%之间" v-model="msg" maxlength="2"></p>
            <p>服务费金额：<span class="mone">{{msg*ordermoney/100}}</span> <br>  小票凭证:</p>
            <!-- <p class="test">小票凭证：</p> -->
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
        <div class="msg" v-show="bol">
              <div class="succeed">
                <h3>提示</h3>
                <p>提交成功</p>
                <!-- <p>系统升级中，稍后再试</p> -->
                <router-link to="/Mine">确定</router-link>
              </div>
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
      id:'',
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
     close(){
            var  val={
                "func":"closeCurrent",
                "param":{'finallyIndex':4},
            };
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if(isiOS){
                window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            }else if(isAndroid){  
                window.androidObject.JSCallAndroid(JSON.stringify(val));
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
      var that = this
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
          // this.bol = true;
          // alert('服务器维护中')
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
            // alert('提交成功')
            // that.bol = true;
            var a = res.data
            if( a == 'jb' ){
              alert('用户手机号不得为商户自身号码')
            }else if( a == 'ok' ){
               that.bol = true;
            }
          })
          .catch(function(error){
            console.log(error);
             alert('服务器错误')
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
.shopping_head{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
}
.shopping_header{
  flex-shrink: 0;
  width: 92%;
  margin-left: 4%;
  height: .96rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
} 
.shopping_header p:nth-child(1){
  font-size: .32rem;
}
.shopping_header p:nth-child(2){
  font-size: .32rem;
}
.shopping_header p:nth-child(3){
  width:.5rem;
  height:.5rem;
  position: relative;
}
.shopping_header p:nth-child(3) img{
  width: 100%;
  height: 100%;
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
.main p:nth-child(7) {
  padding-left: 0;
}
.main p input {
  width: 60%;
  height: 0.6rem;
  border: 0.02rem solid #d2d2d2;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
}
.main p:nth-child(8) {
  text-align: center;
  margin-top: 0.8rem;
}
.main p:nth-child(8) input {
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
.msg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.succeed{
  width: 86%;
  height: 2.5rem;
  position: absolute;
  left: 7%;
  top: 40%;
  z-index: 10;
  background: #fff;
  border-radius: 0.1rem;
}
h3{
  font-size: 0.3rem;
  line-height: 0.9rem;
  padding: 0 0.4rem;
}
.msg p{
  line-height: 0.8rem;
  font-size: 0.25rem;
  font-weight: 600;
  padding-left: .4rem
}
.msg a{
  display: block;
  text-align: right;
  padding: 0 0.4rem;
  color: red;
  font-weight: 600;
}
</style>
