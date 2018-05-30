<template>
  <div class="manage">
    <div class="header">
      <ul>
        <li @click='PreviousMenu'>&lt;</li>
        <li>管理收货地址</li>
        <li>&nbsp;</li>
      </ul>
    </div>
    <div class="main">
      <ul v-for="(item,index) in arr" :key='index' class="list">
        <li>
          <span class="name"><em>{{item.contact}}</em></span>
          <span class="tel"><rp>{{item.phone}}</rp></span>
        </li>
        <li class="address">
          {{item.city}}
        </li>
        <li>
          <span class="addlist">       
              <input type="radio" :id="'adress-0'+item.id" name="sex" :checked="item.checked"/>
              <label :for="'adress-0'+item.id" @click="changeDefaultAdd(item)"></label>
              默认地址
              <p>
                  <i>{{item.id}}</i>
                  <b @click="sendParams(item)" style="color:#667766"><img src="../../assets/manage/编辑.png">编辑</b>
                  <b @click="display($event)"><img src="../../assets/manage/删除.png">删除</b>
              </p>
            </span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <router-link :to="{ name: 'AddAddress',params:{bol:true} }" tag='button'>＋新建地址</router-link>
    </div>
    <!-- 编辑收货地址 -->
    <mt-popup v-model="EditAddress" position="right" :modal=false>
      <AddAddress></AddAddress>
    </mt-popup>
    <div class="del">
      <div>
        确定删除地址吗？
      </div>
      <p>
        <span class="no" @click="cancel">取消</span>
        <span class="yes" @click="q">确定</span>
      </p>
    </div>
  </div>
</template>
<script>
import AddAddress from "../MineList/AddAddress";

import { Header, Cell, Actionsheet, Popup, Toast } from "mint-ui";
export default {
  data() {
    return {
      arr: "",
      msg: "test message",
      EditAddress: false,
      init: null,
      name: "",
      type: "",
      Addressid: "",
      bol: ""
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("user/api/delivery-addresses-list")
      .then(function(res) {
        that.arr = [];
        var le = res.data.length;
        for (var i = 0; i < le; i++) {
          that.arr.push(res.data[i]);
          console.log(that.arr)
          for (var j = 0; j < that.arr.length; j++) {
            if (that.arr[i].default_address == 0) {
              that.arr[i].checked = true;
              break;
            } else {
              that.arr[i].checked = false;
            }
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  methods: {
    closeAddress: function() {
      this.$parent.$parent.address = false;
    },
    EditAddressOpen: function() {
      this.EditAddress = true;
    },
    //更改默认地址
    changeDefaultAdd(item) {
      this.$axios
        .get(
          "user/api/user-annexes-updateAddress/" + item.id
        )
        .then((res) => {
          Toast('修改默认地址成功');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //删除地址事件
    display(a) {
      var that = this;
      that.type = b;
      var b = $(a.target)
        .parent()
        .find("i")
        .text();
      // +$(".del").show();
      console.log(b);
      var r = confirm("确定删除地址吗？");
      if (r == true) {
        var datas = {
          id: b,
          userAnnex: {
            avatar: "string"
          }
        };
        this.$axios
          .post(
            "user/api/user-annexes-deleteAddress",
            datas
          )
          .then(function(res) {
            that.arr = res.data;
            window.location.reload();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {

      }
    },
    //取消事件
    cancel() {
      $(".del").hide();
    },
    //确定事件
    q() {
      let index = this.items.indexOf(this.init);
      this.items.splice(index, 1);
      $(".del").hide();
    },
    //编辑地址
    sendParams(a) {
      var that = this;
      this.$router.push({
        path: "/AddAddress",
        name: "AddAddress",
        params: {
          bol: false,
          dataObj: a
        }
      });
    },
    PreviousMenu() {
      if (this.$route.params.address == "/ConfirmAnOrder") {
        this.$router.push({ name: "ConfirmAnOrder" });
      } else {
        this.$router.push({ name: "Information" });
      }
    }
  },
  components: {
    AddAddress
  }
};

</script>
<style scoped>
.addlist i {
  display: none;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
}

.manage {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 0.96rem;
  background: #fff;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #e7e7e7;
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
  padding-left: 0.3rem;
  font-size: 0.32rem;
}

.header li:nth-child(2) {
  font-size: 0.32rem;
}

.main {
  flex: 1;
  width: 100%;
  height: 100%;

  overflow: auto;
}

.main ul {
  margin-top: 0.2rem;
}

.main ul:nth-child(1) {
  margin-top: 0.96rem;
}

.main ul:last-child {
  margin-bottom: 0.96rem;
}

.main li {
  background: #fff;
}

.main li:nth-child(1) {
  padding-top: 0.35rem;
}

.main li:nth-child(1) span {
  font-size: 0.28rem;
}

.name {
  padding-left: 0.3rem;
}

.tel {
  padding-left: 0.5rem;
}

.main li:nth-child(2) {
  font-size: 0.24rem;
  color: #667766;
  padding-left: 0.3rem;
  padding-top: 0.25rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid #e7e7e7;
}

.main li:nth-child(3) {
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.3rem;
  color: #676767;
  font-size: 0.24rem;
  position: relative;
}

.main li:nth-child(3) input {
  display: none;
  padding-left: 0.3rem;
}

.main li:nth-child(3) p {
  display: inline-block;
  width: 80%;
  position: absolute;
  font-weight: normal;
  right: 0;
  text-align: right;
  padding-right: 0.3rem;
}

.main li:nth-child(3) p img {
  vertical-align: middle;
  width: 0.5rem;
  height: 0.5rem;
  margin-top: -0.1rem;
  margin-right: 0.2rem;
}

.main li:nth-child(3) p img:nth-child(2) {
  margin-left: 0.5rem;
}

.main li:nth-child(3) p b {
  font-weight: normal;
}

input[type="radio"]+label::before {
  box-sizing: border-box;
  content: " ";
  /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  width: 2em;
  height: 2em;
  background: url("../../assets/manage/change_no.png");
  background-size: 100% 100%;
  /* margin-right: .4em; */
  border-radius: 50%;
  margin-top: -0.1rem;
}

input[type="radio"]:checked+label::before {
  /* background-color: #909194;
    background-clip: content-box; */
  background: red;
  background: url("../../assets/manage/change.png");

  background-size: 100% 100%;
}

button {
  display: inline-block;
  width: 90%;
  height: 0.8rem;
  border: none;
  border-radius: 0.2rem;
  color: #fff;
  margin-left: 5%;
  background: #ff0103;
}

.bottom {
  width: 100%;
  height: 0.96rem;
  background: #fff;
  position: absolute;
  bottom: 0;
}

.del {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  text-align: center;
}

.del div {
  width: 70%;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
  text-align: center;
  margin: auto;
  margin-top: 60%;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}

.del p {
  width: 70%;
  background: #fff;
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  margin: auto;
  border-top: 1px solid #e7e7e7;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  overflow: hidden;
}

.del span {
  flex: 1;
}

.del span:last-child {
  background: #ff0103;
  color: #fff;
}

</style>
