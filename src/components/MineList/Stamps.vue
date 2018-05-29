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
      <div class="mint-header-button is-right"></div>
    </header>
    <div class='content'>
      <div class='banner'>
        <p>贡融券</p>
        <h2>{{arr.ticket}}</h2>
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :auto-fill="false" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="main">
            <ul class='list' v-for="item in brr">
              <li>
                <!-- <p><span>{{item.createdTime}}</span><span></span></p> -->
                <p><span>{{item.createdTime}}</span><span></span></p>
                <!--这个是时间？对啊-->
                <p><b>{{item.typeString}}</b><b>{{item.ticket}}</b></p>
              </li>
            </ul>
          </div>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<script>
import { Loadmore } from "mint-ui";
export default {
  components: {
    Loadmore
  },
  data() {
    return {
      arr: "null",
      brr: "null",
      time: [],
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      wrapperHeight: 0,
      pageNum: 0,
      pageSize: 10,
      page: 0,
    };
  },
  created() {
    this.$axios
      .get("wallet/api/wallets/user")

      .then((res) => {
        this.arr = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.getDatas();
  },
  methods: {
    one: function() {},
    date(time) {
      const year = time.getFullYear(),
        m = time.getMonth() + 1,
        month = m < 10 ? "0" + m : m,
        d = time.getDate(),
        day = d < 10 ? "0" + d : d,
        h = time.getHours(),
        hour = h < 10 ? "0" + h : h,
        min = time.getMinutes(),
        Minutes = min < 10 ? "0" + min : min,
        se = time.getSeconds(),
        Seconds = se < 10 ? "0" + se : se;
      const date = year + "-" + month + "-" + day + "　" + h + ":" + Minutes + ":" + Seconds
      return date;
    },
    getDatas() {
      this.$axios
        .get(
          `wallet/api/wallet/details/ticket?page=${this.page}&size=${this.pageSize}&sort=createdTime%2Cdesc`
        )
        .then((res) => {
          res.data.map(v => {
            let utc = v.createdTime,
              date = new Date(utc),
              date1 = this.date(date);
            v.createdTime = date1;
          });
          let len = res.data.length;
          this.pageNum = len;
          this.brr = res.data;
        })
        .catch((error) => {
          console.log(error);
        });

    },
    getMoreData() {
      this.$axios
        .get(
          `wallet/api/wallet/details/ticket?page=${this.page}&size=${this.pageSize}&sort=createdTime%2Cdesc`
        )
        .then((res) => {
          res.data.map(v => {
            let utc = v.createdTime,
              date = new Date(utc),
              date1 = this.date(date);
            v.createdTime = date1;
          });
          let len = res.data.length;
          this.pageNum = len;
          for (let i = 0; i < len; i++) {
            this.brr.push(res.data[i])
          }

        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadBottom() {
      setTimeout(() => {
        if (this.pageNum === this.pageSize) {
          this.page += 1;
          this.getMoreData()
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    loadTop() {
      setTimeout(() => {
        this.page = 0;
        this.allLoaded = false;
        this.getDatas();
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
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
}

.is-right {
  color: #0096ff;
  font-size: 0.28rem;
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

.main {
  /*padding-top: 3.7rem;*/
}

.banner {
  background: url("../../assets/Mine/RemainingSum/bg.png");
  background-size: 100%;
  width: 100%;
  height: 3.7rem;
  position: fixed;
  top: 0.94rem;
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
  color: #696969;
}

.list li p:nth-child(2) b:nth-child(2) {
  font-size: 0.32rem;
  color: #2f2f2f;
}

.footer {
  height: 0.98rem;
  display: flex;
}

.footer button {
  width: 50%;
  font-size: 0.32rem;
  border: 0;
}

.footer button:first-child {
  color: #1692e1;
  background: #fff;
}

.footer button:last-child {
  color: #fff;
  background: #1692e1;
}

.mint-loadmore {
  padding-top: 3.7rem;
}

.mint-loadmore-top {
  text-align: center;
  font-size: 0.5rem;
}

.mint-loadmore-top span {
  display: inline-block;
}

.mint-loadmore-bottom {
  text-align: center;
  font-size: 0.5rem;
}

.mint-loadmore-bottom span {
  display: inline-block;
}

</style>
