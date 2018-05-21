<template>
    <div class="Approve">
        <header><span @click="backMine">&lt;</span>实名认证</header>
        <div class="main">
            <p>
            	<label for="">姓名：</label>
            	<input type="text" id="name" v-model="realName">
            </p>
            <p>
            	<label for="">身份证号：</label>
            	<input type="text" id="number" v-model="idnuber">
            </p>
            <p>
            	<span>身份证正面照片:</span>
            	<span class="Pic">
	                <el-upload
	                    class="avatar-uploader"
	                    action="http://app.grjf365.com:9080/file/api/ossUpload"
	                    :show-file-list="false"
	                    :on-success="handleAvatarSuccess"
	                    :before-upload="beforeAvatarUpload">
	                    <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="imageUrl">
	                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	                </el-upload>
                </span>
            </p>
            <p>
            	<span>身份证反面照片:</span>
				<span class="Pic">
	                <el-upload
	                    class="avatar-uploader"
	                    action="http://app.grjf365.com:9080/file/api/ossUpload"
	                    :show-file-list="false"
	                    :on-success="handleAvatarSuccess2"
	                    :before-upload="beforeAvatarUpload2">
	                    <img v-if="imageUrl2" :src="imageUrl2" class="avatar" v-model="imageUrl2">
	                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	                </el-upload>
                </span>
            </p>
            <p></p>
            <p>
            	<button @click="submit" v-show="b=0?true:false">提交</button>
            	<button @click="reset" v-show="b=1?true:false">提交</button>
            </p>
        </div>
        <div class="msg" v-show="bol">
            <div class="succeed">
            <h3>提示</h3>
            <p>提交审核中</p>
            <span @click="backMine">确定</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
	    return {
	    	realName:"",
	    	idnuber:"",
	    	frontImg:"",
	    	reverseImg:"",
	    	imageUrl: "",
	    	imageUrl2: "",
	    	bol:false,
	    	b:""
	    };
  	},
  	created(){
  		console.log(this.$route.params.b);
  		this.b = this.$route.params.b;
  	},
  	methods:{
  		// 上传身份证照片
	    handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
//	        console.log(this.imageUrl);
	        console.log(res);
	        this.idcardfront = res[0];
	        console.log(this.idcardfront)
	    },
	    handleAvatarSuccess2(res, file) {
	        this.imageUrl2 = URL.createObjectURL(file.raw);
	        console.log(this.imageUrl2);
	        console.log(res);
	        this.idcardfront2 = res[0];
	        console.log(this.idcardfront2)
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
//	        提交认证信息
  		submit() {
			if (this.realName==""||this.realNumber==""||this.imageUrl==""||this.imageUrl2=="") {
				alert("填写不完善");
			} else{
				var datas={
	  				realName:this.realName,
	  				idnuber:this.idnuber,
	  				frontImg:this.idcardfront,
	  				reverseImg:this.idcardfront2
	  			}
	  			console.log(datas);
				this.$axios
			    .post(
	                "user/api/authentication",
	                datas
	            )
			    .then(function(res) {
			        console.log(res);
			        this.bol = true;
			        
			    })
			    .catch(function(error) {
			        console.log(error);
			    });
			}
	    },
  		reset() {
			if (this.realName==""||this.realNumber==""||this.imageUrl==""||this.imageUrl2=="") {
				alert("填写不完善");
			} else{
				var datas={
	  				realName:this.realName,
	  				idnuber:this.idnuber,
	  				frontImg:this.idcardfront,
	  				reverseImg:this.idcardfront2
	  			}
	  			console.log(datas);
				this.$axios
			    .put(
	                "user/api/my-auth/update",
	                datas
	            )
			    .then(function(res) {
			        console.log(res);
			        this.bol = true;
			        
			    })
			    .catch(function(error) {
			        console.log(error);
			    });
			}
	    },
	    backMine(){
	        this.$router.push({ path: "/information" });
	    },
  	}
}
</script>

<style scoped>
.Approve{
	font-size: 0.25rem;
}
header{
	width: 100%;
	height: 7vh;
	text-align: center;
	line-height: 7vh;
	background: #fff;
	border-bottom: 2px solid #bbb;
	font-size: 0.3rem;
}
header span{
	position: absolute;
	left: 7%;
	top: 0;
}
.main{
	width: 100;
	height: 93vh;
	background: #fff;
	padding-top: 10vh;
}
p{
	padding: 0 5%;
	line-height: 7vh;
	display: flex;
}
p:nth-of-type(1){
	justify-content: space-between;
}
p:nth-of-type(2){
	justify-content: space-between;
}
p label{
	width: 30%;
}
p input{
	width: 60%;
	height: 5vh;
	border: 1px solid #555;
	margin: 1vh 0;
	padding: 0 5%;
}
p:nth-of-type(3){
	margin: 6vh 0;
}
p:nth-of-type(4){
	margin: 6vh 0;
}
p span:first-child{
	width: 38;
	line-height: 11vh;
}
p span:last-child{
	width: 36%;
	height: 11vh;
	margin: 0 5%;
	background: #eee;
	border: 1px solid #555;
}
.avatar-uploader {
    width: 100%;
    height: 11vh;
    text-align: center;
}
.avatar-uploader-icon {
	font-size: 0.5rem;
	color: #8c939d;
	width: 1.8rem;
	height: 1.8rem;
	line-height: 11vh;
}
.avatar {
    width: 100%;
	height: 11vh;
}
p:last-child{
	margin: 0.6rem 0;
}
p button{
	width: 40%;
	height: 0.5rem;
	text-align: center;
	margin: 0 30%;
	/*padding: 0.1rem 1rem;*/
	border: 1px solid #555;
	border-radius: 0.1rem;
	background: #eee;
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


