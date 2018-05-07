<template>
  <div class='detailsTwo'>
       <!-- 搜索   返回按钮 -->
        <div class="classify_search_header">
            <div class="classify_search_ss">
                <em @click='back'>&lt;</em>
                <p><a><img src="../../assets/HomePage/搜索.png" alt=""></a><input type="text" placeholder="  请输入搜索关键词" v-model="seekContent"></p>
                <span @click='seekAll'>搜索</span>
            </div>
        </div>
        <!-- "综合", "销量","价格","筛选" -->
        <ul class="PageAll_tab_ul" v-show='flag'>
            <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </ul>
        <!-- 内容 -->
        <div class="tabCon">
            <div class='content' >             
                <div class="tabCon_main"  v-for='(item,index) in arr.mainContent' :key="index"  :data='item.id' @click='details(item.id)'>
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
        </div>
  </div>
</template>

<script>
export default {
    data() {
       return {
            num: 0,
            tabs: ["综合","销量","价格","筛选"],
            arr:null,
            id:null,
            seekContent:'',
            name:null,
            flag:true
        }
    },
    methods: {
        tab(index) {
            this.num = index; 
            if(this.num == 0){
                var that = this;
                this.$axios({
                        method:'post',
                        url:'api/product/api/product/all',
                        data: {
                            'categoryId':this.id.DetailsTwo,
                            },
                        headers:{'Content-Type': 'application/json',}
                })
                .then(function(response) {
                    console.log(response.data)   
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }else if(this.num == 1){
                var that = this;
                this.$axios({
                        method:'post',
                        url:'api/product/api/product/all',
                        data: {
                            'categoryId':97,
                            'sale':1,
                            },
                        headers:{'Content-Type': 'application/json',}
                })
                .then(function(response) {
                    console.log(response.data)   
                    that.arr = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }else if(this.num == 2){                      
            var that = this;
            this.$axios({
                    method:'post',
                    url:'api/product/api/product/all',
                    data: {
                        'categoryId':this.id.DetailsTwo,
                         "price":1
                        },
                    headers:{
                    'Content-Type': 'application/json',
                    }
            })
            .then(function(response) {
                console.log(response.data)   
                that.arr = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
             } 
        },
        // PostMan(params){
        //     var that = this;
        //     this.$axios({
        //         method:'post',
        //         url:'api/product/api/product/all',
        //         data:params,
        //         headers:{
        //         'Content-Type': 'application/json',
        //         }
        //     })
        //     .then(function(response) {
                
        //     that.arr = response.data.mainContent;
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     }) 
        // },
        details(id){
          sessionStorage.setItem("GoodsID",id);                 
          this.$router.push({name:"Product",params:{name:'/DetailsTwo'}})         
        },
        seekAll(){
            console.log(this.seekContent)
            this.name = sessionStorage.getItem("name")       
            var that = this;
            this.$axios({
                method:'post',
                url:'api/product/api/product/all',
                data:{
                "categoryId":this.name,
                "productName":this.seekContent
                },
                headers:{'Content-Type': 'application/json',}
            })
            .then(function(response) {
                that.arr = response.data.mainContent;
            })
            .catch((error)=>{
                console.log(error);
            }) 
        },
        back(){        
          var  val={
             "func":"closeCurrent",
              "param":{'refreshParent':true},
             };
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
          if(isiOS){
             window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
          }else if(isAndroid){  
             window.androidObject.JSCallAndroid(JSON.stringify(val));
          }
        // if(this.$route.params.name == '/FromPage'){
        //     this.$router.push({name:"HomePage"})    
        // }else{
        //       this.$router.push({name:"Classify"})
        // }
        },
        GetParams(id){
          var that = this;
          this.id = JSON.parse(id); 
          this.$axios({
                method:'post',
                url:'api/product/api/product/all',
                data: {'categoryId':this.id.DetailsTwo},
                headers:{'Content-Type': 'application/json',}
          })
          .then(function(response) {
              console.log(response.data)   
              that.arr = response.data;
          })
          .catch(function(error) {
              console.log(error);
        });
        }
    },
    created(){},
    mounted(){
        window.GetParams = this.GetParams;
    }
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
input::-webkit-input-placeholder {
    color: #aab2bd;
}
.classify_search_ss {
    height:.96rem;
}
.classify_search_ss em{
    float:left;
    font-size:.24rem;
    line-height:.96rem;
    margin:0 .2rem;
}
.classify_search_ss img{
    width:.4rem;
    height:.4rem;
    position: absolute;
    left:.6rem;
    top:.25rem;
    z-index: 999;
}
.classify_search_ss input{
    border-radius:.12rem 0 0 .12rem;
    height:.5rem;
      float:left;
      width:65%;
      margin-top:.2rem;
      border:0;
      background:#f2f2f2;
      padding-left:.8rem;
      position: relative;
}
.classify_search_ss span{
    float:left;
    background:#1c90db;
    padding:.14rem .24rem;
    color:#fff;
    margin-top:.2rem;
    border-radius:0 .12rem .12rem 0;
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
