<template>
  <div class='Team'>
    <header class="mint-header">
        <div class="mint-header-button is-left">
            <a class="router-link-active">
              <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                <mt-button icon="back"></mt-button>
              </router-link>
          </a>
        </div> 
        <h1 class="mint-header-title">我的团队</h1>
        <div class="mint-header-button is-right" ></div>
    </header>
    <div class='nav'>
      <div class="list">
          <p>
            <span><img :src="arr2.avatar"></span>
            <i>{{usertype}}</i>
          </p>
          <p>{{arr2.nickname}}</p>
          <p>推荐人:{{Tname}} | 团队：{{Tnumber}}人</p>
      </div>
    </div> 
    <div class="nav2">
       <p>累计分享奖励:</p>
       <ul>
         <li>
           <span>现金</span>
           <span> <i>{{Tbanlance}}</i> 元</span>
         </li>
         <li>
           <span>贡融积分</span>
           <span> <i>{{Tbanlance}}</i> </span>
         </li>
       </ul>
      <!-- <p>我的分享业绩<span>></span></p> -->
    </div>
    <h2>团队成员</h2>  
    <div class='mainList content'>    
        <div class='AppendList' v-for="item in arr">
          <dl>
            <dd>
              <img :src="item.avatar" alt="">
            </dd>
            <dd>
              <h3 class="Ename">{{item.nickname}}</h3>
              <p>{{item.typeStrings}}</p>
              <p>{{item.phone}}</p>
            </dd>
            <dd>
              <i class="ii" style="display:none">{{item.id}}</i>
              <p @click="re($event)">查看下级</p>
            </dd>
          </dl>
        </div>        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: "null",
      iphone: "",
      arr2: "",
      Tname:"",
      Tnumber:"",
      Tintegral:"",
      Tbanlance:'',
      type:'',
      usertype:''
    };
  },
  created() {
    // this.iphone=document.cookie.split(";")[1].split("=")[1];
    sessionStorage.removeItem("myteam"); 
    var that = this
    this.$axios
      .get("user/api/user-annexes/userInfo")
      .then(function(res) {
          console.log(res)
          that.arr2 = res.data;
          that.type = res.data.type;
        var tt = that.type
        if(tt<=2){
              $('.moneypay').hide()
        }else{
          $('.moneypay').show()
        }
        var name = res.data.type;
        var x;
        switch (name) {
          case 1:
            x = "普通用户";
            break;
          case 2:
            x = "增值用户";
            break;
          case 3:
            x = "普通商户";
            break;
          case 4:
            x = "增值商户";
            break;
          case 5:
            x = "服务商";
            break;
        }
        that.usertype = x
      })
    console.log(this.$route.params);
    // this.arr2 = this.$route.params.arr;
    if (this.arr2.type == 1) {
      this.arr2.typeString = "普通会员";
    } else if (this.arr2.type == 2) {
      this.arr2.typeString = "增值会员";
    } else if (this.arr2.type == 3) {
      this.arr2.typeString = "普通商家";
    } else if (this.arr2.type == 4) {
      this.arr2.typeString = "增值商家";
    } else if (this.arr2.type == 5) {
      this.arr2.typeString = "服务商";
    }
    var that = this;
    //获取个人信息
    this.$axios
      .get("wallet/api/wallet/details/getintegralStatistical")
      .then(function(res) {
        that.Tintegral = res.data
      })
      .catch(function(error) {
        console.log(error);
      });
    //邀请人数积分奖励
    this.$axios
      .get("wallet/api/wallet/details/getintegralStatistical")
      .then(function(res) {
        that.Tintegral = res.data
      })
      .catch(function(error) {
        console.log(error);
      });
    //邀请人奖励累计
    this.$axios
      .get("wallet/api/wallet/details/getstatisticalMoney")
      .then(function(res) {
        that.Tbanlance = res.data
      })
      .catch(function(error) {
        console.log(error);
      });
    //获取上级用户
    this.$axios
      .get("user/api/user-annexes-getReferees")
      .then(function(res) {
        that.Tname = res.data.nickname
      })
      .catch(function(error) {
        console.log(error);
      });
     //获取团队人数 
    this.$axios
      .get("user/api/user-annexes-getTeamSize")
      .then(function(res) {
        that.Tnumber = res.data
      })
      .catch(function(error) {
        console.log(error);
      });  
      //团队列表
    this.$axios
      .get("user/api/user-annexes-shareUserList")
      .then(function(res) {
        that.arr = [];
        var le = res.data.length;
        that.arr = res.data;
        // console.log(res.data);
        console.log(that.arr);
        for (var i = 0; i < that.arr.length; i++) {
          if (that.arr[i].type == 1) {
            that.arr[i].typeStrings = "普通会员";
          } else if (that.arr[i].type == 2) {
            that.arr[i].typeStrings = "增值会员";
          } else if (that.arr[i].type == 3) {
            that.arr[i].typeStrings = "普通商家";
          } else if (that.arr[i].type == 4) {
            that.arr[i].typeStrings = "增值商家";
          } else if (that.arr[i].type == 5) {
            that.arr[i].typeStrings = "服务商";
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    if (this.$store.getters.isAuthed !== true) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  methods: {
    re(a){
      var b = $(a.target);
      console.log(b.parent().prev().find('.Ename').text())
      var c = b.parent().find(".ii").text()
      var Ename = b.parent().prev().find('.Ename').text()
      sessionStorage.setItem("myteam", c)
      sessionStorage.setItem("ename",Ename)
      this.$router.push({path:'/MyTeam2 '})
      //Ename
    }
  }
};
</script>

<style scoped>
.Team {
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
}
/* 分享人 */
.nav {
  height: 3.5rem;
  /* margin-top: 0.16rem; */
  /* padding: 0.1rem 0; */
  background: url("../../assets/Mine/RemainingSum/bg.png");
  background-size: 100% 100%;
}
.nav .list {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  /* background: #ccc; */
  position: relative;
}
.nav .list p:nth-child(1) {
  height: 2rem;
}
.nav .list p:nth-child(2) {
  color: #fff;
  font-size: 0.32rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.nav .list p:nth-child(3) {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
}
.nav .list p:nth-child(1) span {
  position: absolute;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: #e7e7e7;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: -0.8rem;
  top: 10%;
  border: 2px solid #fff;
  overflow: hidden;
  z-index: 9;
}
.nav .list p:nth-child(1) span img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nav .list p:nth-child(1) i {
  position: absolute;
  display: inline-block;
  width: 1.8rem;
  padding-left: 0.2rem;
  height: 0.4rem;
  line-height: 0.42rem;
  background: #fff;
  top: 22%;
  border-radius: 0.2rem;
  color: #2f2f2f;
  margin-left: 0.2rem;
  z-index: 0;
}
.nav .list dl {
  display: flex;
  height: 1.6rem;
  margin: 0.3rem;
}
.nav .list dl dd:nth-of-type(3) {
  flex: 2;
  text-align: right;
}
.nav .list dl dd:nth-of-type(3) p {
  margin-top: 0.1rem;
}
.nav .list dl dd h3 {
  line-height: 0.5rem;
  /* margin-top: 0.05rem; */
  font-size: 0.27rem;
  font-weight: 600;
  color: #333;
}
.nav .list dl dd img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 0.3rem 0 0.2rem;
}
.nav2 {
  background: #fff;
}
.nav2 p:nth-child(1) {
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.3rem;
  color: #2f2f2f;
}
.nav2 ul {
  width: 100%;
  display: flex;
  height: 1.2rem;
  font-size: .28rem;
  border-bottom: 1px solid #e7e7e7;
}
.nav2 li {
  flex: 1;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.nav2 li:nth-child(1) {
  border-right: 0.01rem solid #ccc;
}
.nav2 li span{
  display: block;
  line-height: .6rem;
}
.nav2 p:last-child{
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.3rem;
  color: #2f2f2f;
}
.nav2 p:last-child span{
  float: right;
  padding-right: .4rem;
}
h2 {
  margin-top: 0.16rem;
  padding-left: 0.4rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.27rem;
  background: #fff;
}

/* 团队成员 */
.mainList {
  background: #fff;
}
.mainList .AppendList dl {
  display: flex;
  height: 1.6rem;
  border-bottom: 1px solid #eee;
  margin: 0 0.3rem;
}
.mainList .AppendList dl img {
  margin: 0.25rem 0.3rem 0.25rem 0.2rem;
}
.mainList .AppendList dl dd h3 {
  line-height: 0.5rem;
  font-size: 0.27rem;
  margin-top: .1rem;
  font-weight: 600;
  color: #333;
}
.mainList .AppendList dl dd:nth-of-type(2) {
  /* margin: 0.3rem 0; */

}
.mainList .AppendList dl dd:nth-of-type(2) p {
  font-size: 0.24rem;
  color: #696969;
}
.mainList .AppendList dl dd:nth-of-type(3) {
  flex: 2;
  text-align: right;
}
.mainList .AppendList dl dd:nth-of-type(3) p {
  margin-top: 0.4rem;
  font-size: 0.24rem;
}
p {
  font-size: 0.24rem;
  color: #2f2f2f;
}
.mainList .AppendList img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
</style>
