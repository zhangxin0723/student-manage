<template>
  <div class="page">
     <ul>
        <li><input text="type" placeholder="电话" v-model="this.username"/></li>
        <li><input text="password"  placeholder="输入密码" v-model="this.password"/></li>
     </ul>
     <span><input type="checkbox"/>两周内自动登陆</span>
     <button @click="land()">登陆</button>
     <!-- <button><router-link to="/land" id="den" @click="land(this.username,this.password)">登陆</router-link></button> -->
  </div>
</template>
<style lang="scss">
   .page{
     display:flex;
     flex-direction:column;
     ul{
       display:flex;
       flex-direction:column;
       margin-top: -12px;
        li{
          width:100%;
          height:50px;
          display:flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          input{
            flex:1;
            border:0;
            background:0;
            border:1px solid #b1b2b4;
            color:#b1b2b4;
            font-size:12px;
            padding-left:15px;
            height:40px;
            border-radius: 3px;
          }
        }
        li:first-of-type{
          margin-bottom: -10px;
        }
     }
     span{
       text-align: left;
       display:block;
       font-size:12px;
       display:flex;
       margin-top:-7px;
       justify-content: flex-start;
       align-items: center;
       margin-bottom: 18px;
       input{
         margin-right:4px;
       }
     }
     button{
       width: 100%;
       height: 35px;
       border:0;
       background: 0;
       color:#fff;
       #den{
         color:#fff;
       }
       background-color: rgb(63, 81, 181);
       border-radius:4px;
     }
   }
</style>
<script>
import { mapState, mapMutations,mapActions} from 'vuex'
 export default{
   data(){
     return{
        username:this.$route.query.username,
        password:this.$route.query.password
     }
   },
   methods:{
      ...mapActions({
          login: 'visit/loginArticle'
        }),
     async land(){
        await this.login({username:this.username,password:this.password})
        console.log(this.$store.state.visit.loginList.code,'state')
        if(this.$store.state.visit.loginList.code===1){
            this.$router.push({path: '/land'})
        }
      }
   }
    
 }
</script>  

