<template>
    <div>
        <header class="header">
            <ul>
                <li><span @click='back'>&lt;</span></li>
                <li><input type="search" placeholder="请输入你要搜索商品的名称" v-model="Search"></li>
                <li><button @click="searchs">搜索</button></li>
            </ul>
        </header>
        <div class="main">
            <div class="tabCon_main"  v-for='(item,index) in arr' :key="index"  :data='item.id' @click="commodity(item.productid)">
                <div class="tabCon_main_left">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="tabCon_main_right">
                    <h4 class="h4">{{item.productname}}</h4>
                    <div class="tabCon_main_right_all">
                        <p>￥{{item.listprice}}</p>
                        <p class="tabCon_main_right_all_img"><img v-for="(item,index) in 5" :key="index" src="../assets/PageAll/星星选中.png" alt=""></p>
                        <p>送贡融积分</p>
                    </div>
                    <!-- <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                    <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span> -->
                </div>
            </div>
            <div class="pageNull" v-show="faleg">
                <p><img src="../assets/PageAll/no.png" alt=""></p>
                <p>非常抱歉</p>
                <p>没有搜索到该商品~</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          Search: "",
          arr: [],
          faleg:false
      }
  },
  methods:{
      back(){   
        var  val={
        "func":"closeCurrent",
            "param":{
                'refreshParent':true
            },
        };
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        if(isiOS){
            window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
        }else if(isAndroid){  
            window.androidObject.JSCallAndroid(JSON.stringify(val));
        }
     },
      searchs(){
        var that = this;
        if(this.Search == '' ) return;
        var data = {
            "productName": this.Search
        }
        this.$axios.post("/product/api/product/search",data)
        .then(function(res) {
            if( res.data.length == 0){
                that.faleg=true
            }else{
                that.arr =  res.data
                that.faleg=false
            }
        })
        .catch(function(error) {
            alert('服务器繁忙，请稍后再试');
        });
      },
      commodity(id){
          sessionStorage.setItem("GoodsID", id);
          var val = {
                func: "openURL",
                param: {
                    URL: '/#/Product?id='+id,
                }
            };
            var u = navigator.userAgent;
            var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
            if (isiOS) {
                window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
            } else if (isAndroid) {
                window.androidObject.JSCallAndroid(JSON.stringify(val));
            }
      }
  },
  watch:{
      Search(Val){
          if(Val.length==0){
              this.arr = '',
              this.faleg = false
          }
      }
  }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
    }
    .header ul{
    	width: 92%;
    	margin: 0 4%;
        display: flex;
        align-items: center;
    }
    .header li{
        line-height: .96rem;
        text-align: center
    }
    .header li:nth-child(1){
    	flex: 1;
        font-size: .32rem;
        font-weight: bolder;
    }
    .header li:nth-child(2){
        flex:10;
    }
    .header li:nth-child(2) input{
        height: .6rem;
        width: 90%;
        border: none;
        background: #e7e7e7;
        border-radius: .3rem;
        padding-left: .4rem;
    }
    .header li:nth-child(3){
        flex:2;
    }
    .header li:nth-child(3) button{
        border: none;
        background: orange;
        color: white;
        width: 100%;
        height: .6rem;
        font-size: .26rem;
        border-radius: .3rem;
    }
.main{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: #fff;
}
.tabCon_main{
    width: 98%;
    margin-left: 1%;
    display: flex;
}
.tabCon_main_left{
    width: 1.82rem;
    height: 1.82rem;
    padding: .15rem;
}
.tabCon_main_left img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: .05rem;
}
.tabCon_main_right{
    flex: 1;
    height: 1.82rem;
    padding: .18rem 0;
}
.h4{
    font-size: .28rem;
    color: #2f2f2f;
    font-weight: normal;
}
.tabCon_main_right_all{
    display: flex;
    margin-top: .2rem;
    margin-top: .3rem;
}
.tabCon_main_right_all p:nth-child(1){
    width: 20%;
    font-size: .26rem;
    color: #ff0103;
    margin-right: .24rem;
    font-weight: bold;
}
.tabCon_main_right_all p:nth-child(3){
    font-size: .18rem;
    color: #1692e1;
    margin-top: 0.05rem;
}
.tabCon_main_right_all_img{
    width: 30%;
    margin-right: .24rem;
    margin-left: .2rem;
}
.tabCon_main_right_all_img img{
    width: 20%;
}
.tabCon_main_right_span{
    width: 100%;
    font-size: .18rem;
    color: #676767;
    margin-top: .11rem;
    display: inline-block;
}
.pageNull{
    width: 100%;
    display: flex;
    margin-top: 2.02rem;
    flex-direction:column;
}
.pageNull p:nth-child(1){
    height: 3rem;
    padding-left: 35%;
}
.pageNull p:nth-child(1) img{
    width: 47%;
}
.pageNull p:nth-child(2){
    display: flex;
    justify-content: center;
    font-size: .28rem;
    color: #404040
}
.pageNull p:nth-child(3){
    width: 100%;
    margin-top: .18rem;
    display: flex;
    justify-content: center;
    font-size: .24rem;
     color: #676767
}
</style>

