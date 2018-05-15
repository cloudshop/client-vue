<template>
  <div class='RemainingSum'>
    <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal">
                    <mt-button icon="back"></mt-button>
                   </router-link>
              </a>
            </div> 
             <h1 class="mint-header-title">贡融券</h1>
            <div class="mint-header-button is-right" ></div>
        </header>
        <div class='content'>
          <div class='banner'>
                  <p>贡融券</p>
                  <h2>{{arr.ticket}}</h2>
                  <!--<h2>{{$route.params.num}}</h2>-->
          </div>
          <div class="main">
            <ul class='list' v-for="item in brr">
            <li>
              <!-- <p><span>{{item.createdTime}}</span><span></span></p> -->
              <p><span>{{item.createdTime}}</span><span></span></p>
              <p><b>{{item.typeString}}</b><b>{{item.ticket}}</b></p>
            </li>
          </ul>
          </div>
      </div>

  </div>

</template>

<script>
import { Header, Popup } from "mint-ui";
export default {
  data() {
    return {
      arr: "null",
      brr: "null"
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("wallet/api/wallets/user", {})
      .then(function(res) {
        //     console.log(res.data.balance)
        that.arr = res.data;
        //      that.arr = res.data
        //      console.log(arr)
      })
      .catch(function(error) {
        console.log(error);
      });

    this.$axios
      .get("wallet/api/wallet/details/ticket?sort=createdTime%2Cdesc", {})
      .then(function(res) {
        that.brr = res.data;
        console.log(that.brr);
        that.brr = that.brr.filter(item => {
          // return item.createdTime=item.createdTime.replace(/[A-Z]*/g, "");
          return (item.createdTime = item.createdTime
            .substr(0, 19)
            .replace("T", "    "));
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style scoped>
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 0.94rem;
  font-size: 0.32rem;
}

.RemainingSum {
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
.banner {
  background: url("../../assets/Mine/RemainingSum/bg.png");
  background-size: 100%;
  width: 100%;
  height: 3.7rem;
}
.banner p {
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
  padding-top: 0.98rem;
}
.banner h2 {
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  padding-top: 0.36rem;
}
.list li {
  color: #929292;
  height: 1.44rem;
  border-bottom: 1px solid #dfdfdd;
}
.list li span {
  color: #929292;
  font-size: 0.22rem;
}
.list li p:nth-child(1) {
  padding-top: 0.37rem;
  margin-left: 0.3rem;
}
.list li p:nth-child(1) span:nth-child(2) {
  padding-left: 0.3rem;
}
.list li p:nth-child(2) {
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.16rem;
}
.list li p:nth-child(2) b:nth-child(1) {
  font-size: 0.28rem;
  color: #929292;
  font-weight: normal;
}
.list li p:nth-child(2) b:nth-child(2) {
  font-size: 0.32rem;
  color: #ff0e00;
  font-weight: normal;
}
</style>
