<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 09:56:38
 * @LastEditTime: 2019-08-27 19:25:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
       <router-view/>
       <!-- <All></All> -->
       
      <!-- <router-link to="/">Home</router-link> | 
       <router-link to="/about">About</router-link>-->
    </div>  
</template>
<script>
import All from '@/views/All'
export default {
  props:{

  },
  components:{
      All
  },
  data(){
    return {
    }
  }
,
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">

</style>