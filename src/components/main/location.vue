<template>
  <div>
      <header class="header"  data-role="page" id="test">
         <div class="ui-content">
            <ul data-role="listview" class="listview">
                <li >
                    <span>城市选择:</span><span id="city" style="color:#d7d7d7;padding-left:5px;">选择您的的地区</span>
                </li>
            </ul>
	    </div>
        
      </header>
  </div>
</template>
<script>
export default {
    mounted:function(){
        $("#city").click(function (e) {
                SelCity(this,e);
                console.log(this);
            });
        
    }
              
}
</script>
<style>
.listview{
    font-size: .32rem;
    background: #fff;
}
.listview li{
    height: .96rem;
    line-height: .96rem;
}
._citys {width:100%; height:200%;display: inline-block; position: absolute; top: -45%}
._citys span { color: #ff0103; height: 15px; width: 15px; line-height: 15px; text-align: center; border-radius: 3px; position: absolute; right: 1em; top: 10px; border: 1px solid #ff0103; cursor: pointer; }
._citys0 { width: 100%; height: 34px; display: inline-block; border-bottom: 2px solid #ff0103; padding: 0; margin: 0; }
._citys0 li { float:left; height:34px;line-height: 34px;overflow:hidden; font-size: 15px; color: #888; width: 80px; text-align: center; cursor: pointer; }
.citySel { background-color: #ff0103; color: #fff !important; }
._citys1 { width: 100%;height:80%; display: inline-block; padding: 10px 0; overflow: auto;}
._citys1 a {  height: 35px; display: block; color: #666; padding-left: 6px; margin-top: 3px; line-height: 35px; cursor: pointer; font-size: 13px; overflow: hidden; }
._citys1 a:hover { color: #fff; background-color: #ff0103; }
	.ui-content{
	border: 1px solid #EDEDED;
	}li{
	list-style-type: none;
}
</style>
