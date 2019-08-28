<template>
  <div class="page">
     <ul>
        <li><input text="type" placeholder="电话" v-model="phone"/></li>
        <li><input text="type"  placeholder="输入密码" v-model="pew"/></li>
     </ul>
     <span></span>
     <button @click="regi" onsubmit="return false;">注册</button>
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
       width: 90%;
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
export default {
  data() {
    return {
      refPhone: "",
      refPwd: "",
      phone:null,
      pew:null
    };
  },
 computed:{
  
 },
  methods: {
    ...mapActions({
      registes: 'visit/registerArticle'
    }),
    async regi() {
      this.refPhone = this.phone; //账号信息
      this.refPwd = this.pew; //密码信息
      var Phone = /^\w\w{7,11}$/; //用户名必须为8-12为字母或数字
      var Pwd = /^\d\d{5}$/; //6位数字 验证密码
      var check = Phone.test(this.refPhone); //校验账号
      //账号
      if (this.refPhone == undefined && this.refPwd == undefined) {
        alert("请注册信息");
      } else if (!check) {
        alert("请输入有效信息");
        return;
      }
      var r = Pwd.test(this.refPwd); //校验密码
      if (!r) {
        alert("请输入有效信息1");
        return false;
      } else {
        let username=this.refPhone&&this.refPhone;
        let password=this.refPwd&&this.refPwd;
        //注册
        await this.registes({username,password})
        console.log(this.$store.state.visit.registerList,'registerList')
        if(this.$store.state.visit.registerList===1){
             this.$router.push({path: '/home/page',query:{username:this.refPhone,password:this.refPwd} })
             
        }else{
          alert('已注册信息,请重新输入')
        }
        
      }
    },
    
  }
};
</script>


