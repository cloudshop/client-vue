<template>
    <div class="PageAll_tab">
        <ul class="PageAll_tab_ul">
            <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div v-for='(itemCon,index) in tabContents' :key="index" v-show="index == num" class='content' >
                <div class="tabCon_main"  v-for='(item,index) in itemCon.tabCon_main' :key="index" >
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
       return {
            tabs: ["综合", "销量","价格","筛选"],
            tabContents: [
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '1212',
                        liststart: 5
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 5
                      }
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart: 4
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 3
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 4
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 3
                      },
                    ]
                },
                {
                    'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart:4
                      }
                    ]
                },
                {
                     'tabCon_main':[
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '150.8',
                        liststart: 5
                      },
                      {
                        name: '回力休闲韩版冬季帆布鞋回力休闲',
                        money: '999.8',
                        liststart: 5
                      }
                    ]
                },
                
            ],
            num: 1
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }
}
</script>
<style scoped>
.PageAll_tab{
    width: 100%;
    height: auto;
    background: #fff;
}
.PageAll_tab_ul{
    display: flex;
    height: .96rem;
    border-bottom: .1rem solid #f8f8f8;
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
}
.content{
    width:100%;
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











