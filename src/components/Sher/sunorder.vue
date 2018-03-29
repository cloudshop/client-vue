<template>
    <div class="sunorder">
        <header class="header">
            <ul>
                <li><span>《</span></li>
                <li>晒单评价</li>
                <li><span>提交</span></li>
            </ul>
        </header>
        <div class="sunorder">
            <div class="sunorder_top">
                <p class="img">
                    <img src="../../assets/Mine/headportrait.jpg" alt="">
                </p>
                <ul class="list1">
                    <li>商品评分</li>
                    <li>
                        <ul id="pic">
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="write">
            <textarea name="" id="write" cols="30" rows="10" placeholder="输入评论内容"></textarea>
        </div>
        <p class="photo">
            <span>
                <img src="../../assets/sunorder/camer.png" alt="">
                <p>照片/视频</p>
            </span>
        </p>
        <p class="anonymous">
            
            <input type="checkbox" id="anonymous" name="sex" checked/>
            <label for="anonymous"> 匿名评价</label>
        </p>
        <p class="logistics">
            <img src="../../assets/sunorder/car.png" alt=""><i>物流服务评价</i>
        </p>
        <div class="sunorder_bottom">
            <ul>
                <li>快递包装
                    <ul id="pic2">
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                    </ul>
                </li>
                <li>送货包装
                    <ul id="pic3">
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                    </ul>
                </li>
                <li>配送服务员态度
                    <ul id="pic4">
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                            <li><b><img src="../../assets/sunorder/commstar.jpg" alt=""></b></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  mounted:function(){
       $("#pic li").on("click", function() {
                    //找到下标
                    var ind = $(this).index();
                    console.log(ind + 1)
                        //遍历img           
                    $("#pic img").each(function(i) {
                        //切换背景图
                        if (i <= ind) {
                            $("#pic img").eq(i).css("top", 0)
                        } else {
                            $("#pic img").eq(i).css("top", -20)
                        }
                    })
                });
              
       $("#pic2 li").on("click", function() {
                    //找到下标
                    var ind = $(this).index();
                    console.log(ind + 1)
                        //遍历img           
                    $("#pic2 img").each(function(i) {
                        //切换背景图
                        if (i <= ind) {
                            $("#pic2 img").eq(i).css("top", 0)
                        } else {
                            $("#pic2 img").eq(i).css("top", -20)
                        }
                    })
                })   

        $("#pic3 li").on("click", function() {
                    //找到下标
                    var ind = $(this).index();
                    console.log(ind + 1)
                        //遍历img           
                    $("#pic3 img").each(function(i) {
                        //切换背景图
                        if (i <= ind) {
                            $("#pic3 img").eq(i).css("top", 0)
                        } else {
                            $("#pic3 img").eq(i).css("top", -20)
                        }
                    })
                }) 
 
        $("#pic4 li").on("click", function() {
                    //找到下标
                    var ind = $(this).index();
                    console.log(ind + 1)
                        //遍历img           
                    $("#pic4 img").each(function(i) {
                        //切换背景图
                        if (i <= ind) {
                            $("#pic4 img").eq(i).css("top", 0)
                        } else {
                            $("#pic4 img").eq(i).css("top", -20)
                        }
                    })
                }) 
 
 
 
  }
}
</script>

<style scoped>
    html,body{
      
        height: 100%;
  
    }
    .sunorder{
        width: 100%;
        overflow-x: hidden;
        background: #fff;
    }
    .header{
        width: 100%;
        height: .96rem;
        border-bottom: 1px solid #e7e7e7;
        background: #fff;
    }
    .header ul{
        display: flex;
    }
    .header li{
        flex: 1;
        text-align: center;
        line-height: .96rem;
    }
    .header li:nth-child(1){
        text-align: left;
    }
    .header li:nth-child(3){
        text-align: right;
       
    }
    .header li:nth-child(1) span{
        padding-left: .3rem;
    }
    .header li:nth-child(3) span{
        padding-right: .3rem;
    }
      .sunorder_top{
        width: 100%;
     
        /* border-top: 1px solid #e7e7e7; */
    }
    .sunorder_top ul{
        /* float: left; */    
        background: #fff;
    }
    .img{
        width: 2rem;
        height: 2rem;     
        background: #fff;
        padding: .3rem;
        float: left;
        padding-right: .34rem;
    }
    .sunorder_top ul li:nth-child(1){
        padding-top: .3rem;
        color: #2f2f2f;
        font-size: .32rem;
    }
    .list1{
        background: #fff;
    }
    .list1 li{
        padding-top: .3rem;
        background: #fff;
    }
    .list1 li:nth-child(2){
        margin-top: 0rem;  
    }
    .sunorder_top ul li:nth-child(2){
        /* margin-top: 1rem; */
        color: #696969;
        font-size: .24rem;
        position: relative;
        background: rgba(0, 0, 0, 0)
        /* padding-bottom: .5rem; */
    }
    .sunorder_top ul li:nth-child(2) span{
        padding: .08rem;
        color: #fff;
        border-radius: .1rem;
        background: #1692e1;
        margin-left: .2rem;
    }
    .img img{
        width: 100%;
        height: 100%;
        
    }
    #pic{
        width: 100%;
        overflow: hidden;
        position: absolute;
        left: 2.7rem;    
    }
    #pic li {
            float: left;
            padding-right: .2rem;
            /* padding-right:  */ 
        }
    #pic li:last-child{
        padding-right: 19%;
    }    
    #pic li b {
            width: 21px;
            height: 21px;
            line-height: 21px;
            display: inline-block;
            overflow: hidden;
            position: relative;
        }   
    #pic li b img {
            position: absolute;
            left: 0;
            top: -22px;
        }

 
 
 
 #pic2{
        width: 100%;
        overflow: hidden;
        /* position: absolute;
        left: 2.5rem;     */
        position: absolute;
        bottom: -.1rem;
        right: -50%;
       
        }
    #pic2 li {
            float: left;
            padding-right: .2rem;
            /* padding-right:  */ 
            padding-top: 0;
            padding-left: 0;
        }
    #pic2 li:last-child{
        padding-right: 19%;
    }    
   #pic2 li b {
            width: 21px;
            height: 21px;
            line-height: 20px;
            display: inline-block;
            overflow: hidden;
            position: relative;
        }   
  #pic2 li b img {
            position: absolute;
            left: 0;
            top: 0;
        }


 #pic3{
        width: 100%;
        overflow: hidden;
        /* position: absolute;
        left: 2.5rem;     */
        position: absolute;
        bottom: -.1rem;
        right: -50%;   
    }
    #pic3 li {
            float: left;
            padding-right: .2rem;
            /* padding-right:  */ 
            padding-top: 0;
            padding-left: 0;
        }
    #pic3 li:last-child{
        padding-right: 19%;
    }    
   #pic3 li b {
            width: 21px;
            height: 21px;
            line-height: 20px;
            display: inline-block;
            overflow: hidden;
            position: relative;
        }   
  #pic3 li b img {
            position: absolute;
            left: 0;
            top: 0;
        }

#pic4{
        width: 100%;
        overflow: hidden;
        /* position: absolute;
        left: 2.5rem;     */
        position: absolute;
        bottom: -.1rem;
        right: -50%;   
    }
    #pic4 li {
            float: left;
            padding-right: .2rem;
            /* padding-right:  */ 
            padding-top: 0;
            padding-left: 0;
        }
    #pic4 li:last-child{
        padding-right: 19%;
    }    
   #pic4 li b {
            width: 21px;
            height: 21px;
            line-height: 20px;
            display: inline-block;
            overflow: hidden;
            position: relative;
        }   
  #pic4 li b img {
            position: absolute;
            left: 0;
            top: 0;
        }
    #write{
        width: 100%;
        height: 2.7rem;
        padding-left: .4rem;
        background: #f5f5f5;
        padding-top: .2rem;
        font-size: .28rem;  
        border: none;
    }    
    input::-webkit-input-placeholder{ /*WebKit browsers*/
    color: #c4c4c4;
    }
    .photo{
        width: 100%;
        padding-bottom: .3rem;
    }
    .photo span{
        margin-top: .2rem;
        margin-left: .4rem;
        display: inline-block;
     
        text-align: center;
 
        border: 1px dashed #c4c4c4;
    }
    .photo span img{
        width: 50%;
        padding-top: .24rem;
    }
    .photo span p{
        font-size: .24rem;
        padding-top: .23rem;
        padding-bottom: .2rem;
        color:#c4c4c4; 
    }
    .anonymous{
        padding-bottom: .3rem;
        border-bottom: 1px solid #e7e7e7;
    }
    #anonymous{
        display: none;
    }
    .logistics{
        /* border-bottom: 1px solid #e7e7e7;    */
        width: 100%;
        height: 1.15rem;
        overflow: hidden;
    }
    .logistics i{
        float: left;
        padding-top: .35rem;
        margin-left: .15rem;
    }
    .logistics img{
        padding-top: .3rem;
        padding-left: .4rem;
        padding-bottom: .3rem;
        width: .44rem;
        float: left;   
    }
    .sunorder_bottom{
        width: 100%;
        border-top: 1px solid #e7e7e7;
        padding-bottom: 1rem;
    }
    .sunorder_bottom li{
        position: relative;
        padding-top: .5rem;
        font-size: .28rem;
        color: #2f2f2f;
        padding-left: .95rem;
    }
    .sunorder_bottom li:nth-child(1){
        padding-top: .4rem;
    }

        input[type="checkbox"] + label::before {
        box-sizing: border-box;
        content: " "; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        width: 1.5em;
        height: 1.5em;
        background: url("../../assets/manage/change_no.png");
        background-size: 100% 100%;
        /* margin-right: .4em; */
        border-radius: 50%;
        margin-top: -.1rem
    }
    input[type="checkbox"]:checked + label::before {
        background: red;
        background: url("../../assets/manage/change.png");     
        background-size: 100% 100%;
    }
    label{
        color: #2f2f2f;
        font-size: .28rem;
        padding-left: .4rem;
    }
</style>
