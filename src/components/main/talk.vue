<template>
  <div class="talk">
      <header class="header">
          <ul>
              <li><span>《</span></li>
              <li>贡荣积分商城</li>
              <li><span>进店</span></li>
          </ul>
      </header>
      <div class="main">

      </div>
      <footer class="footer">

          <p>
              <span><img src="../../assets/talk/wifi.png"></span>
              <input type="text" id="talk">
              <span><img src="../../assets/talk/矩形9.png"></span>
              <span class="more"><img src="../../assets/talk/矩形10拷贝.png"></span>
              <span class="send">发送</span>
          </p>
          <!-- <ul>
              <li><span><img src="../assets/talk/wifi.png"></span></li>
              <li><input type="text"></li>
              <li>
                  <span><img src="../assets/talk/矩形9.png"></span>
                  <span><img src="../assets/talk/矩形10拷贝.png"></span>
              </li>
          </ul> -->
      </footer>
  </div>
</template>
<script>
export default {
   mounted:function(){
       var mydate = new Date();
       var month = mydate.getMonth()+1;  //月份
       var day = mydate.getDate();       //当前日
       var hour = mydate.getHours()       //小时
       var minte = mydate.getMinutes();   //分钟
        
    var time = month+'月'+day+'日'+''+hour+'时'+minte+'分'

       $('.send').hide()
    //   if( $('#talk').val()==''){
    //       console.log('不变身')
    //   }else{
    //       console.log("变身")
    //   }
    $('#talk').focus(function(){
        $('.more').hide()
        $('.send').show()
    })
    $('.send').click(function(){
        console.log(time)
        var news = $('<ul><ul>')
        news.addClass("list")
        var lid = $("<li><span>"+time+"</span></li>")
        lid.addClass('lisli')
        // lid.css('width','red')
        $('lisli span').attr('color','red')
        var lis = $("<li>"+$('#talk').val()+"</li>")
        news.append(lid)
        news.append(lis)
        $('.main').append(news)
        console.log($('#talk').val())
        $('#talk').val('')
        
    })
    // if( $('#talk').blur() || $('.send').click()){
    //         console.log('触发')
    // }
   }
}
</script>

<style scoped>
    html{
        height: 100%;
    }
    body{
        display: flex;
        flex-direction: column;
        height: 100%;  
    }
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
        text-align: left;
    }
    .header li:nth-child(2){
        font-size: .28rem;
    }
    .header li:nth-child(3){
        text-align: right;
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
    }
    .header li:nth-child(3) span{
        display: inline;
        background: url('../../assets/talk/矩形6.png');
        background-size: 100% 100%;
        text-align: center;
        padding-right: .3rem;
        padding-left: .2rem;
        margin-right: .3rem;
        padding-top: .05rem;
        padding-bottom: .05rem;
        color:#fff;
    }
    .main{
        flex: 1
    }
    .footer{
        width: 100%;
        height: .98rem;
        position: absolute;
        line-height: .98rem;
        bottom: 0;

    }
    /* .footer ul{
        display: flex;
    }
    .footer li{
        flex: 1
    } */
    .footer p{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        background: #fff;
        position: relative;
    }
    .footer p img{
        width: 9%;
        height: 60%;
        vertical-align: middle;
    }
    .footer span:nth-child(1){
        padding-left: .12rem;
    }
    .footer input{
        margin-left: .1rem;
        margin-right: .07rem;
        /* width: 4.36rem; */
        width: 60%;
        height: .66rem;
        border: 1px solid #efefef;
        border-radius: 6px;
        padding-left: .2rem;
    }
    .more{
        /* margin-left: -.02rem; */
        /* display: inline-block;
        position: absolute;
        right: 0 */
        
    }
    .more img{
        height: 100%;
    }
    .main{
        width: 100%;
        text-align: center;
        background: #fff;
    }
    .main li{
        height: .78rem;

    }
    .list li{
        width: 100%;
        height: .78rem;
        text-align: center;
        color: red
    }
</style>
