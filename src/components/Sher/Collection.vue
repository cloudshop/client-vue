<template>
  <div>
      <header class="header">
          <ul>
               <router-link :to="{ path: '/Mine' }" tag='li'>&lt;</router-link>
              <li class="chage"><span class="col">商品</span><span>店铺</span></li>
              <li></li>
          </ul>
      </header>
      <div class="center">
          <div class="shops">
              <div v-for="(item,index) in items" class="change_top">
                  <p class="img">
                        <img src="../../assets/Mine/headportrait.jpg" alt="">
                    </p>
                    <ul>
                        <li>{{item.name}} </li>
                        <li>￥<b>{{item.price}}</b></li>
                        <li>
                           <span>看相似</span>
                           <span>取消关注</span>
                           <i></i>
                        </li>
                    </ul>  
              </div>
          </div>
          <div class="shophouse">
              <div class="change2_top">
                  <p class="img">
                        <img src="../../assets/Mine/headportrait.jpg" alt="">
                    </p>
                    <ul>
                        <li>双肩包双肩包双肩包双肩包双肩包双肩包双肩包双肩 </li>
                        <li><b>100</b>万人关注</li>
                        
                    </ul>  
              </div>    
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {id:'1',name:'双肩包双肩包双肩包双肩包双肩包双肩包双肩包双肩 ',price:'181'},
                {id:'1',name:'单肩包单肩包单肩包单肩包单肩包单肩包单肩包单肩 ',price:'511'},
                {id:'1',name:'三间包三间包三间包三间包三间包三间包三间包三间 ',price:'1821'},
            ],
            data:''
        }
    },
    created(){
        var Goods=sessionStorage.getItem("GoodsID"); // 商品id 
        var that = this;
        this.$axios.get('http://cloud.eyun.online:9080/favorite/api/delFavorite/'+ Goods)
        .then(function(response) {
        // that.data = response.data; 
        console.log(response);
        })
        .catch(function(error) {
        console.log(error);
        }); 

    },
    mounted:function(){
      
      $('.chage span').click(function(){
         var a =  $(this).addClass('col').siblings().removeClass("col");
   
         $('.center>div:eq('+$(this).index()+')').show().siblings().hide();	
      })
  }
}
</script>

<style scoped>
.shophouse{
    display: none;
}
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        border-bottom: 1px solid #e7e7e7;
    }
    .header ul{
        display: flex
    }
    .header li{
        flex: 1;
        line-height: .96rem;
        text-align: center;
      
    }
    .header li:nth-child(1){
        text-align: left;
          font-size:.32rem;
          padding-left:.3rem;
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
    }
    .header li:nth-child(2){
        flex: 1;    
        line-height: .96rem;
        text-align: center;
    }
    .header li:nth-child(2) span{
        width: .58rem;
        height: 90%;
        display: inline-block;
        background: #fff;
         
        box-sizing: border-box;
    }
    .col{
        color: #ff0103;
        border-bottom: 2px solid red;    
    }
    .header li:nth-child(2) span:nth-child(2){
        margin-left: .5rem;
    }
    .change_top{
        width: 100%;
        overflow: hidden;
       padding-bottom: .1rem;
  
        /* border-top: 1px solid #e7e7e7; */
    }
    .change_top ul{
        /* float: left; */    
        background: #fff;
        padding-bottom: .3rem;
    }
    .img{
        width: 2rem;
        height: 2rem;     
        overflow: hidden;
        float: left;
        padding-right: .34rem;
    
    }
    .change_top ul li:nth-child(1){
        padding-top: .3rem;
        color: #2f2f2f;
        font-size: .32rem;
    }
    .change_top ul li:nth-child(2){
        margin-top: .2rem;
        color: #696969;
        font-size: .24rem;

        padding-bottom: .3rem;
    }
    .change_top ul li:nth-child(3){
        padding-bottom: .2rem;
        position: relative;
    }
    .change_top ul li:nth-child(3) span{
        width: 1.1rem;
        padding: .08rem;
        color: #2f2f2f;
        border-radius: .1rem;
        background: #fff;
        margin-left: .2rem;
        border: 1px solid #2f2f2f;
    }
    .change_top ul li:nth-child(3) i{
        position: absolute;
        right: .4rem;
        width: .7rem;
        top: -.2rem;
        height: .7rem;
        background: url('../../assets/collection/che.png');
        background-size: 100% 100%;
    }
    .img img{
        width: 100%;
        height: 94%;
    }

    .change2_top{
        width: 100%;
    
        /* border-top: 1px solid #e7e7e7; */
    }
    .change2_top ul{
        /* float: left; */    
        background: #fff;
        padding-bottom: .3rem;
    }
    .img{
        width: 2rem;
        height: 2rem;     
        padding: .3rem;
        float: left;
        padding-right: .34rem;
    }
    .change2_top ul li:nth-child(1){
        padding-top: .3rem;
        color: #2f2f2f;
        font-size: .32rem;
    }
    .change2_top ul li:nth-child(2){
        margin-top: .7rem;
        color: #696969;
        font-size: .24rem;

        padding-bottom: .3rem;
    }
    .change2_top ul li:nth-child(3){
        padding-bottom: .2rem;
        position: relative;
    }
    .change2_top ul li:nth-child(3) span{
        width: 1.1rem;
        padding: .08rem;
        color: #2f2f2f;
        border-radius: .1rem;
        background: #fff;
        margin-left: .2rem;
        border: 1px solid #2f2f2f;
    }
    .change2_top ul li:nth-child(3) i{
        position: absolute;
        right: .4rem;
        width: .7rem;
        top: -.2rem;
        height: .7rem;
        background: url('../../assets/collection/che.png');
        background-size: 100% 100%;
    }
 
</style>
