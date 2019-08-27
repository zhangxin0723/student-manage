<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:52:03
 * @LastEditTime: 2019-08-27 19:30:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

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
@media screen and (min-width: 768px) {
  html{
    font-size: 100px;
  }
  .header{
    width: 100%;
    height: 100px;
    background: #0076FF 100%;
    text-align: center;
    line-height: 100px;
    font-size: 28px;
    color: #fff;
  }
}
@media screen and (max-width:767px) {
  html{
    font-size: 50px;
  }
  .header{
    width: 100%;
    height: 5rem;
    background: #0076FF 100%;
    text-align: center;
    line-height: 5rem;
    font-size: 1rem;
    color: #fff;
  }
}
</style>