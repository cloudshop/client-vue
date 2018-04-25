<template>
    <div>
        <header class="header">
            <ul>
                <li><span @click='back'>〈</span></li>
                <li><input type="search" placeholder="请输入你要搜索商品的名称"></li>
                <li><button>搜索</button></li>
            </ul>
        </header>
        <div class="main">
            <!-- <p>{{mentype}}</p> -->
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
        //  postFee:this.$router.params.name,
         postFee: this.$route.params.postFee,
         mentype: this.$route.params.mentype,
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
  },
  mounted:function(){
      if(this.mentype == 'homepage'){
          console.log(111)
      }else{
          console.log(222)
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
        display: flex;
    }
    .header li{
        flex: 1;
        line-height: .96rem;
        text-align: center
    }
    .header li:nth-child(1){
        font-size: .3rem;
        font-weight: bolder;
    }
    .header li:nth-child(2){
        flex:5;
    
    }
    .header li:nth-child(2) input{
        height: .6rem;
        width: 90%;
        border: none;
        background: #e7e7e7;
        border-radius: .3rem;
        padding-left: .4rem;
    }
    .header li:nth-child(3) button{
        border: none;
        background: orange;
        color: white;
        padding: .1rem .1rem;
        font-size: .12rem;
        border-radius: .2rem;
    }
</style>

