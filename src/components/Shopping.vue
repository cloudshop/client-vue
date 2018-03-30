<template>
   <div>
    <div class='content'>
      <div class="register_header">
        <p>〈</p >
        <p>购物车</p >
        <p></p >
      </div>
      <div class="shopping_main_all">
        <div class="shopping_main" v-for="(item,index) in serviceList" :key='index'>
        <!--购物车标题头开始 店铺  -->
        <div class="shopping_main_nav">
          <div class="nav_newmain">
            <span class="shopping_q">
              <!-- 店铺checkbox -->
              <input type="checkbox"  class="checkboxs" name="all" v-model="item.checkbox" @click="pageAll(item.id,serviceList)"/>
              <img src="../assets/Shopping/未选择.png" alt="">
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
                <!-- 每件商品 checkbox -->
                <input class="checkboxs" type="checkbox" v-model="data.checkboxChild">
                <img src="../assets/Shopping/未选择.png" alt="">
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
                      <span class="minus" @click="subtract(index,item.id,serviceList)">-</span>
                      <input type="text" id="inpt_s" readonly v-model="data.num" value="1" class="inpus">
                      <span class="add" @click="add(index,item.id,serviceList)">+</span>
                    </div>
                  </div>
                  <div class="contents_right_moneyAll">
                    <div class="contents_right_money">￥ {{(data.price).toFixed(2)}}</div>
                    <div class="contents_right_delete">
                      <a href="javascript:;" @click="remove(index,item.id,serviceList)">{{(data.price).toFixed(2)*data.num}}删除</a>
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
                <input class="checkboxs"  type="checkbox" v-model="item.checked">
                <img src="../assets/Shopping/未选择.png" alt="">
              </span>
            </div>   
            <!--{{data.price*data.num | filtermoney}}  -->
            <div class="money">合计: ￥ </div>  
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
              checkboxChild: true
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
  // filters:{
  //   filtermoney:function(value){
  //     return '￥'+value ;
  //   }
  // },
  watch:{
   
  },
  computed:{
   
  },
  methods: {
    // 删除操作
    remove:function(index,id,serviceList){
      serviceList[id].list.splice(index,1);
      if(serviceList[id].list.length == 0){
        serviceList.splice(index,id)
      }
    },
    // ++
    add:function(index,id,serviceList){
      // console.log(serviceList[id].list)
      serviceList[id].list[index].num++
    },
    // --
    subtract:function(index,id,serviceList){
      serviceList[id].list[index].num--;
      if(serviceList[id].list[index].num<=0){
        serviceList[id].list[index].num=1;
      }
    },
    // pageAll 全选
    pageAll:function(pageId,serviceList){
      // console.log(serviceList[pageId].list)
      // console.log(serviceList[pageId].checked == true)
      if(serviceList[pageId].checkbox !== true){
        serviceList[pageId].list.map((v,i)=>{
          // console.log(v.checked==true)
          v.checkboxChild == true
          // v.checked == true ? v[i].checked==true : v[i].checked==false
            // v[i].checked==true
        })
      }
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
  /* opacity: 0;; */
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
  opacity: 1;
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

