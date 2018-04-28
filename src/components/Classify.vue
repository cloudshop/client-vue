<template >
<div>
      
        <header class='header'>
            <img src="../assets/Classify/扫码黑色.png" alt="">
             <div class='ipt'>
                  <input type="text" placeholder="内容推荐" @click='GoogleSearch'>
                  <i class='sou'></i>
            </div> 
            <img src="../assets/Classify/消息黑色.png" alt="">  
        </header>
      <div class='content'>
        <div class='main'>
            <ul>
                <li v-for='(item,index) in arr.firstCategory'
                 :key='index'  @click='click(item.firstid)'
                   :class='item.firstid == (id) ? "active":"normal"'>
                   {{item.firstidname}} </li>
                <!-- <li>家用电器</li>  
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li>
                <li>家用电器</li> -->
            </ul>      
            <div class='maincontent'>
                    <div v-for='(item,index) in arr.secondCategory' :key="index" >
                        <h1>{{item.secondName}}</h1>
                        <div class='renderContent'>
                            <dl v-for='(i,v) in item.thirdCategory' :key='v' :data='i.thirdid' @click='ItemDescription(i.thirdid)'>
                                <dt><img :src="i.logo" alt=""></dt>
                                <dd>{{i.thirdName}}</dd>
                            </dl>
                        </div>
                     </div> 
                      <!-- <div>
                        <h1>电视</h1>
                        <div class='renderContent'>
                            <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                        </div>
                     </div>  
                    <div>
                        <h1>电视</h1>
                        <div class='renderContent'>
                            <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                             <dl>
                                <dt><img src="../assets/Classify/bg.gif" alt=""></dt>
                                <dd>111</dd>
                            </dl>
                        </div>
                     </div>                   -->
            </div>
        </div>       
     </div>
        <Foot></Foot>
</div>
</template>

<script>
import Foot from './main/Foot'
export default {
    data(){
      return {
        num:0,
        arr:'',
        id:'1',   //列表ID
     }
    },
    created(){
      var that = this;
      this.$axios.get('api/product/api/categoryTree/subnode/1')
             .then(function(response) {
               that.arr = response.data;
           })
            .catch(function(error) {
                 console.log(error);
      });     
    },
    methods:{
     click(value){
      this.id = value;
      var that = this;
      this.$axios.get('api/product/api/categoryTree/subnode/'+that.id)
             .then(function(response) {
               that.arr = response.data;
           })
            .catch(function(error) {
                 console.log(error);
           });    
        },
      ItemDescription(value){
       this.data = value;
        sessionStorage.setItem("name",value)        
        // this.$router.push({name:"DetailsTwo"})
         var  val={
              "func":"openURL",
              "param":{
                  "URL":'http://cloud.eyun.online:8888/#/DetailsTwo?DetailsTwo='+value,
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
      GoogleSearch(){
           this.$router.push({name:"DetailsTwo",params:{name:'/FromClass'}})
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
    .main{
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
        width:1.55rem;
        height:.94rem;
        text-align:center;
        line-height: .94rem;
        border:1px solid #e7e7e7;
        border-right:0;
        border-left:0;
        border-top:0;
        font-size:.24rem;
        color:#2f2f2f;
    }
    .main ul li:first-child{
        border-top:1px solid #e7e7e7;
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
        width:1.18rem;
        height:.89rem;
    }
    .maincontent .renderContent dl dt img{
        width:100%;
        height:100%;
    }
    .maincontent .renderContent dl dd{
        margin-top:.2rem;
        font-size:.18rem;
        color:#676767;
    }
    .active{
        background:#f5f5f5;
        color:#ff0103!important;
    }
</style>
