<template>
  <div class="manage">
      <div class="header">
          <ul>
              <router-link :to="{ path: '/Information' }" tag='li'>&lt;</router-link>
              <li>管理收货地址</li>
              <li>&nbsp;</li>
          </ul>
      </div>

      <div class="main">
          <ul class="list">
              <li>
                  <span class="name">皮皮虾</span>
                  <span class="tel">12312321312</span>
              </li>
              <li class="address">
                  武汉市武汉市未来大道
              </li>
              <li>
                  <span>       
                       <input type="radio" id="adress-01" name="sex" checked/>
                       <label for="adress-01"></label>
                        默认地址
                        <p>
                            <img src="../../assets/manage/编辑.png" alt="">编辑
                           <b><img src="../../assets/manage/删除.png" alt="">删除</b> 
                        </p>
                  </span>   
              </li>
          </ul>

          <ul>
              <li>
                  <span class="name">大闸蟹</span>
                  <span class="tel">23423423423</span>
              </li>
              <li class="address">
                  河北省河北省河北省
              </li>
              <li>
                  <span>       
                       <input type="radio" id="adress-02" name="sex"/>
                       <label for="adress-02"></label>
                        默认地址
                        <p>
                            <img src="../../assets/manage/编辑.png" alt="">编辑
                            <b><img src="../../assets/manage/删除.png" alt="">删除</b> 
                        </p>
                  </span>   
              </li>
          </ul>
      
         <ul>
              <li>
                  <span class="name">大闸蟹</span>
                  <span class="tel">23423423423</span>
              </li>
              <li class="address">
                  河北省河北省河北省
              </li>
              <li>
                  <span>       
                       <input type="radio" id="adress-03" name="sex"/>
                       <label for="adress-03"></label>
                        默认地址
                        <p>
                            <img src="../../assets/manage/编辑.png" alt="">编辑
                            <b><img src="../../assets/manage/删除.png" alt="">删除</b>
                        </p>
                  </span>   
              </li>
         </ul>
      
        <ul>
              <li>
                  <span class="name">大闸蟹</span>
                  <span class="tel">23423423423</span>
              </li>
              <li class="address">
                  河北省河北省河北省
              </li>
              <li>
                  <span>       
                       <input type="radio" id="adress-04" name="sex"/>
                       <label for="adress-04"></label>
                        默认地址
                        <p>
                            <img src="../../assets/manage/编辑.png" alt="">编辑
                            <b><img src="../../assets/manage/删除.png" alt="">删除</b>
                        </p>
                  </span>   
              </li>
        </ul>
            
      </div>
      <div class="bottom">
           <router-link :to="{ path: '/AddAddress' }" tag='button'>＋新建地址</router-link>
      </div>


      <!-- 编辑收货地址 -->
            <mt-popup
                v-model="EditAddress"
                position="right"
                :modal=false> 
               <AddAddress></AddAddress>   
            </mt-popup> 

       <div class="del">
           <div>
               确定删除地址吗？
           </div>
           <p>
               <span class="no">取消</span>
               <span class="yes">确定</span>
           </p>
       </div>     
  </div>
</template>
<script>
import AddAddress from '../MineList/AddAddress'
import { Header,Cell,Actionsheet,Popup } from 'mint-ui';
export default {
   data(){
       return{
          EditAddress:false,
       }  
   },
   methods:{
      closeAddress:function(){
          this.$parent.$parent.address = false
      },
      EditAddressOpen:function(){
          this.EditAddress = true;
      }
   },
   components:{
       AddAddress
   },
   mounted:function(){
       $(".no").click(function(){
            $('.del').hide()
            if($('.yes').click())
            console.log($(".main b").length)
            var a = $(".main b")
        //   function a(item, index) {
        //         // demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>"; 
        //         console.log(item)
        //         console.log(index)
        //     }
           
        });
       $(".list b").click(function(){
            $('.del').show()
        });
         
   }
} 
</script>


<style scoped>
html,body{
    width: 100%;
    height: 100%;
    display: flex;
}
    .manage{
       width: 100%;
       height: 100%;  
    }
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        position: absolute;
        top: 0;
        border-bottom: 1px solid #e7e7e7;
    
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
        text-align: left;
        padding-left: .3rem;
         font-size: .32rem;
    }
    .header li:nth-child(2){
        font-size: .32rem;
    }
    .main{
        flex: 1;
        width: 100%;
        height: 100%;

        overflow: auto;
    }
    .main ul{
     
        margin-top: .2rem;
    }
    .main ul:nth-child(1){
         margin-top: .96rem;
    }
    .main ul:last-child{
        margin-bottom: .96rem
    }
    .main li{
        background: #fff;
    }
    .main li:nth-child(1){
        padding-top: .35rem;
       
    }
    .main li:nth-child(1) span{
        font-size: .28rem;
    }
    .name{
        padding-left: .3rem;  
    }
    .tel{
        padding-left: .5rem;

    }
    .main li:nth-child(2){
        font-size: .24rem;
        color: #667766;
        padding-left: .3rem;
        padding-top: .25rem;
        padding-bottom: .35rem;
        border-bottom: 1px solid #e7e7e7
    }
    .main li:nth-child(3){
        height: .8rem;
        line-height: .8rem;
        padding-left: .3rem;
        color: #676767;
        font-size: .24rem;
        position: relative;
    }
    .main li:nth-child(3) input{
        display: none;
        padding-left: .3rem;
    }
    .main li:nth-child(3) p{
        display: inline-block;
        width: 80%;
        position: absolute;
        right: 0;
        text-align: right ;
        padding-right: .3rem;
    }
    .main li:nth-child(3) p img{
        vertical-align: middle;
        width: .5rem;
        height: .5rem;
        margin-top: -.1rem;
        margin-right: .2rem;
    }
    .main li:nth-child(3) p img:nth-child(2){
        margin-left: .5rem;
    }
    input[type="radio"] + label::before {
        box-sizing: border-box;
        content: " "; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        width: 2em;
        height: 2em;
        background: url("../../assets/manage/change_no.png");
        background-size: 100% 100%;
        /* margin-right: .4em; */
        border-radius: 50%;
        margin-top: -.1rem
}
input[type="radio"]:checked + label::before {
    /* background-color: #909194;
    background-clip: content-box; */
    background: red;
    background: url("../../assets/manage/change.png");
    
    background-size: 100% 100%;
}
button{
    display: inline-block;
    width: 90%;
    height: .8rem;
    border: none;
    border-radius: .2rem;
    color: #fff;
    margin-left: 5%;
    background: #ff0103;
}
.bottom{
    width: 100%;
    height: .96rem;
    background: #fff;
    position: absolute;
    bottom: 0;
}
.del{
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 999;
    text-align: center;
}
.del div{
    width: 70%;
    height: 2rem;
    line-height: 2rem;
    background: #fff;
    text-align: center;
    margin: auto;
    margin-top:60%;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
}
.del p{
    width: 70%;
    background: #fff;
    height: .7rem;
    line-height: .7rem;
    display: flex;
    margin: auto;
    border-top: 1px solid #e7e7e7;
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
    overflow: hidden;
}
.del span{
    flex: 1;
}
.del span:last-child{
    background: #ff0103;
    color: #fff;
    
}
</style>
