<template>
  <div class='detailsTwo'>
        <div class="classify_search_header">
            <div class="classify_search_ss">
                <a><img src="../../assets/HomePage/搜索.png" alt=""></a>
                <p><input type="text" placeholder="  请输入搜索关键词"></p>
                <span >搜索</span>
            </div>
        </div>


        
        <ul class="PageAll_tab_ul">
            <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div v-show="0 == num" class='content' >
               
                <div class="tabCon_main"  v-for='(item,index) in arr' :key="index"  :data='item.id' >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        
                        <h4 class="h4">{{item.NAME}}</h4>
                        <div class="tabCon_main_right_all">
                            <p>￥{{item.listPrice}}</p>
                            <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                            <p>送贡融积分 10</p>
                        </div>
                        <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
                    </div>
                </div>
            </div>
            <!-- <div v-show="0 == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <div class="tabCon_main_right_all">
                            <p>￥{{item.money}}</p>
                            <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                            <p>送贡融积分 10</p>
                        </div>
                        <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
                    </div>
                </div>
            </div> -->
            <!-- <div v-show="1 == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <div class="tabCon_main_right_all">
                            <p>￥{{item.money}}</p>
                            <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                            <p>送贡融积分 10</p>
                        </div>
                        <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
                    </div>
                </div>
            </div>
            <div v-show="2 == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <div class="tabCon_main_right_all">
                            <p>￥{{item.money}}</p>
                            <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                            <p>送贡融积分 10</p>
                        </div>
                        <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
                    </div>
                </div>
            </div>
            <div v-show="3 == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <div class="tabCon_main_right_all">
                            <p>￥{{item.money}}</p>
                            <p class="tabCon_main_right_all_img"><img v-for="(item,index) in item.liststart" :key="index" src="../../assets/PageAll/星星选中.png" alt=""></p>
                            <p>送贡融积分 10</p>
                        </div>
                        <span class="tabCon_main_right_span">贡融券可抵扣 ￥10.00</span>
                        <span class="tabCon_main_right_span">贡融积分可抵扣 ￥5.00</span>
                    </div>
                </div>
            </div> -->
        </div>
  </div>
</template>

<script>
export default {
    data() {
       return {
            tabs: ["综合", "销量","价格","筛选"],
            name:this.$route.params.name,
            arr:null,
            num: 0
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    },
    created(){
    var that = this;
    this.$axios.get('/classify//api/product/all?categoryid='+this.name)
        .then(function(response) {
            that.arr = response.data.mainContent;
        })
        .catch(function(error) {
              console.log(error);
      });
    },  
}   
</script>

<style scoped>

.classify_search_head{
    width: 100%;
    position: fixed;
    top: 0;
    background: #f8f8f8;
}
.classify_search_header{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f8f8f8;
}
.classify_search_ss{
    width: 94%;
    margin-left: 3%;
    display: flex;
}
.classify_search_ss a{
    position: absolute;
    top: .34rem;
    left: .35rem;
}
.classify_search_ss a img{
    width: 40%;
}
.classify_search_option{
    width: 100%;
    height: .88rem;
    background: #fff;
}
.classify_search_ss p{
    flex: 1;
    height: .58rem;
    margin: .2rem 0;
    border-radius: .2rem 0 0 .2rem;
    background: #f8f8f8;
}
.classify_search_ss input{
    height: .58rem;
    margin-left: .5rem;
    border:none;
    background: #f8f8f8;
}
input::-webkit-input-placeholder {
    color: #aab2bd;
}
.classify_search_ss span{
    width: 15%;
    height: .58rem;
    margin: .2rem 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .24rem;
    background:#1692e1; 
    border-radius: 0 .2rem .2rem 0;
}
.classify_search_option_ul{
    width: auto;
    display: flex;

}
.classify_search_option_ul li{
    width: 30%;
    padding: 0 .2rem;
}
.PageAll_tab{
    width: 100%;
    height:100%;
    background: #fff;
    display:flex;
    flex-direction: column;
}
.PageAll_tab_ul{
    display: flex;
    height: .96rem;
    border-bottom: .1rem solid #f8f8f8;
    background:#fff;
    /* margin-top: .12rem; */
}
.PageAll_tab_ul li{
    width: 25%;
    height: .96rem;
    display: flex;
    font-size: .24rem;
    justify-content: center;
    align-items: center;
}
.PageAll_tab_ul li:hover{
    color: #ff0103
}
.tabCon{
    margin-top: .12rem;
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
     background:#fff;
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
</style>
