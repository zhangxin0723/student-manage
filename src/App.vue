<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 09:56:38
 * @LastEditTime: 2019-08-26 11:00:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id='app'>
    <router-view></router-view>
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
  },
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    color: #b1b2b4;
    padding-bottom:10px;
    font-size:13px;
    &.router-link-exact-active {
      color: #344ab6;
      border-bottom:2px solid #344ab6;
    }
  }
}
