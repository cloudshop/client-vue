<template>
<div>
    <header class="header">
        <ul>
        <router-link  :to="{ path: '/RemainingSum' }" tag='li'><span>&lt;</span></router-link>

            <li>充值中心</li>
            <li></li>
        </ul>
    </header>
    <div class="main">
        <ul class="main_top">
            <li value="500" class="col">500元</li>
            <li value="1000">1000元</li>
            <li value="2000">2000元</li>
            <li value="5000">5000元</li>
            <li value="10000">10000元</li>
            <li value="20000">20000元</li>
            <input type="text" placeholder="其他金额请点击这里输入" id="money">
        </ul>
        <p>选择支付方式</p>
       <div class="pay">
        <ul class="top_bottom1">
            <li><img src="../../assets/top/支付宝.png"></li>
            <li>
                <p>支付宝</p>
                <p>因为信任,所以简单</p>
                <span>
                    <input type="radio" class="1" id="zhifubao" name="sex" value="1" checked/>
                    <label for="zhifubao"></label>
                </span>
            </li>
        </ul>
       <ul class="top_bottom1 top_bottom2">
            <li><img src="../../assets/top/快捷支付.png"></li>
            <li>
                <p>快捷支付(开联通)</p>
                <p>因为信任,所以简单</p>
                <span>
                    <input type="radio" id="kuaijiezhifu" value="快捷支付" name="sex"/>
                    <label for="kuaijiezhifu"></label>
                </span>
            </li>
        </ul>
        <ul class="top_bottom1">
            <li><img src="../../assets/top/银联.png"></li>
            <li>
                <p>通联</p>
                <p>支付便捷,流畅支付</p>
                <span>
                    <input type="radio" id="tonglian" value="通联" name="sex"/>
                    <label for="tonglian"></label>
                </span>
            </li>
        </ul>

      
        <!-- <div class="jump"></div> -->
        </div> 
    </div>
    <div class="buttom">
        <button id="btn">
            确认充值
        </button>
    </div>
</div>
    
</template>
<script>
import $ from "jquery";
import { setCookie, getCookie } from "../../assets/js/cookie.js";

export default {
  mounted: function() {
    $(".main_top li").on("click", function() {
      $(this)
        .addClass("col")
        .siblings()
        .removeClass("col");
    });
    $("#money").focus(function() {
      $(".main_top li").removeClass("col");
    });

    //     $(".main_top").find("li").each(function () {
    //         $(this).click(function () {
    //        var monval = $(this).val();

    //         })
    //        console.log(monval)
    // })

    //     $(".main_top").find("li").each(function () {

    // })
    var accessToken = getCookie("access_token");

    $("#btn").on("click", function() {
      if ($("#money").val() == "") {
        $(".main_top")
          .find("li")
          .each(function() {
            //  console.log($(this).val())
            if ($(this).is(".col")) {
              var re = $('input:radio[name="sex"]:checked').val();
              var mo = $(this).val();
            //   console.log(mo);
            //   console.log("即将使用" + re + "为您充值" + $(this).val() + "元");
              //var data = {"aliases":this.name,"phone":this.phone,"contact":this.contact}
              var data = { payType: re, payment: mo };
          
              // this.$axios.post('http://cloud.eyun.online:9080/order/api/dep-orders/deposit',data,{
              //     headers:{
              //          'Authorization': 'Bearer ' + accessToken,
              //     }
              //     })
              // .then(function(res){
              //     console.log(res)
              // })
              // .catch(function(error){
              //     console.log(error)
              // })
              $.ajax({
                url:
                  "http://cloud.eyun.online:9080/order/api/dep-orders/deposit",
                // method:'post',
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(data),
                // data : datas,
                headers: {
                  Authorization: "Bearer " + accessToken
                  //   'Content-Type':"application/json"
                },
                success: function(res) {
                  console.log(res);
                  var param1 = 1;
                  var param2 = "orderStr" + ":" + res.orderString;
                  var param3 = res.orderString;
                 // var paytype = Ali;
                  //top

                  var val = {
                    func: "pay",
                    param: {
                        payType:"Ali",
                        orderStr: param3,

                    }
                  };
                    console.log(val)
                     console.log(JSON.stringify(val))
                  var u = navigator.userAgent;
                  var isAndroid =
                    u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
                  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                  if (isiOS) {
                    window.webkit.messageHandlers.GongrongAppModel.postMessage(
                      val
                    );
                  } else if (isAndroid) {
                    window.androidObject.JSCallAndroid(JSON.stringify(val));
                  }
               
                  //bottom
                },
                error(res) {
                  console.log(res);
                }
              });
            }
          });
      } else {
        var re = $('input:radio[name="sex"]:checked').val();
        console.log("即将使用" + re + "为您充值" + $("#money").val() + "元");
        var mm = $("#money").val();
        var data = { payType: re, payment: mm };
        $.ajax({
          url: "http://cloud.eyun.online:9080/order/api/dep-orders/deposit",
          // method:'post',
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(data),
          // data : datas,
          headers: {
            Authorization: "Bearer " + accessToken
            //   'Content-Type':"application/json"
          },
          success: function(res) {
               console.log(res);
                  var param1 = 1;
                  var param2 = "orderStr" + ":" + res.orderString;
                  var param3 = res.orderString;
                 // var paytype = Ali;
                  //top

                  var val = {
                    func: "pay",
                    param: {
                        payType:"Ali",
                        orderStr: param3,

                    }
                  };
                    console.log(val)
                     console.log(JSON.stringify(val))
                  var u = navigator.userAgent;
                  var isAndroid =
                    u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
                  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
                  if (isiOS) {
                    window.webkit.messageHandlers.GongrongAppModel.postMessage(
                      val
                    );
                  } else if (isAndroid) {
                    window.androidObject.JSCallAndroid(JSON.stringify(val));
                  }
               
                  //bottom
          },
          error(res) {
            console.log(res);
          }
        });
        $("#money").val("");
      }
    });
    // var re=$('input:radio[name="sex"]:checked').val();
    // console.log(re)
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.96rem;
  border-bottom: 1px solid #e7e7e7;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  height: 0.96rem;
  line-height: 0.96rem;
  background: #fff;
  text-align: center;
  font-size: 0.32rem;
}
.header li:nth-child(1) {
  text-align: left;
}
.header span {
  padding-left: 0.3rem;
}
.main {
  text-align: center;
}
.main_top {
  width: 100%;
  padding-bottom: 0.4rem;
  background: #fff;
}
.main_top input {
  width: 6.1rem;
  margin-left: 0.3rem;
  height: 0.66rem;
  /* margin-left: .4rem; */
  border-radius: 0.1rem;
  margin-right: 0.4rem;
  margin-top: 0.4rem;
  padding-left: 0.3rem;
  border: 2px solid #e7e7e7;
}
input::-webkit-input-placeholder {
  /*WebKit browsers*/
  color: #c4c4c4;
}
.main_top li {
  width: 1.95rem;
  background: #f2f2f2;
  text-align: center;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  float: left;
  margin-left: 6%;
  text-align: center;
  margin-top: 0.4rem;
  border-radius: 0.2rem;
}
.col {
  background: #fff;
  color: #ff5064;
  border: 1px solid #ff5064;
}
.main p {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  text-align: left;
  padding-left: 0.4rem;
  font-size: 0.28rem;
  color: #c4c4c4;
}
.pay {
  width: 100%;
  height: 4rem;
  overflow: auto;
}
.pay ul:last-child {
  margin-bottom: 3rem;
}
.top_bottom {
  background: #fff;
}
.top_bottom1 {
  width: 100%;
  height: 0.78rem;
  background: #fff;
  position: relative;
  margin-top: 0.02rem;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
}
.top_bottom1 li {
  width: 50%;
  text-align: left;
  float: left;
  line-height: 0.96rem;
  height: 0.96rem;
  background: #fff;
}

.top_bottom1 li:nth-child(2) {
  line-height: 0.45rem;
  position: relative;
}
.top_bottom1 li:nth-child(2) p:nth-child(2) {
  margin-top: 0.3rem;
}
.top_bottom1 img {
  width: 10%;
  left: 0.4rem;
  margin-top: 0.15rem;
  position: absolute;
}
.top_bottom1 p {
  line-height: 0.2rem;
  font-size: 0.32rem;
  margin-left: -2.5rem;
}
.top_bottom1 p:nth-child(1) {
  color: #2f2f2f;
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
  margin-top: -0.1rem;
}
input[type="radio"]:checked + label::before {
  background: red;
  background: url("../../assets/manage/change.png");

  background-size: 100% 100%;
}
.top_bottom1 input {
  display: none;
}
.top_bottom1 span {
  display: inline-block;
  position: absolute;
  line-height: 0.45rem;
  right: 0.5rem;
  top: 0.25rem;
}
.jump {
  width: 100%;
  height: 1rem;
  background: #ccc;
  opacity: 0;
}
.buttom {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  bottom: 0;
}
button {
  width: 100%;
  height: 1rem;
  border: none;
  color: #fff;
  font-size: 0.32rem;
  background: #ff5064;
}
</style>

