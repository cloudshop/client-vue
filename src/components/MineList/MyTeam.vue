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
        <h2>分享人</h2>
        <div class='list'>
          <dl>
            <dt></dt>
            <dd>
              <img :src="this.$route.params.arr.avatar" alt="">
            </dd>
            <dd>
              <h3>{{this.$route.params.arr.nickname}}</h3>
              <p>{{this.$route.params.arr.typeString}}</p>
            </dd>
            <dd>
              <p>{{this.$route.params.arr.phone}}</p>
            </dd>
          </dl>
      </div>
    </div> 
    <div class='mainList content'>  
      <h2>团队成员</h2>    
        <div class='AppendList' v-for="item in arr">
          <dl>
            <dd>
              <img :src="item.avatar" alt="">
            </dd>
            <dd>
              <h3>{{item.nickname}}</h3>
              <p>{{item.typeString}}</p>
            </dd>
            <dd>
              <p>{{item.phone}}</p>
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
      iphone:""
    };
  },
  created() {
    // this.iphone=document.cookie.split(";")[1].split("=")[1]; 
    console.log(this.$route.params)
    var that = this;
    this.$axios
      .get(
        "user/api/user-annexes-shareUserList"
      )
      .then(function(res) {
        that.arr=[]
        var le = res.data.length;
        // 
        
        // for(var i=0;i<that.arr.length;i++){
        //     // that.arr.push(res.data[i].phone)
            
        // }
        that.arr = res.data;
        console.log(res.data)
        console.log(that.arr)
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
  methods: {}
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
  height: 2.2rem;
  background: #fff;
  margin-top: 0.16rem;
}
.nav .list dl {
  display: flex;
  height: 1.6rem;
  margin: 0.3rem;
}
.nav .list dl dd:nth-of-type(3){
  flex:2;
  text-align: right;
}
.nav .list dl dd:nth-of-type(3) p{
  margin-top: 0.1rem;
}
.nav .list dl dd h3 {
  line-height: 0.5rem;
  margin-top: 0.05rem;
  font-size: 0.27rem;
  font-weight: 600;
  color: #333;
}
.nav .list dl dd img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 0.3rem 0 0.2rem;
}
h2 {
  margin-top: 0.16rem;
  padding-left: 0.4rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size:0.27rem;
  background: #fff;
}

/* 团队成员 */
.mainList {
  background: #fff;
  margin-top: 0.2rem;
}
.mainList .AppendList dl {
  display: flex;
  height: 1.6rem;
  border-bottom: 1px solid #eee;
  margin: 0 0.3rem;
}
.mainList .AppendList dl img{
  margin: 0.25rem 0.3rem 0.25rem 0.2rem;
}
.mainList .AppendList dl dd h3 {
  line-height: 0.5rem;
  font-size: 0.27rem;
  font-weight: 600;
  color: #333;
}
.mainList .AppendList dl dd:nth-of-type(2) {
  margin: 0.3rem 0;
}
.mainList .AppendList dl dd:nth-of-type(2) p {
  font-size: 0.24rem;
  color: #696969;
}
.mainList .AppendList dl dd:nth-of-type(3){
  flex:2;
  text-align: right;
}
.mainList .AppendList dl dd:nth-of-type(3) p{
  margin-top: 0.4rem;
  font-size: 0.24rem;
}
p {
  font-size: 0.24rem;
  color: #2f2f2f;
}
.mainList .AppendList img{
  width:1rem;
  height:1rem;
  border-radius: 50%;
}
</style>
