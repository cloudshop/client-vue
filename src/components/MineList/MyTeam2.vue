<template>
    <div class="team2">
        <header class="mint-header">
        <div class="mint-header-button is-left">
            <a class="router-link-active">
              <!-- <router-link :to="{ path: '/MyTeam' }" @click="back" tag='button' class="mint-button mint-button--default mint-button--normal">
                
              </router-link> -->
              <button class="mint-button mint-button--default mint-button--normal" @click="back"> 
              <mt-button icon="back"></mt-button>
              </button>
          </a>
        </div> 
        <h1 class="mint-header-title">{{teamname}}的团队</h1>
        <div class="mint-header-button is-right" ></div>
    </header>
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
            <!-- <dd>
              <i class="ii">{{item.id}}</i>
              <p @click="re($event)">查看下级</p>
            </dd> -->
          </dl>
        </div>        
    </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      teamID: "",
      teamname: "",
      arr:'',
    };
  },
  created() {
    var that = this;
    that.teamID = sessionStorage.getItem("myteam");
    that.teamname = sessionStorage.getItem("ename");
    console.log(that.teamname);
    /* 获取二级用户 */
    this.$axios
      .get("user/api/user-annexes-getSecondinviter/"+that.teamID)
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
  },
  methods:{
      back(){
          console.log(111)
          sessionStorage.removeItem("myteam"); 
          this.$router.push({path:'/MyTeam'})
      }
  }
};
</script>
<style scoped>
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 0.94rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #ccc;
}
/*二级团队*/
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
