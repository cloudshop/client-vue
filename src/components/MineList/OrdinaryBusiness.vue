<template>
   <div class='OrdinaryBusiness'>
        <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <!-- <router-link :to="{ path: '/SellerCenter' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link> -->
                     <mt-button icon="back" @click='back'></mt-button>
              </a>
            </div> 
             <h1 class="mint-header-title">申请商家</h1>
            <div class="mint-header-button is-right"></div>
        </header>
        <div class='content'>
            <p>信息仅用于审核,绝不外泄!</p>

            <div class='main'>
               <h2>本人身份证照片</h2>
               <div class='self'>                
                <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                    :before-upload="beforeAvatarUpload2">
                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
               </div>
                
            </div>

            <div class='main'>
               <h2>本人手持身份证照片</h2>
                <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                    :before-upload="beforeAvatarUpload3">
                    <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
               <p class="photo" style="display:none">
                   <span class="front">{{idcardfront}}</span>
                   <span class="back">{{idcardback}}</span>
                   <span class="hold">{{idcardhold}}</span>
                   <span class="license">{{License}}</span>
                   <span class="shopname">{{shopname}}</span>
                </p>      
            </div>

            <div class='main'>
               <h2>企业营业执照照片</h2>
                 <el-upload
                    class="avatar-uploader"
                    action="http://app.grjf365.com:9080/file/api/ossUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess4"
                    :before-upload="beforeAvatarUpload4">
                    <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div class='store'>               
                <h2>店铺名称</h2>            
                <input type="text" placeholder="请输入店铺的名称" class="shpname">
                <button class="act">提交申请</button>
            </div>
        </div>
   </div>
</template>

<script>
import { Header } from "mint-ui";
export default {
  data() {
    return {
      imageUrl: "",
      imageUrl2: "",
      imageUrl3: "",
      imageUrl4: "",
      idcardfront: "",
      idcardback: "",
      idcardhold: "",
      License: "",
      shopname: ""
    };
  },
  methods: {
     back() {
      var msg = "请确定是否返回，返回后图片将需要重新上传";
      if (confirm(msg) == true) {
        this.$router.push({ path: "/SellerCenter" });
        // $this.$router.push({name:'SellerCenter'});
      } else {
        return false;
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res[0]);
      this.idcardfront = res[0];
    },
    handleAvatarSuccess2(res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw);
      console.log(res);
      this.idcardback = res[0];
    },
    handleAvatarSuccess3(res, file) {
      this.imageUrl3 = URL.createObjectURL(file.raw);
      console.log(res);
      this.idcardhold = res[0];
    },
    handleAvatarSuccess4(res, file) {
      this.imageUrl4 = URL.createObjectURL(file.raw);
      console.log(res);
      this.License = res[0];
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
    beforeAvatarUpload3(file) {
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
    beforeAvatarUpload4(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted: function() {

    $(".act").click(function() {
      var front = $(".front").text();
      var back = $(".back").text();
      var hold = $(".hold").text();
      var license = $(".license").text();
      var shopname = $(".shpname").val();
      if (
        front == "" ||
        back == "" ||
        hold == "" ||
        license == "" ||
        shopname == ""
      ) {
        alert("请上传照片和店铺名称");
      }else{
      alert('上传成功,请等待审核')
      var data = {
        imgIdcardFront: front,
        imgIdcardBack: back,
        imgIdcardHold: hold,
        imgLicense: license,
        name: shopname
      };
      console.log(data);

    $.ajax({
          url: "user/api/mercuries/uploadMercuryImages",
          // method:'post',
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(data),
           headers:{
                  'Content-Type': 'application/json',
                  Authorization: this.$store.getters.token
                },
          success: function(res) {
            //   alert("上传成功，等待审核")
            
            console.log(res);
            
            //top
          },
          error(res) {
            console.log(res);
          }
        });
}
    });

   
  }
};
</script>

<style scoped>
.OrdinaryBusiness {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #f5f5f5;
}
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 0.94rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #e7e7e7;
}
p {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 0.22rem;
  color: #696969;
  padding-left: 0.3rem;
}
.main {
  background: #fff;
  margin-top: 0.12rem;
  width: 100%;
  padding-bottom: 0.4rem;
}
h2 {
  font-size: 0.28rem;
  color: #2f2f2f;
  padding-left: 0.3rem;
  padding-top: 0.2rem;
}
.main .self {
  display: flex;
}
.main .self .list:nth-child(2) {
  margin-left: 0.4rem;
}
.list {
  position: relative;
  padding-top: 0.4rem;
  padding-left: 0.3rem;
  padding-bottom: 0.32rem;
}
.relative {
  position: absolute;
  top: 0.39rem;
  width: 2.4rem;
  height: 1.6rem;
  border: 1px dashed #c4c4c4;
}
.relative img {
  width: 0.78rem;
  height: 0.7rem;
  margin-left: 0.8rem;
  margin-top: 0.24rem;
  margin-bottom: 0.24rem;
  display: block;
}
.relative span {
  display: block;
  text-align: center;
  font-size: 0.24rem;
  color: #c4c4c4;
}
.file {
  width: 2.4rem;
  height: 1.6rem;
  position: relative;
  z-index: 22;
  opacity: 0;
}
.store {
  background: #fff;
  margin-top: 0.12rem;
  height: 3.03rem;
}
.store input {
  height: 0.54rem;
  width: 70%;
  border-radius: 0.11rem;
  background: #f5f5f5;
  border: 0;
  margin-left: 0.3rem;
  margin-top: 0.24rem;
  padding-left: 0.2rem;
  font-size: 0.28rem;
}
input::-webkit-input-placeholder {
  color: #b7b7b7;
}
.store button {
  display: block;
  width: 70%;
  margin-left: 15%;
  margin-top: 0.6rem;
  height: 0.8rem;
  border-radius: 0.12rem;
  background: #0bacff;
  border: 0;
  font-size: 0.32rem;
  color: #fffefe;
}
.avatar-uploader {
  /* background: red; */
  width: 1.78rem;
  height: 1.78rem;
  border: 1px dashed #d9d9d9;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
}

.avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 1.78rem;
  height: 1.78rem;
  line-height: 1.78rem;
  text-align: center;
}
.avatar {
  width: 1.78rem;
  height: 1.78rem;
  display: block;
}
</style>
