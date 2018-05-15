<template>
  <div class='SellerCenter'>
       <header class="mint-header">
           <div class="mint-header-button is-left">
               <a class="router-link-active">
                   <button @click="back" class="mint-button mint-button--default mint-button--normal">
                       <!-- <router-link :to="{ path: '/Mine' }" tag='button' class="mint-button mint-button--default mint-button--normal"> -->
                    <mt-button icon="back"></mt-button>
                   </button>
              </a>
            </div> 
             <h1 class="mint-header-title">商户中心</h1>
            <div class="mint-header-button is-right"></div>
        </header>

        <div class='content'>
            <div class='TopContent' v-show="type==3?false:true" v-bind:hidden="type==5?true:false">
                <div  v-show="type==1?true:false">
                	<h2>普通商家相关权益</h2>
	                <h3>入驻要求</h3>
	                <ul>
	                    <li>年服务费0元;</li>
	                    <li>提供身份证,营业执照等相关信息;</li>
	                </ul>
	                <h3>积分奖励</h3>
	                <ul>
	                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
	                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
	                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
	                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
	                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
	                </ul>
	                <h3>积分奖励</h3>
	                <ul>
	                    <li>分享增值商家入驻100元现金奖励</li>
	                </ul>
	                <router-link :to="{ path: '/OrdinaryBusiness' }" tag="button" class='MyBtn'>申请成为普通商家</router-link>
                </div>
                <div class="msg" v-show="type==2?true:false">
                	<h2>普通商家相关权益</h2>
	                <h3>入驻要求</h3>
	                <ul>
	                    <li>年服务费0元;</li>
	                    <li>提供身份证,营业执照等相关信息;</li>
	                </ul>
	                <h3>积分奖励</h3>
	                <ul>
	                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
	                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
	                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
	                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
	                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
	                </ul>
	                <h3>积分奖励</h3>
	                <ul>
	                    <li>分享增值商家入驻100元现金奖励</li>
	                </ul>
									<p>申请正在处理中...</p>
								</div>
            </div>
            <div class='BottomContent' v-show="type==1?false:true" v-bind:hidden="type==5?true:false">
                 <div v-show="type==3?true:false">
	                 	<h2>增值商家相关权益</h2>
	                 <h3>入驻要求</h3>
	                 <ul>
	                    <li>年服务费998元/年;</li>                   
	                    <li>提供身份证,营业执照等相关信息;</li>
	                    <li>提供商家管理者身份认证;</li>
	                </ul>
	                 <h3>积分奖励</h3>
	                 <ul>
	                    <li>享受自身让利额2倍的贡融积分奖励;</li>
	                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
	                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
	                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
	                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
	                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
	                </ul>
	                 <h3>积分奖励</h3>
	                 <ul>
	                    <li>分享增值商家入驻100元现金奖励</li>
	                </ul>
	                <router-link :to="{ path: '/Appreciation' }" tag="button" class='MyBtn'>申请成为增值商家</router-link>
                 </div>
             		<div class="msg" v-show="type==4?true:false">
             			<h2>增值商家相关权益</h2>
	                 <h3>入驻要求</h3>
	                 <ul>
	                    <li>年服务费998元/年;</li>                   
	                    <li>提供身份证,营业执照等相关信息;</li>
	                    <li>提供商家管理者身份认证;</li>
	                </ul>
	                 <h3>积分奖励</h3>
	                 <ul>
	                    <li>享受自身让利额2倍的贡融积分奖励;</li>
	                    <li>享受自己消费,商家让利额10倍贡融积分奖励;</li>
	                    <li>直接分享会员消费让利10%的贡融积分奖励;</li>
	                    <li>间接分享会员消费让利额10%的贡融积分奖励;</li>
	                    <li>直接分享商家让利额10%的贡融积分奖励;</li>
	                    <li>间接分享商家让利额10%的贡融积分奖励;</li>
	                </ul>
	                 <h3>积分奖励</h3>
	                 <ul>
	                    <li>分享增值商家入驻100元现金奖励</li>
	                </ul>
									<p>申请正在处理中...</p>
								</div>
            </div>
            <div class='ServiceContent'  v-show="type==5?true:false" v-bind:hidden="type==1?true:false">
                 <!--<h2>服务商相关权益</h2>-->
                 <h3>服务商权益</h3>
                 <ul>
                    <li>1 享受自身销售让利贡融积分奖励;</li>                   
                    <li>2 享受体系内商家入住分红;</li>
                    <li>3 享受体系内商家销售交易手续费分红;</li>
                    <li>4 享受体系内无限制商家销售让利积分奖励;</li>                   
                    <li>5 享受间接体系内无线商家销售让利积分奖励;</li>
                    <li>6 享受间接享受体系内无限制商家销售让利积分奖励;</li>
                    <li>7 可建立贡融积分线下运营中心;</li>
                    <li>8 有机会参加贡融积分服务商大会;</li>
                </ul>
                 <h3>商家入驻流程</h3>
                 <ul>
                    <li>1 已有贡融商城入驻增值商家;</li>
                    <li>2 缴纳全额平台代理费用（2万元/年）;</li>
                    <li>3 确定服务商申请协议，并上传公司及法人代表相关资料和资格证件;</li>
                    <li>4 开始拓展市场，发展商家入驻贡融商城;</li>
                </ul>
                <router-link :to="{ path: '/servershop' }" tag="button" class='MyBtn'>申请成为服务商</router-link>
            </div>
        </div>

         <!-- 申请成为普通商家 -->
            <mt-popup
                v-model="OrdinaryBusinessPage"
                position="right"
                :modal=false> 
               <OrdinaryBusiness></OrdinaryBusiness>   
            </mt-popup>

         <!-- 申请成为增值商家 -->
            <mt-popup
                v-model="AppreciationPage"
                position="right"
                :modal=false> 
               <Appreciation></Appreciation>   
            </mt-popup>
  </div>
</template>

<script>
import { Header, Popup } from "mint-ui";
import OrdinaryBusiness from "../MineList/OrdinaryBusiness";
import Appreciation from "../MineList/Appreciation";
export default {
  data() {
    return {
      OrdinaryBusinessPage: false,
      AppreciationPage: false,
      type:1
      
    };
  },
  methods: {
    SellerCenterClose: function() {
      this.$parent.$parent.SellerCenterPage = false;
    },
    OrdinaryBusinessPageOpen() {
      this.OrdinaryBusinessPage = true;
    },
    AppreciationPageOpen() {
      this.AppreciationPage = true;
    },
    back() {
//  	this.$router.push("/Mine");
      var val = {
        func: "closeCurrent",
        param: {}
      };
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isiOS) {
        window.webkit.messageHandlers.GongrongAppModel.postMessage(val);
      } else if (isAndroid) {
        window.androidObject.JSCallAndroid(JSON.stringify(val));
      }
    }
  },
  components: {
    OrdinaryBusiness,
    Appreciation
  },
  created(){
    this.type = this.$route.params.type;
    console.log(this.$route.params);
    var url = window.location.href;
    this.type = url.split("?")[1].split("=")[1];
  }
};
</script>

<style scoped>
.msg{
	width: 100%;
	height: 92%;
	background: rgba(0,0,0,0.3);
	position: absolute;
	left: 0;
	top: 8%;
	z-index: 9;
	padding: 0.2rem 4%;
}
	
.msg p{
	width: 80%;
	height: 18%;
	background: #fff;
	position: absolute;
	left: 6%;
	top: 45%;
	z-index: 10;
	font-size: 0.3rem;
	border-radius: 0.1rem;
	text-align: center;
	line-height: 600%;
}
.SellerCenter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #f5f5f5;
}
header {
  width: 100%;
  background: #fff;
  color: #2f2f2f;
  height: 8%;
  font-size: 0.32rem;
  border-bottom: 1px solid #e7e7e7;
}
.TopContent {
  height: 8rem;
  background: #fff;
  margin: 0.2rem 0.3rem 0 0.3rem;
  border-radius: 0.2rem;
}
.BottomContent {
  background: #fff;
  height: 9rem;
  margin-top: 0.2rem;
  margin: 0.2rem 0.3rem 0 0.3rem;
  border-radius: 0.2rem;
}
.ServiceContent {
  background: #fff;
  height: 9.9rem;
  margin-top: 0.2rem;
  margin: 0.2rem 0.3rem 0 0.3rem;
  border-radius: 0.2rem;
  padding-top: 0.12rem;
}
.ServiceContent h3{
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
}
h2 {
  font-size: 0.32rem;
  color: #2f2f2f;
  padding-top: 0.22rem;
  padding-left: 0.22rem;
}
h3 {
  border-left: 0.06rem solid #0bacff;
  padding-left: 0.16rem;
  margin-top: 0.2rem;
  font-size: 0.24rem;
  color: #2f2f2f;
}
ul li {
  font-size: 0.24rem;
  color: #2f2f2f;
  margin-left: 0.24rem;
  line-height: 0.55rem;
}
.MyBtn {
  width: 70%;
  background: #0bacff;
  margin-left: 15%;
  height: 0.8rem;
  border-radius: 0.12rem;
  font-size: 0.32rem;
  color: #fff;
  border: 0;
  margin-top: 0.2rem;
}
</style>
