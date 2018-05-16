<template>
  <div>
      <header class="header">
          <ul> 
              <router-link :to="{ path: '/MyAddress' }" tag='li'>&lt;</router-link>
              <li>编辑收货地址</li>
              <li><span @click="del">删除</span></li>
          </ul>
      </header>
      <div class="center">
          <ul>
              <li>姓名：<input type="text" v-model="name" id="name"></li>
              <li>电话：<input type="tel" v-model="phone" id="tel"></li>
              
          </ul>
          <p><img src="../../assets/manage/添加联系人.png"></p>
      </div>
      <ul class="bottom">
          <li>详细地址：<input type="text" v-model="address" id="address_big"></li>    
      </ul>  
      <!-- 添加地址 -->
      <div class="button" v-show="bol">
          <button @click="save">保存</button>
      </div>
      <!-- 修改地址 -->
      <div class="button" v-show="!bol">
          <button @click="reset">保存</button>
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
      dataObj:"",
      bol:"",
      id:"",
      obj:""
    };
    var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  },
  created(){
    this.bol = this.$route.params.bol;
    console.log(this.bol);
    this.dataObj = this.$route.params.dataObj;
    this.phone = this.dataObj.phone;
    this.name = this.dataObj.contact;
    this.address = this.dataObj.city;
    this.id = this.dataObj.id;
  },
  methods: {
    // 删除 清空
    del: function() {
      this.name = "";
      this.phone = "";
      this.address = "";
    },
    closeEditAddress: function() {
      this.$parent.$parent.EditAddress = false;
    },
    getParams() {
      // 取到路由带过来的参数
      let routerParams = this.$route.params.dataobj;
      // 将数据放在当前组件的数据内
      this.msg = routerParams;
    },
    // 添加地址
    save() {
      this.obj = {
        name : this.name,
        phone :this.phone,
        address : this.address,
        id : this.id
      }
      // console.log(this.obj);
      this.$router.push({name:"MyAddress",params:{obj:this.obj}});
      if (
        $("#name").val() == "" ||
        $("#tel").val() == "" ||
        $("#address_big").val() == ""
      ) {
        alert("请填写收货信息");
      } else {
        var a = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        var b = $("#tel").val();
        if (a.test(b) == false) {
          alert("您的手机号码未输入或输入有误");
        } else {
          // var data = {"contact":this.name,"phone":this.phone,}
          var datas = {
            "contact": this.name,
            "city": this.address,
            "phone": this.phone,
            userAnnex: {
              avatar: "string"
            }
          };
          console.log(datas)
          this.$axios
            .post(
              "user/api/user-annexes-createAddress",
              datas
            )
            .then(function(res) {
              console.log(res);
            })
            .catch(function(error) {
              console.log(error);
            });
          $("#name").val(""), $("#tel").val(""), $("#address_big").val("");
        }
      }
    },
    // 修改地址
    reset() {
      this.obj = {
        name : this.name,
        phone :this.phone,
        address : this.address,
        id : this.id
      }
      // console.log(this.obj);
      this.$router.push({name:"MyAddress",params:{obj:this.obj}});
      if (
        $("#name").val() == "" ||
        $("#tel").val() == "" ||
        $("#address_big").val() == ""
      ) {
        alert("请填写收货信息");
      } else {
        var a = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        var b = $("#tel").val();
        if (a.test(b) == false) {
          alert("您的手机号码未输入或输入有误");
        } else {
          var datas = {
            "contact": this.name,
            "city": this.address,
            "phone": this.phone,
            "id": this.id,
            userAnnex: {
              avatar: "string"
            }
          };
          console.log(datas);
          this.$axios
            .post(
              "user/api/user-annexes-upstateAddress",

              datas
            )
            .then(function(res) {
              console.log(res);
            })
            .catch(function(error) {
              console.log(error);
            });
          $("#name").val(""), $("#tel").val(""), $("#address_big").val("");
        }
      }
    },
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.96rem;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  font-size: 0.32rem;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  line-height: 0.96rem;
  text-align: center;
}
.header li:nth-child(1) {
  text-align: left;
  margin-left: 0.3rem;
}
.header li:nth-child(3) {
  text-align: right;
  margin-right: 0.3rem;
  color: #676767;
  font-size: 0.28rem;
}
.center {
  display: flex;
}
.center ul {
  flex: 2;
  float: left;
}
.center li {
  height: 0.96rem;
  line-height: 0.96rem;
  padding-left: 0.3rem;
  font-size: 0.28rem;
  color: #676767;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
}
.center p {
  flex: 1;
  width: 1.68rem;
  height: 1.92rem;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  border-left: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
}
.center img {
  width: 70%;
  height: 70%;
  margin-top: 0.3rem;
}
.center input {
  width: 3rem;
  margin-top: 0.15rem;
  height: 0.5rem;
  font-size: 0.28rem;
  color: #2f2f2f;
  border: none;
  outline: none;
}
.bottom {
  width: 100%;
}
.bottom li {
  height: 0.96rem;
  line-height: 0.96rem;
  padding-left: 0.3rem;
  font-size: 0.28rem;
  color: #676767;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
}
.bottom input {
  width: 3rem;
  margin-top: 0.15rem;
  height: 0.5rem;
  font-size: 0.28rem;
  color: #2f2f2f;
  border: none;
  outline: none;
}
.button {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 1rem;
}
button {
  width: 3.26rem;
  height: 0.8rem;
  color: #fff;
  border: none;
  background: #ff0103;
  border-radius: 0.15rem;
}
#address_big {
  width: 70%;
}
</style>
