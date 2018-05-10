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
                            <h3>普通商户</h3>
                            <p>{{iphone}}</p>
                        </dd>
                    </dl>
                    <p></p>
                </div>
            </div>
             <h2 class='peop'>团队成员</h2>    
            <div class='mainList content'>   
                <div class='AppendList' v-for="item in arr">
                    <dl>
                        <dt>&nbsp;</dt>
                        <dd>
                            <h3>{{item.phone}}</h3>
                            <p>普通商户</p>
                        </dd>
                    </dl>
                    <p>{{item}}</p>
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
  	this.iphone=document.cookie.split(";")[1].split("=")[1]; 
    var that = this;
    this.$axios
      .get(
        "user/api/user-annexes-shareUserList"
      )
      .then(function(res) {
          that.arr=[]
        var le = res.data.length;
        console.log(res)
        for(var i=0;i<le;i++){
            that.arr.push(res.data[i].phone)
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
  border-bottom: 1px solid #e7e7e7;
}
.nav {
  height: 2rem;
  background: #fff;
  margin-top: 0.11rem;
}
.nav dl dt img {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
}

.nav .list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav .list dl {
  display: flex;
  padding-left: 0.3rem;
  padding-top: 0.33rem;
}
.nav .list p {
  padding-right: 0.3rem;
}
.nav .list dl dd {
  padding-left: 0.24rem;
}
.nav .list dl dd h3 {
  font-size: 0.32rem;
  color: #2f2f2f;
}
.nav .list dl dd p {
  margin-top: 0.22rem;
  font-size: 0.24rem;
  color: #696969;
}
.mainList {
  background: #fff;
}
.mainList dl dt img {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
}
h2 {
  font-size: 0.32rem;
  color: #2f2f2f;
  padding-left: 0.3rem;
  padding-top: 0.2rem;
  background: #fff;
}
.peop {
  margin-top: 0.16rem;
  height: 0.5rem;
}
.mainList .AppendList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  border-bottom: 0.01rem solid #e7e7e7;
  margin-left: 0.3rem;
}
.mainList .AppendList dl {
  display: flex;
  padding-top: 0.33rem;
}
.mainList .AppendList p {
  padding-right: 0.3rem;
}
.mainList .AppendList dl dd {
  padding-left: 0.24rem;
}
.mainList .AppendList dl dd h3 {
  font-size: 0.32rem;
  color: #2f2f2f;
}
.mainList .AppendList dl dd p {
  margin-top: 0.22rem;
  font-size: 0.24rem;
  color: #696969;
}
p {
  font-size: 0.28rem;
  color: #2f2f2f;
}
</style>
