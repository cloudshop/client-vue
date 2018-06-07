<template>
  <div class='RemainingSum'>
    <header class="mint-header">
      <div class="mint-header-button is-left">
        <a class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal" @click="close">
            <mt-button icon="back"></mt-button>
          </button>
        </a>
      </div>
      <h1 class="mint-header-title">余额</h1>
      <div class="mint-header-button is-right"></div>
    </header>
    <div class='content'>
      <div class='banner'>
        <p>余额</p>
        <h2>{{arr.balance}}</h2>
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :auto-fill="false" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="main">
            <ul class='list'>
              <li v-for="item in brr">
                <!-- <p><span>{{item.createdTime}}</span><span></span></p> -->
                <p><span>{{item.createdTime}}</span><span></span></p>
                <!--这个是时间？对啊-->
                <p><b>{{item.typeString}}</b><b>{{item.balance}}</b></p>
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
    <footer class='footer'>
      <button @click="out">转出</button>
      <router-link :to="{ path: '/top' }" tag='button'>转入</router-link>
    </footer>
    <div class="msg" v-show="bol">
      <div class="succeed">
        <h3>提示</h3>
        <p>尚未实名认证，请前往个人中心实名认证</p>
        <!-- <router-link to="/RemainingSum">取消</router-link> -->
        <span @click="sure">确定</span>
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
      audit: "null",
      datt: '',
      time: [],
      bol: false,
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      wrapperHeight: 0,
      pageNum: 0,
      pageSize: 5,
      page: 1,
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("wallet/api/wallets/user")

      .then(function(res) {
        that.arr = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.getDatas();
    this.$axios
      .get("user/api/my-auth")

      .then(function(res) {
        console.log(res)
        that.datt = res.data
        that.audit = res.data.statusString;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {

    sure() {
      this.bol = false;
    },
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
      const date =
        year +
        "-" +
        month +
        "-" +
        day +
        "　" +
        h +
        ":" +
        Minutes +
        ":" +
        Seconds;
      return date;
    },
    out() {
      // alert(this.audit)
      var ty = this.audit;
      var msg = "尚未实名认证，是否前往个人中心实名认证？认证后即可提现";
      console.log(ty)

      if (ty == null) {
        this.bol = true;
      } else if (ty == '审核通过') {
        this.$router.push({ path: "/Cash" });
      }
    },
    close() {
      var val = {
        "func": "closeCurrent",
        "param": { 'finallyIndex': 4 },
      };
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isiOS) {
        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
      } else if (isAndroid) {
        window.androidObject.JSCallAndroid(JSON.stringify(val));
      }
    },
    getDatas() {
      this.$axios
        .get(
          `wallet/api/wallet/details/balance?page=${this.page}&size=${this.pageSize}&sort=createdTime%2Cdesc`
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
        .catch(function(error) {
          console.log(error);
        });

    },
    getMoreData() {
      this.$axios
        .get(
          `wallet/api/wallet/details/balance?page=${this.page}&size=${this.pageSize}&sort=createdTime%2Cdesc`
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
        .catch(function(error) {
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
        this.page = 1;
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

.msg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}

.succeed {
  width: 86%;
  height: 2.5rem;
  position: absolute;
  left: 7%;
  top: 40%;
  z-index: 10;
  background: #fff;
  border-radius: 0.1rem;
}

.succeed router-link {
  float: left;
  display: inline-block;
}

h3 {
  font-size: 0.3rem;
  line-height: 0.9rem;
  padding: 0 0.4rem;
}

.msg p {
  line-height: 0.8rem;
  font-size: 0.25rem;
  font-weight: 600;
  padding-left: .3rem;
}

.msg span {
  display: block;
  text-align: right;
  padding: 0 0.4rem;
  color: red;
  font-weight: 600;
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
