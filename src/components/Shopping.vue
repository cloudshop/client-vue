<template>
   <div>
    <div class='content'>
      <div class="register_header">
        <p></p >
        <p>购物车</p >
        <p><img src="../assets/Classify/消息黑色.png" alt=""><span class="shopping_red">3</span></p>
      </div>
      <div class="shopping_main_all">
        <div class="shopping_main" v-for="(item,index) in serviceList" :key='index'>
        <!--购物车标题头开始 店铺  -->
        <div class="shopping_main_nav">
          <div class="nav_newmain">
            <span class="shopping_q">
              <input type="checkbox" id="tonglian"  class="checkboxs" value="通联" name="sex"  v-model="item.checkbox" @click="pageAll(item.id)"/>
              <label for="tonglian"></label>
            </span>
            <span class="nav_newmain_quan">{{item.name}}</span>
          </div>
        </div>
        <!--购物车标题头结束  -->
        <!-- 购物车单个开始 -->
        <div class="contents"  v-for="(data,index) in item.list" :key='index'>
          <div class="contents_all">
            <div class="contents_left">
              <span class="shopping_q">
                <input type="checkbox" id="tonglian"  class="checkboxs" value="通联" name="sex"  v-model="data.checkboxChild" @click="pageItem(item.id,index)"/>
                <label for="tonglian"></label>
              </span>
            </div>
            <div class="contents_right">
              <div class="contents_right_all">
                <div class="contents_right_img">
                  
                  <img src="../assets/Mine/headportrait.jpg" alt="">
                </div>
                <div class="contents_right_matter">
                  <div class="h5">{{data.name}}</div>
                  <div class="contents_right_center">
                    <div class="cargo">{{data.cargo}}</div>
                    <div class="contents_right_center_count">
                      <span class="minus" @click="subtract(index,item.id)">-</span>
                      <input type="text" id="inpt_s" readonly v-model="data.num" value="1" class="inpus">
                      <span class="add" @click="add(index,item.id)">+</span>
                    </div>
                  </div>
                  <div class="contents_right_moneyAll">
                    <div class="contents_right_money">￥ {{(data.price).toFixed(2)}}</div>
                    <div class="contents_right_delete">
                      <a href="javascript:;" @click="remove(index,item.id)">{{(data.price).toFixed(2)*data.num}}删除</a>
                      <span class="contents_right_shu">|</span>
                      <a href="javascript:;">加入收藏</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <!-- footer -->
        <div class="shopping_footer">
          <div class="shopping_footer_left">
            <div class="all">
              <span class="shopping_q">
                <input type="checkbox" id="tonglian"  class="checkboxs" value="通联" name="sex" v-model="checkboxBig"  @click="checkboxAll(item.id=0)"/>
                <label for="tonglian"></label>
              </span>
            </div>   
            <!--{{data.price*data.num | filtermoney}}  -->
            <div class="money">合计: ￥</div>   
          </div>
          <div class="shopping_footer_right">去结算</div>
        </div>
      </div>
    </div>
  </div>
  <Foot></Foot>
 </div>
   
</template>
<script>
import Foot from "./main/foot";
export default {
  data() {
    return {
      totalPrice: 100,
      animatenum: 0,
      checkboxBig: true,
      serviceList: [
        {
          id: 0,
          name: "大胖的店",
          checkbox: false,
          list: [
            {
              id: 0,
              name: "双肩包",
              price: 108.0,
              cargo: "有货（库存*件）",
              num: 1,
              checkboxChild: false
            },
            {
              id: 1,
              name: "双肩包",
              price: 108.0,
              cargo: "有货（库存*件）",
              num: 1,
              checkboxChild: false
            }
          ]
        },
        {
          id: 1,
          name: "大胖二店",
          checkbox: false,
          list: [
            {
              id: 0,
              name: "双肩包",
              price: 108.0,
              cargo: "有货（库存*件）",
              num: 1,
              checkboxChild: false
            },
            {
              id: 1,
              name: "双肩包",
              price: 108.0,
              cargo: "有货（库存*件）",
              num: 1,
              checkboxChild: false
            },
            {
              id: 2,
              name: "双肩包",
              price: 108.0,
              cargo: "有货（库存*件）",
              num: 1,
              checkboxChild: false
            }
          ]
        }
      ]
    };
  },
  watch:{
   
  },
  computed:{
   
  },
  created(){
    // var that = this;
    // this.$axios.get('/api/')
    //     .then(function(res){
    //       that.arr = res.data;
    //       console.log(res.data)
    //     })
    //     .catch(function(error){
    //       console.log(error)
    //     })
  },
  methods: {
    // 删除操作
    remove:function(index,id){
      this.serviceList[id].list.splice(index,1);
      if(this.serviceList[id].list.length == 0){
        this.serviceList.splice(index,id)
      }
    },
    // ++
    add:function(index,id){
      this.serviceList[id].list[index].num++
    },
    // --
    subtract:function(index,id){
      this.serviceList[id].list[index].num--;
      if(this.serviceList[id].list[index].num<=0){
        this.serviceList[id].list[index].num=1;
      }
    },
    // pageAll 店铺全选
    pageAll:function(pageId){
      if(this.serviceList[pageId].checkbox !== true){
        this.serviceList[pageId].list.map((v,i)=>{
          v.checkboxChild = true
        })
      }else{
        this.serviceList[pageId].list.map((v,i)=>{
          v.checkboxChild = false
        })
      }
    },
    // 判断 商品是否全部选中
    pageItem:function(pitchId,index){
      this.serviceList[pitchId].list[index].checkboxChild = !this.serviceList[pitchId].list[index].checkboxChild;
      let flag = true;
      this.serviceList[pitchId].list.forEach(item => {
        if (item.checkboxChild === false) {
          flag = false;
        }
      });
      this.serviceList[pitchId].checkbox = flag;
    },
    checkboxAll:function(){
    
    }
  },
  components: {
    Foot
  }
};
</script>

<style scoped>

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff !important;
}
.register_header {
  flex-shrink: 0;
  width: 100%;
  height: 0.96rem;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
  background: #fff !important;
  border-bottom: 1px solid #f8f8f8;
}
.register_header p:nth-child(1) {
  padding-left: .4rem;
}
.register_header p:nth-child(2) {
  font-size: 0.32rem;
}
.register_header p:nth-child(3){
  width:.5rem;
  height:.5rem;
  right: .3rem;
  position: relative;
}
.register_header p:nth-child(3) img{
  width: 100%;
  height: 100%;
}
.shopping_main_all{
  margin-top: .96rem;
}
.shopping_header {
  flex-shrink: 0;
  width: 92%;
  margin-left: 4%;
  height: 0.96rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2f2f2f;
}
.shopping_header p:nth-child(2) {
  font-size: 0.32rem;
}
.shopping_header p:nth-child(3) {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
}
.shopping_header p:nth-child(3) img {
  width: 100%;
  height: 100%;
}
.shopping_red {
  width: 0.22rem;
  height: 0.22rem;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 0.22rem;
  text-align: center;
  font-size: 0.16rem;
  background: #ff0103;
  color: #ffffff;
  border-radius: 50%;
}
/*main*/
.shopping_main {
  width: 100%;
  height: auto;
  overflow-y: auto;
  /* flex:1;  */
  flex-shrink: 1;
  background: #f5f5f5;
}
.shopping_main:last-child {
  margin-bottom: 1.06rem;
}
.shopping_main_nav {
  width: 100%;
  height: 0.97rem;
  margin-top: 0.2rem;
  background: #efefef;
}
.nav_newmain {
  width: 100%;
  height: 0.77rem;
  padding-top: 0.18rem;
  display: flex;
  align-items: center;
}
.shopping_q {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  position: relative;
}
.shopping_q .checkboxs {
  width: 100%;
  height: 100%;
  position: absolute;
}
input[type="checkbox"] + label::before {
  box-sizing: border-box;
  content: " "; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  width: 1.8em;
  height: 1.8em;
  background: url("../assets/manage/change_no.png");
  background-size: 100% 100%;
  /* margin-right: .4em; */
  border-radius: 50%;
  margin-top: -.01rem
}
input[type="checkbox"]:checked + label::before {
  background: red;
  background: url("../assets/manage/change.png");
  background-size: 100% 100%;
}
.contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.contents_all {
  width: 100%;
  height: 2.4rem;
  display: flex;
}
.contents_left {
  display: flex;
  align-items: center;
}
.contents_right {
  flex: 1;
  border-bottom: 1px solid #efefef;
}
.contents_right_all {
  width: 100%;
  height: 1.66rem;
  display: flex;
  margin-top: 0.36rem;
}
.contents_right_img {
  width: 1.66rem;
  height: 1.66rem;
  margin-right: 0.3rem;
  border-radius: 0.06rem;
}
.contents_right_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.06rem;
}
.contents_right_matter {
  flex: 1;
  height: 1.66rem;
  display: flex;
  flex-direction: column;
}
.contents_right_matter .h5 {
  font-size: 0.24rem;
  color: #2f2f2f;
  margin-bottom: 0.4rem;
}
span {
  display: inline-block;
}
.contents_right_center {
  display: flex;
  width: 100%;
  height: 0.4rem;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.cargo {
  font-size: 0.2rem;
  color: #2f2f2f;
}
.contents_right_center_count {
  display: flex;
  border-radius: 0.06rem;
  margin-right: 0.2rem;
  margin-bottom: 0.4rem;
}
.contents_right_center_count .minus,
.add {
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.2rem;
  color: #2f2f2f;
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.43rem;
  border: 1px solid #efefef;
}
.contents_right_center_count .minus {
  border-radius: 0.06rem 0 0 0.06rem;
}
.contents_right_center_count .add {
  border-radius: 0 0.06rem 0.06rem 0;
}
.inpus {
  border: none;
  width: 0.7rem;
  height: 0.35rem;
  font-size: 0.24rem;
  color: #2f2f2f;
  line-height: 0.43rem;
  text-align: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.contents_right_moneyAll {
  display: flex;
  justify-content: space-between;
}
.contents_right_delete {
  display: flex;
  margin-right: 0.2rem;
}
.contents_right_delete a {
  text-decoration: none;
  /* out-line: none; */
  color: #428bca;
}
.contents_right_shu {
  padding: 0 0.12rem;
  color: #428bca;
}
.contents_right_money {
  font-size: 0.24rem;
  font-family: "MicrosoftYaHei";
  color: #ff0103;
}
/*footer*/
.shopping_footer {
  width: 100%;
  flex-shrink: 0;
  height: 1.06rem;
  display: flex;
  background: #f5f5f5;
  border-top: 0.01rem;
  position: fixed;
  bottom: 0.96rem;
}
.shopping_footer_left {
  flex: 1;
  margin-top: 0.2rem;
  background: #efefef;
}
.shopping_footer_right {
  width: 2.05rem;
  height: 0.86rem;
  margin-top: 0.2rem;
  display: flex;
  font-size: 0.32rem;
  color: #ffffff;
  background: red;
  justify-content: center;
  align-items: center;
}
.shopping_footer_left {
  display: flex;
  align-items: center;
}

.shopping_q {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  margin-left: 0.2rem;
  margin-right: 0.2rem;

  /* justify-content: center;
  align-items: center; */
}
.shopping_q .checkboxs {
  width: 100%;
  height: 100%;
  opacity: 0;
}
.shopping_q img {
  width: 100%;
  height: 100%;
}
.shopping_footer_left .all .quan {
  font-size: 0.24rem;
  color: #2f2f2f;
  margin-right: 0.5rem;
}
.shopping_footer_left .money {
  font-size: 0.32rem;
  color: #2f2f2f;
}
</style>

