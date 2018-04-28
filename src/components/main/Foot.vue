<template>
<div>
  <footer v-show='flag'>   
      <router-link :to="{ path: '/HomePage' }"  tag='dl'>
        <dt><img src="../../assets/HomePage/首页-未选中.png" alt=""></dt>
        <dd>首页</dd>
     </router-link>
     <router-link :to="{ path: '/Classify' }"  tag='dl'>
        <dt><img src="../../assets/HomePage/分类未选中.png" alt=""></dt>
        <dd>分类</dd>
       </router-link>
       <router-link :to="{ path: '/myQRCode' }"  tag='dl'>
        <dt class='logo'><img src="../../assets/HomePage/LOGO.png" alt="" ></dt>
      </router-link>
       <router-link :to="{ path: '/Shopping' }"  tag='dl'>
        <dt><img src="../../assets/HomePage/购物车未选中.png" alt=""></dt>
        <dd>购物车</dd>
      </router-link>
      <router-link :to="{ path: '/Mine' }"  tag='dl'>
        <dt><img src="../../assets/HomePage/我的未选中.png" alt=""></dt>
        <dd>我的</dd>
      </router-link>
     
  </footer>
</div>
</template>
<script>

export default {
    data(){
      return {
        flag:true
      }
    },
    methods:{
    // hwajax:function (strings) {
    //        this.data=strings;
    //        console.log(111)
    //        console.log(this.data)
    //   }
    },
    mounted:function () {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isiOS){
           this.flag = false
      }else{
           this.flag=false;
      }       
    },
}
</script>
<style scoped>
  footer{
    width:100%;
    display:flex;
    height:.96rem;
    background:#fcfcfc;
    position: relative;
    justify-content:center;
    align-items:center;
  }
  footer dl{
    flex:1;
    display:flex;
    justify-content:center; 
    align-items:center;
    flex-direction:column;
    color:#676767;
  }
  footer dl dt img{
    width:.36rem;
    height:.36rem;
  }
  .logo{
    width:.75rem;
    height:.75rem;
    border:.03rem  solid #dadbdb; 
    border-radius:50%;
  }
  .logo img{
    width:.5rem;
    height:.5rem;
    margin-left:.12rem;
    margin-top:.12rem;
  }
</style>
