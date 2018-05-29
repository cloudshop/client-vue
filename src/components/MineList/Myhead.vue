<template>
   <div class='OrdinaryBusiness'>
        <header class="mint-header">
            <div class="mint-header-button is-left">
                <a class="router-link-active">
                    <mt-button icon="back" @click='back'></mt-button>
                </a>
            </div> 
            <h1 class="mint-header-title">修改头像</h1>
            <div class="mint-header-button is-right" @click="sub">确认</div>
        </header>
        <div class='content'>
            <div class='main'>
                <div class='self'>                
                    <el-upload
                        class="avatar-uploader"
                        action="http://app.grjf365.com:9080/file/api/ossUpload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess5"
                        :before-upload="beforeAvatarUpload5">
                        <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
               </div> 
            </div>
        </div>
        <div class="msg" v-show="bo">
            <div class="succeed">
                <h3>提示</h3>
                <p>请上传头像</p>
                <span @click="bo=false">确定</span>
            </div>
        </div>
        <div class="msg" v-show="bol">
            <div class="succeed">
                <h3>提示</h3>
                <p>修改成功</p>
                <span @click="backMine">确定</span>
            </div>
        </div>
   </div>
</template>

<script>
import { Header } from "mint-ui";
export default {
	data() {
	    return {
	      imageUrl5: "",
	      bol : false,
	      headImg:"",
          id:"",
          bo:false
	    };
	},
	created(){
		this.id = this.$route.params.id;
	},
	methods: {
	    backMine(){
	        this.$router.push({ path: "/information" });
	    },
	     back() {
	        var msg = "请确定是否返回，返回后图片将需要重新上传";
	        if (confirm(msg) == true) {
	            this.$router.push({ path: "/information" });
	        } else {
	            return false;
	        }
	    },
	    // 上传头像
	    handleAvatarSuccess5(res, file) {
	        this.imageUrl5 = URL.createObjectURL(file.raw);
//	        console.log(this.imageUrl5);
//	        console.log(res);
	        this.idcardfront5 = res[0];
//	        console.log(this.idcardfront5);
	    },
	    beforeAvatarUpload5(file) {
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
	    sub(){
	        if (this.idcardfront5 == undefined) {
                this.bo = true;
            } else {
                this.bol = true;
                var data = {
                    id:this.id,
                    avatar:this.idcardfront5,
                    type: 0
                };
                console.log(data);
                this.$axios
                    .post("user/api/user-annexes-useregis/updaUserInfo",data)
                    .then(function(res) {
                        console.log(res);
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            }
	    }
	}
};
</script>


<style scoped>
.OrdinaryBusiness {
  width: 100%;
  height: 100%;
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
.main {
  background: #fff;
  margin-top: 0.12rem;
  width: 100%;
  padding: 0.3rem 0;
}

.avatar-uploader {
  width: 1.78rem;
  height: 1.78rem;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  margin-left: 0.4rem;
}
/* .avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
} */
/* .avatar-uploader .el-upload:hover {
  border-color: #409eff;
} */
.mint-header-button{
font-size: 0.25rem;
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
  border-radius: 50%;
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
  padding-left: 0.5rem;
}
.msg span{
  display: block;
  text-align: right;
  padding: 0 0.4rem;
  color: red;
  font-weight: 600;
}
</style>
