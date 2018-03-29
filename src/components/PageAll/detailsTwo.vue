<template>
  <div class="content">
    <div class="classify_search_head">
        <div class="classify_search_header">
            <div class="classify_search_ss">
                <a><img src="../../assets/HomePage/搜索.png" alt=""></a>
                <p><input type="text" placeholder="  请输入搜索关键词"></p>
                <span >搜索</span>
            </div>
        </div>
        <div>
            <PageAll></PageAll>
        </div>
    </div>
  </div>
</template>

<script>
import PageAll from '../PageAll/PageAll'
export default {
  components: {
    PageAll
  }
}   
</script>

<style scoped>
.classify_search_head{
    width: 100%;
    position: fixed;
    top: 0;
    background: #f8f8f8;
}
.classify_search_header{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f8f8f8;
}
.classify_search_ss{
    width: 94%;
    margin-left: 3%;
    display: flex;
}
.classify_search_ss a{
    position: absolute;
    top: .34rem;
    left: .35rem;
}
.classify_search_ss a img{
    width: 40%;
}
.classify_search_option{
    width: 100%;
    height: .88rem;
    background: #fff;
}
.classify_search_ss p{
    flex: 1;
    height: .58rem;
    margin: .2rem 0;
    border-radius: .2rem 0 0 .2rem;
    background: #f8f8f8;
}
.classify_search_ss input{
    height: .58rem;
    margin-left: .5rem;
    border:none;
    background: #f8f8f8;
}
input::-webkit-input-placeholder {
    color: #aab2bd;
}
.classify_search_ss span{
    width: 15%;
    height: .58rem;
    margin: .2rem 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .24rem;
    background:#1692e1; 
    border-radius: 0 .2rem .2rem 0;
}
.classify_search_option_ul{
    width: auto;
    display: flex;

}
.classify_search_option_ul li{
    width: 30%;
    padding: 0 .2rem;
}
</style>
