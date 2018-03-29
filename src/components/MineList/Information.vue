<template>
<transition  leave-active-class="animated slideOutRight">
  <div id='main'>
      <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button class="mint-button mint-button--default mint-button--normal">
                        <router-link :to="{ path: '/Mine' }" tag='mt-button'  ><
                        </router-link> 
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">个人信息</h1>
            <div class="mint-header-button is-right"></div>
        </header>
      <div class="main">
          <ul class="list">
              <li>我的头像<span class="user_img"></span><b>></b></li>
              <li @click='NicknameOpen'>昵称 <p class="user_name">豆腐粉条</p><b>></b></li>
              <li>绑定手机号<p>13832854506</p><b>></b></li>
              <li @click="AddressOpen">我的地址<b>></b></li>
              <li @click='IDOpen'>账号与安全<b>></b></li>
              <li @click='TeamOpen'>我的分享人 <b>></b></li>

              <li  @click="actionSheet">退出登录</li>
          </ul>
      </div>

        <mt-actionsheet  
                    :actions= "data"  
                    v-model="sheetVisible">  
        </mt-actionsheet>


        <!-- 昵称 -->
            <mt-popup
                v-model="popupVisible"
                position="right"
                :modal=false> 
               <Nickname></Nickname>   
            </mt-popup>
            

         <!-- 我的地址 -->
            <mt-popup
                v-model="address"
                position="right"
                :modal=false> 
               <Myaddress></Myaddress>   
            </mt-popup>

        <!-- 账号与安全 -->
            <mt-popup
                v-model="safety"
                position="right"
                :modal=false> 
               <ID></ID>   
            </mt-popup>

       <!-- 我的分享人 -->
            <mt-popup
                v-model="Team"
                position="right"
                :modal=false> 
               <MyTeam></MyTeam>   
            </mt-popup>

      
  </div>
  </transition>
</template>
<script>

import ID from '../MineList/ID'
import Myaddress from '../MineList/MyAddress'
import Nickname from '../MineList/NickName'
import MyTeam from '../MineList/MyTeam'
import { Header,Cell,Actionsheet,Popup } from 'mint-ui';
    export default {
    data(){
        return {
        data: [{  
        name: '确定',  
        method : this.confirms
          }], 
         sheetVisible: false,    
         popupVisible:false,
         address:false,
         safety:false,
         Team:false
        }  
    },
    methods:{
        actionSheet: function(){  
        this.sheetVisible = true;  
        },
        confirms:function(){
            alert('退出登陆');
        },
        NicknameOpen: function() {
        this.popupVisible = true
        },
        AddressOpen:function(){
            this.address = true
        },
        IDOpen:function(){
          this.safety = true   
        },
        TeamOpen:function(){
          this.Team = true   
        },
      },
      components:{
          Nickname,
          Myaddress,
          ID,
          MyTeam        
      },
    }
</script>
<style scoped>
#Mine{
      width:100%;
      overflow: hidden;
}
    header{
    width:100%;
    background:#fff;
    color:#000;
    height:.94rem;
     font-size:.32rem;
   }
    .list li{
        width: 100%;
        line-height: 100%;
        padding-left: .3rem;
        background: #fff;
        border-top: 1px solid #e7e7e7;
        position: relative;
    }
    .list li b{
        float: right;
        font-size: .4rem;
        display: inline-block;
        position: absolute;
        right: .6rem;
    }
    .list li p{
        float: right;
        padding-right: 20%;
    }
    .list li:nth-child(1){
        height: 1.4rem;
        line-height: 1.4rem;
        font-size: .28rem;
        color: #2f2f2f        
    }
    .user_img{
        display: inline-block;
        width: .98rem;
        height: .98rem;
        border-radius: 50%;
        background: #ccc;
        position: absolute;
        padding-right: 0%;
        top: 15%;
        right: 20%;
    }
    .list li:nth-child(2),.list li:nth-child(3),.list li:nth-child(4),.list li:nth-child(5),.list li:nth-child(7),.list li:nth-child(6){
        height: .84rem;
        line-height: .84rem;
    }
    .list li:nth-child(6){
        margin-top: .2rem;
    }
    .list li:nth-child(7){
        padding: 0;
        margin-top: .2rem;
        text-align: center;
        font-size: .28rem;
        color: #2f2f2f
    }
    .mint-popup{
    width:100%;
    height:100%;
    position: absolute;
    z-index:99999;
    background:#f5f5f5;
}
</style>
