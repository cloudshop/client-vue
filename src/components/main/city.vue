<template>
  <div class="big">
      <header class="header"  data-role="page" id="test">
         <div class="ui-content">
            <ul data-role="listview" class="listview">
                <li >
                    <span>城市选择:</span><span tag="input" id="city" style="color:#d7d7d7;padding-left:5px;">选择您的的地区</span>
                </li>
            </ul>
	    </div>    
      </header>
        <button class="sure" @click="cityAll">确定</button>
      <!-- <button class="test">确定</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      city2:"",
    };
  },
  mounted: function() {
    $("#city").click(function(e) {
      SelCity(this, e);
     // console.log(this);
    });

    // $(".test").click(function() {
    //   var city3 = $('#city').text()
    //   this.city2 = city3
    //   console.log(this.city2);
    //   $(this).hide()
    // });
  },
  methods: { 
      cityAll(){
        var city3 = $('#city').text()
        // var index = city3 .lastIndexOf("\-");  
        // city3 = city3 .substring(index + 1, city3 .length);
        this.$router.push({
        name: "HomePage",
        params: {
            city3
        }
      });
      },
    
  }
};
</script>
<style>
.sure {
  width: 1rem;
  height: 0.96rem;
  border: none;
  background: #fff;
  font-size: 0.28rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}
.test {
  width: 1rem;
  height: 0.96rem;
  border: none;
  background: #fff;
  font-size: 0.28rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
}
.listview {
  font-size: 0.32rem;
  background: #fff;
}
.listview li {
  height: 0.96rem;
  line-height: 0.96rem;
}
._citys1 {
  background: #fff;
}
._citys {
  width: 100%;
  height: 200%;
  display: inline-block;
  position: absolute;
  top: -45%;
}
._citys span {
  color: #ff0103;
  height: 15px;
  width: 15px;
  line-height: 15px;
  text-align: center;
  border-radius: 3px;
  position: absolute;
  right: 1em;
  top: 10px;
  border: 1px solid #ff0103;
  cursor: pointer;
}
._citys0 {
  width: 100%;
  height: 34px;
  display: inline-block;
  border-bottom: 2px solid #ff0103;
  padding: 0;
  margin: 0;
}
._citys0 li {
  float: left;
  height: 34px;
  line-height: 34px;
  overflow: hidden;
  font-size: 15px;
  color: #888;
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.citySel {
  background-color: #ff0103;
  color: #fff !important;
}
._citys1 {
  width: 100%;
  height: 80%;
  display: inline-block;
  padding: 10px 0;
  overflow: auto;
}
._citys1 a {
  height: 35px;
  display: block;
  color: #666;
  padding-left: 6px;
  margin-top: 3px;
  line-height: 35px;
  cursor: pointer;
  font-size: 13px;
  overflow: hidden;
}
._citys1 a:hover {
  color: #fff;
  background-color: #ff0103;
}
.ui-content {
  border: 1px solid #ededed;
}
li {
  list-style-type: none;
}
</style>
