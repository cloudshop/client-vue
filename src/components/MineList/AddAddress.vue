<template>
  <div>
      <header class="header">
          <ul> 
              <router-link :to="{ path: '/MyAddress' }" tag='li'>&lt;</router-link>
              <li>编辑收货地址</li>
              <li><span>删除</span></li>
          </ul>
      </header>
      <div class="center">
          <ul>
              <li>姓名：<input type="text" v-model="name" id="name"></li>
              <li>电话：<input type="tel" v-model="phone" id="tel"></li>
              
          </ul>
          <p><img src="../../assets/manage/添加联系人.png"></p>
      </div>
      <ul class="bottom">
          <li>详细地址：<input type="text" v-model="contact" id="address_big"></li>
        
      </ul>
      
      <div class="button">
          <button @click="save">保存</button>
      </div>
  </div>
</template>
<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
   export default {
    data(){
          return {
              msg:'',
              name:"",
              phone:"17600044444",
              contact:""
         }
          var p1=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
    },
    methods:{
        closeEditAddress:function(){
            this.$parent.$parent.EditAddress = false
        },
        getParams () {
        // 取到路由带过来的参数 
        let routerParams = this.$route.params.dataobj
        // 将数据放在当前组件的数据内
        this.msg = routerParams
      },
      save(){
         
            if($('#name').val() == '' || $('#tel').val() == '' || $('#address_big').val() == ''){              
               alert("请填写收货信息")
            }else{
                var a=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/; 
                var b = $('#tel').val();
                 if(a.test(b)==false){
                     alert("您的手机号码未输入或输入有误")
                 }else{
                    //  alert('保存成功')
                    var accessToken = getCookie('access_token');
                 
                    var data = {"aliases":this.name,"phone":this.phone,"contact":this.contact}
                    //   var datas =  {"aliases":"xiaoming","phone":"18","contact":"大康大厦"}
                  // var datas = {"data":{"aliases" : amount,"phone":17600045817, "contact" : channel}};
                    //  $.ajax({
                    //     url:'http://cloud.eyun.online:9080/user/api/user-annexes-createAddress/',
                    //    // method:'post',
                    //     type : 'POST',  
                    //     contentType : 'application/json',  
                    //     dataType : 'json',  
                    //     data : JSON.stringify(datas),  
                    //     // data : datas,  
                    //     headers:{
                    //          'Authorization': 'Bearer ' + accessToken,
                    //         //   'Content-Type':"application/json"
                    //     },
                    //     success:function(res){
                    //        console.log(res)
                    //     },  
                    //     error(res){
                    //         console.log(res)
                    //     }
                    // })
                    this.$axios.post('http://cloud.eyun.online:9080/user/api/user-annexes-createAddress/',data,{
                        headers:{
                             'Authorization': 'Bearer ' + accessToken,
                        }
                        })
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                    console.log(data)
                    $('#name').val(''),$('#tel').val(''),$('#address_big').val('')
                 }
            }
        },
    }
   } 
</script>
<style scoped>
    .header{
        width: 100%;
        height: .96rem;
        background: #fff;
        border-bottom: 1px solid #e7e7e7;
         font-size:.32rem;
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
        margin-left: .3rem;
    }
    .header li:nth-child(3){
        text-align: right;
        margin-right: .3rem;
        color: #676767;
        font-size: .28rem;
    }
    .center{
        display: flex
    }
    .center ul{
        flex: 2;
        float: left;
    }
    .center li{
        height: .96rem;
        line-height: .96rem;
        padding-left: .3rem;
        font-size: .28rem;
        color: #676767;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }
    .center p{
        flex: 1;
        width: 1.68rem;
        height: 1.92rem;
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        text-align: center;
        border-left: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
    }
    .center img{
        width: 70%;
        height: 70%;
        margin-top: .3rem;
    }
    .center input{
        width: 3rem;
        margin-top: .15rem;
        height: .5rem;
        font-size: .28rem;
        color:#2f2f2f;
        border: none;
        outline: none;
    }
    .bottom{
        width: 100%;
    }
    .bottom li{
        height: .96rem;
        line-height: .96rem;
        padding-left: .3rem;
        font-size: .28rem;
        color: #676767;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
    }
    .bottom input{
        width: 3rem;
        margin-top: .15rem;
        height: .5rem;
        font-size: .28rem;
        color:#2f2f2f;
        border: none;
        outline: none;
    }
    .button{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom:1rem;
    }
    button{
        width: 3.26rem;
        height: .8rem;
        color:#fff;
        border: none;
        background: #ff0103;
        border-radius: .15rem;
       }
      #address_big{
           width:70%
       }
</style>
