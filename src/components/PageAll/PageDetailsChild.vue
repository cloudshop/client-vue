<template>
    <div class="news">
        <ul class="PageDetails_title_ul">
            <li v-for="(item,index) in path" :key='index'>{{item}}</li>
            <div class="PageDetails_title_more">查看全部</div>
        </ul>
    </div>
</template>

<script>
export default {
    props:['path']
}
</script>

<style scoped>

.PageDetails_title_ul{
  width: 100%;
}
 .onclicks{
  height: .88rem;
  margin-top: .2rem;
  color: #2F2F2F;
  font-size: .28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 .PageDetails_title_ul{
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   /* padding-bottom: .2rem; */
 }
 .PageDetails_title_ul li{
   width: 3.2rem;
   height: .66rem;
   display: flex;
   font-size: .24rem;
   color: #2f2f2f;
   margin-right: .11rem;
   margin-left: .05rem;
   background: #f5f5f5;
   justify-content: flex-start;
   align-items: center;
   text-indent: .2rem;
   margin-top: .07rem
 }
 .PageDetails_title_more{
   width: 100%;
   height: .68rem;
   font-size: .24rem;
   color: #2f2f2f;
   display: flex;
   margin-right: .3rem;
   justify-content: flex-end;
   align-items: center;
 }
</style>
