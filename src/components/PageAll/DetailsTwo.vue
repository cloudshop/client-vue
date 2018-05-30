<template>
  <div class='detailsTwo'>
    <!-- 搜索   返回按钮 -->
    <div class="classify_search_header">
      <div class="classify_search_ss">
        <em @click='back'>&lt;</em>
        <p><a><img src="../../assets/HomePage/搜索.png" alt=""></a>
          <input type="text" placeholder="  请输入搜索关键词" v-model="seekContent">
        </p>
        <span @click='seekAll'>搜索</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="tabCon">
      <div class='content'>
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <mt-loadmore :auto-fill="false" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom"            @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <div class="tabCon_main" v-for='(item,index) in arr' :key="index" :data='item.id' @click='details(item.id)' v-show="falgs">
              <div class="tabCon_main_left">
                <img :src="item.url" alt="">
              </div>
              <div class="tabCon_main_right">
                <h4 class="h4">{{item.NAME}}</h4>
                <div class="tabCon_main_right_all">
                  <p>￥{{item.listPrice}}</p>
                  <!--<p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>-->
                  <!-- <p>送贡融积分 10</p> -->
                </div>
                <!-- <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span> -->
              </div>
            </div>
            <div class="pageNull" v-show="faleg">
              <p><img src="../../assets/PageAll/no.png" alt=""></p>
              <p>非常抱歉</p>
              <p>没有搜索到该商品~</p>
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
      num: 0,
      // tabs: ["综合","销量","价格","筛选"],
      arr: null,
      id: null,
      seekContent: '',
      name: null,
      flag: true,
      faleg: false,
      allLoaded: false,
      bottomStatus: '',
      topStatus: '',
      wrapperHeight: 0,
      pageNum: 0,
      pageSize: 5,
      page: 1,
      falgs: true
    }
  },
  methods: {
    details(id) {
      sessionStorage.setItem("GoodsID", id);
      var val = {
        "func": "openURL",
        "param": {
          "URL": '/#/Product?id=' + id,
        },
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
    seekAll() {
      console.log(this.seekContent)
      this.name = sessionStorage.getItem("name")
      var that = this;
      this.$axios({
          method: 'post',
          url: 'product/api/product/all',
          data: {
            "categoryId": this.name,
            "pageNum": 1,
            "pageSize": 10,
            "productName": this.seekContent
          },
          headers: { 'Content-Type': 'application/json', }
        })
        .then(function(response) {
          if (response.data.mainContent.length == 0) {
            that.faleg = true;
            that.falgs = false
          } else {
            that.arr = response.data.mainContent;
            that.faleg = false
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
    back() {
      var val = {
        "func": "closeCurrent",
        "param": { 'refreshParent': true },
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
    GetParams(id) {
      var that = this;
      this.id = JSON.parse(id);
      this.getDatas()
    },
    getDatas() {
      let url = "product/api/product/all"
      this.$axios
        .post(url, {
          'categoryId': this.id.DetailsTwo,
          'pageNum': this.page,
          'pageSize': this.pageSize
        })
        .then((res) => {
          let len = res.data.length;
          this.pageNum = len;
          this.arr = res.data.mainContent;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMoreData() {
      let url = "product/api/product/all"
      this.$axios
        .post(url, {
          'categoryId': this.id.DetailsTwo,
          'pageNum': this.page,
          'pageSize': this.pageSize
        })
        .then((res) => {
          let len = res.data.mainContent.length;
          this.pageNum = len;
          for (let i = 0; i < len; i++) {
            this.arr.push(res.data.mainContent[i])
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
        this.page = 1;
        this.allLoaded = false;
        this.getDatas();
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  },
  watch: {
    seekContent(Val) {
      if (Val.length == 0) {
        this.arr = '',
          this.faleg = false
      }
    }
  },
  created() {},
  mounted() {
    window.GetParams = this.GetParams;
  }
};

</script>
<style scoped>
.classify_search_head {
  width: 100%;
  position: fixed;
  top: 0;
  background: #f8f8f8;
}

.classify_search_header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f8f8f8;
}

input::-webkit-input-placeholder {
  color: #aab2bd;
}

.classify_search_ss {
  height: .96rem;
}

.classify_search_ss em {
  float: left;
  font-size: .24rem;
  line-height: .96rem;
  margin: 0 .2rem;
}

.classify_search_ss img {
  width: .4rem;
  height: .4rem;
  position: absolute;
  left: .6rem;
  top: .25rem;
  z-index: 999;
}

.classify_search_ss input {
  border-radius: .12rem 0 0 .12rem;
  height: .5rem;
  float: left;
  width: 65%;
  margin-top: .2rem;
  border: 0;
  background: #f2f2f2;
  padding-left: .8rem;
  position: relative;
}

.classify_search_ss span {
  float: left;
  background: #1c90db;
  padding: .14rem .24rem;
  color: #fff;
  margin-top: .2rem;
  border-radius: 0 .12rem .12rem 0;
}

.classify_search_option_ul {
  width: auto;
  display: flex;
}

.classify_search_option_ul li {
  width: 30%;
  padding: 0 .2rem;
}

.PageAll_tab {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.PageAll_tab_ul {
  display: flex;
  height: .96rem;
  border-bottom: .1rem solid #f8f8f8;
  background: #fff;
  /* margin-top: .12rem; */
}

.PageAll_tab_ul li {
  width: 25%;
  height: .96rem;
  display: flex;
  font-size: .24rem;
  justify-content: center;
  align-items: center;
}

.PageAll_tab_ul li:hover {
  color: #ff0103
}

.tabCon {
  margin-top: .12rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.tabCon_main {
  width: 98%;
  margin-left: 1%;
  display: flex;
}

.tabCon_main_left {
  width: 1.82rem;
  height: 1.82rem;
  padding: .15rem;
}

.tabCon_main_left img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: .05rem;
}

.tabCon_main_right {
  flex: 1;
  height: 1.82rem;
  padding: .18rem 0;
}

.h4 {
  font-size: .28rem;
  color: #2f2f2f;
  font-weight: normal;
}

.tabCon_main_right_all {
  display: flex;
  margin-top: .2rem;
}

.tabCon_main_right_all p:nth-child(1) {
  width: 20%;
  font-size: .26rem;
  color: #ff0103;
  margin-right: .24rem;
  font-weight: bold;
}

.tabCon_main_right_all p:nth-child(3) {
  font-size: .18rem;
  color: #1692e1;
  margin-top: 0.05rem;
}

.tabCon_main_right_all_img {
  width: 30%;
  margin-right: .24rem;
}

.tabCon_main_right_all_img img {
  width: 20%;
}

.tabCon_main_right_span {
  width: 100%;
  font-size: .18rem;
  color: #676767;
  margin-top: .11rem;
  display: inline-block;
}

.pageNull {
  width: 100%;
  display: flex;
  margin-top: 2.02rem;
  flex-direction: column;
}

.pageNull p:nth-child(1) {
  height: 3rem;
  padding-left: 35%;
}

.pageNull p:nth-child(1) img {
  width: 47%;
}

.pageNull p:nth-child(2) {
  display: flex;
  justify-content: center;
  font-size: .28rem;
  color: #404040
}

.pageNull p:nth-child(3) {
  width: 100%;
  margin-top: .18rem;
  display: flex;
  justify-content: center;
  font-size: .24rem;
  color: #676767
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
