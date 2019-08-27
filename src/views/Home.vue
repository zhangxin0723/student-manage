<template>
  <div id="home">
     <p id="header">
       重点学生日周考成绩录入管理系统
     </p>
     <div id="name">
       <p>网站工程</p>
       <div id="up">
         <router-link to="/home/Page">登陆</router-link> | 
         <router-link to="/home/About">注册</router-link>
       </div>
       <router-view/>
       <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
     </div>
  </div>
</template>
<style lang="scss">
*{
  padding:0;
  margin:0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

@media screen and (min-width:740px) {
    #nav{
      width:710px;
      background: #f0f0f2;
      margin: 100px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #home {
        width: 700px;
        margin: 0px auto;
        background: #fff;
    }
    #home #header{
          width:100%;
          height:60px;
          color: rgb(255, 255, 255);
          background-color: rgb(63, 81, 181);
          font-size: 15px;
          border-style: solid;
          text-align: center;
          line-height: 60px;
    }
    #name{
      display:flex;
      flex-direction:column;
      width:245px;
      height:231px;
      margin:100px auto;
    }
    #name p{
      font-size:20px;
    }
    #name #up{
      padding-bottom:10px;
      border-bottom:1px solid #eee;
      width: 68px;
      margin: 25px auto;
    }
}

@media screen and (max-width:739px) {
    #home {
        width: 100%;
        height: 100%;
        #header{
         width:100%;
          height:80px;
          color: rgb(255, 255, 255);
          background-color: rgb(63, 81, 181);
          font-size: 20px;
          border-style: solid;
          text-align: center;
          line-height: 80px;
        }
        #name{
          margin-top:80px;
          p{
            font-size:25px;
          }
          #up{
             border-bottom:1px solid #eee;
             padding-bottom: 10px;
             width: 44%;
             margin: 0 auto;
             margin-top: 38px;
            a{
               padding: 10px 20px;
            }
            .page{
              ul{
                li{
                   margin-bottom: 30px;
                   border: 1px solid #eee;
                   input{
                     border:0;
                     height:100%;
                   }
                }
              }
            }
          }
        }
    }
}
</style>

<script lang="ts">
import Vue from "vue";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
export default Vue.extend({
  components: {
    HelloWorld,
  },
});
</script>
