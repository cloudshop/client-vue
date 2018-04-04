<template >
<div>
      
        <header class='header'>
            <img src="../assets/Classify/扫码黑色.png" alt="">
             <div class='ipt'>
                  <input type="text" placeholder="内容推荐">
                  <i class='sou'></i>
            </div> 
            <img src="../assets/Classify/消息黑色.png" alt="">  
        </header>
      <div class='content'>
         <main class="main">
            <section class="left" id="left">
                <ul id="left-ul">
                    <li class="cateid" v-for="(item,index) in arr" :key="index" :class="{bgli:index==num}" @click="tab(index)">
                        {{item.name}}
                    </li>
                </ul>
            </section>
            <section class="right">
                <section v-for="(item,index) in arr" :key="index" v-show="index==num" class='Rest'>
                    <dl v-for="(v,i) in item.src" :key="i">
                        <dt><img src="../assets/HomePage/bg.gif" alt=""></dt>
                        <dd>{{item.info[i]}}</dd>
                    </dl>
                </section>
            </section>
        </main>     
     </div>
        <Foot></Foot>
</div>
</template>

<script>
import Foot from './main/foot'
export default {
    data(){
        return {
            num: 0,
            bgli: false,
            arr:[
                 {
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png','/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png','/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png','/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['东南', '西北', '东北', '西南', '中原','东南', '西北', '东北', '西南', '中原','东南', '西北', '东北', '西南', '中原','东南', '西北', '东北', '西南', '中原']
                },
                 {
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },{
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['东南', '西北', '东北', '西南', '中原']
                },
                 {
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },{
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['东南', '西北', '东北', '西南', '中原']
                },
                 {
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },{
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['东南', '西北', '东北', '西南', '中原']
                },
                 {
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },{
                    name: '家乡味道',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['东南', '西北', '东北', '西南', '中原']
                },
                 {
                    name: 'fuck',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },
                 {
                    name: 'fuck',
                    src: ['/jia3@2x.png',
                        '/jia2@2x.png', '/jia1@2x.png', '/jia4@2x.png', '/jia5@2x.png'],
                    info: ['1', '2', '3', '4', '5']
                },
            ]
       }
    },
    methods:{
         tab(index) {
            this.num = index;
            console.log(index)
        }
    },
    components:{
        Foot
    },

}
</script>


<style scoped>
    .header{
        height:.96rem;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items: center;   
        width:100%;
    }
    .content{
        overflow:hidden;
    }
    .header img{
        width:.5rem;
        height:.5rem;
    }
    .header .ipt {
        width:100%;
        position: relative;

    }
    .header .ipt input{
        width:80%;
        height:.6rem;
        border-radius:.4rem;
        margin-left:.15rem;
        padding-left:.85rem;
        background:#f2f1f6;
        color:#949494;
        font-size:.28rem;
        border:0;
    }
    input::-webkit-input-placeholder{
        color:#c1c4cb;
    }
    .header .ipt .sou{
        display: inline-block;
        width:.4rem;
        height:.4rem;
        background:url(../assets/HomePage/搜索.png);
        background-size:100% 100%;
        position: absolute;
        left:.4rem;
        top:.15rem;
    }
    .header img:first-child{
        margin-left:.3rem;
    }
    .header img:last-child{
        margin-right:.3rem;
    }
    /* .main{
        display:flex;
        height:100%;
    }
    .main ul{
        width:1.55rem;
        height:100%;
        overflow-y:scroll;
        background:#ffffff;  
    }
    .main ul li{
        width:1.47rem;
        height:.94rem;
        text-align:center;
        line-height: .94rem;
        border:1px solid #e7e7e7;
        font-size:.24rem;
        color:#2f2f2f;
    }
    .maincontent{
        overflow-y:scroll;
        height:100%;
    }
    .maincontent h1{
        padding-left:.3rem;
        padding-top:.18rem;
        padding-bottom:.28rem;
        font-size:.22rem;
        color:#2f2f2f;
    }
    .maincontent .banner{
        width: 5.08rem;
        height:1.48rem;
        margin-top:.27rem;
        margin-left:.33rem;
    }
    .maincontent .banner img{
        width: 5.08rem;
        height:1.48rem;  
    }
    .maincontent .renderContent{
        width:5.08rem;
        background:#fff;
        display:flex;
        flex-wrap:wrap;

        height:auto;
        margin:0 .3rem;
        padding:.3rem 0;
    }
    .maincontent .renderContent dl{
        width:33%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:.1rem;
    }
    .maincontent .renderContent dl dt{
        width:.98rem;
        height:.69rem;
    }
    .maincontent .renderContent dl dt img{
        width:.98rem;
        height:.69rem;
    }
    .maincontent .renderContent dl dd{
        margin-top:.2rem;
        font-size:.18rem;
        color:#676767;
    } */
.main {
     display:flex;
    height:100%;
}

.main .left {
    width: 1.5rem;
    border-right: none;
    background: #f0eced;
    overflow-y:scroll;
    font-size: 0.28rem;
    color: rgb(154, 154, 154);
    overflow-y:scroll;
}

.main .left ul {
    width: 100%;
    border: none;
}

.main .left ul .bgli {
    color: #fc4141;
    background: #fff;
    text-align: center;
    border-right: none;
    border-left: 2px solid #fc4141;
}

.main .left ul li {
    line-height: 0.9rem;
    font-size: 0.25rem;
    font-weight: 500;
    text-align: center;
}

.main .right {
    width:5.08rem;
    height:auto;
    margin:0 .3rem;
    padding:.3rem 0;
    overflow-y:scroll;
}
.Rest{
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
}
.main .right section {
    width: 100%;
}
.main .right section dl {
   width:33%;
   margin-top:.1rem;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
}

.main .right section dl dt {
    width:.98rem;
    height:.69rem;
}

.main .right section dl dt img {
    width:.98rem;
    height:.69rem;
}

.main .right section dl dd {
    margin-top:.2rem;
     font-size:.18rem;
     color:#676767;
}
</style>
