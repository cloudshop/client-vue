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
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <p class="change">福利价 <span class="changered">￥{{item.integral}}</span><span>+积分 {{item.jifen}}</span></p>
                        <h3 class="h3">原价：<span class="prices">￥{{item.price}}</span></h3>
                        <p class="limit">限量{{item.limit}}件</p>
                    </div>
                </div>
            </div>
            <div v-show="1 == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in tabCon_main' :key="index" >
                    <div class="tabCon_main_left">
                        <img src="../../assets/Classify/bg.gif" alt="">
                    </div>
                    <div class="tabCon_main_right">
                        <h4 class="h4">{{item.name}}</h4>
                        <p class="change">福利价 <span class="changered">￥{{item.integral}}</span><span>+积分 {{item.jifen}}</span></p>
                        <h3 class="h3">原价：<span class="prices">￥{{item.price}}</span></h3>
                        <p class="limit">限量{{item.limit}}件</p>
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
                        <p class="change">福利价 <span class="changered">￥{{item.integral}}</span><span>+积分 {{item.jifen}}</span></p>
                        <h3 class="h3">原价：<span class="prices">￥{{item.price}}</span></h3>
                        <p class="limit">限量{{item.limit}}件</p>
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
                        <p class="change">福利价 <span class="changered">￥{{item.integral}}</span><span>+积分 {{item.jifen}}</span></p>
                        <h3 class="h3">原价：<span class="prices">￥{{item.price}}</span></h3>
                        <p class="limit">限量{{item.limit}}件</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
       return {
            tabs: ["综合", "销量","价格","筛选"],
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        price: '150.8',
                        integral: 1580,
                        limit: 1500,
                        jifen: 200
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        price: '150.8',
                        integral: 1580,
                        limit: 1500,
                        jifen: 200
                      },
                        {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        price: '150.8',
                        integral: 1580,
                        limit: 1500,
                        jifen: 200
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        price: '150.8',
                        integral: 1580,
                        limit: 1500,
                        jifen: 200
                      },
                        {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        price: '150.8',
                        integral: 1580,
                        limit: 1500,
                        jifen: 200
                      }
                    ],
            num: 1
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
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
    flex-direction: column;
    height: 1.82rem;
    padding: .18rem 0;
}
.h4{
    font-size: .28rem;
    color: #2f2f2f;
    font-weight: normal;
}
.h3{
    font-size: .28rem;
    color:#676767;
    font-weight: normal;
}
.prices{
    text-decoration:line-through;
}
.change{
    font-size: .22rem;
    color:#6a6a6a;
    padding: .3rem 0 .2rem 0;
}
.changered{
    font-size: .28rem;
    margin-right: .22rem;
    color: #ff0000;
}
.limit{
    font-size: .22rem;
    color:#6a6a6a;
    display: flex;
    margin-right: .3rem;
    justify-content: flex-end;
}
</style>
