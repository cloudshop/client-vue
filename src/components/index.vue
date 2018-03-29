<template>
  <div>   
      <router-view />              
  </div>
</template>

<script>

export default {
   name: 'app',  
  data () {  
    return {  
    
    }  
  },  
  mounted(){
       document.documentElement.style.fontSize = document.documentElement.clientWidth/720*100+'px';
  },
}
</script>


<style scoped>
 
</style>
