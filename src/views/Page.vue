<template>
  <div class="page">
     <ul>
        <li><input text="type" placeholder="电话"/></li>
        <li><input text="type"  placeholder="输入密码"/></li>
     </ul>
     <span><input type="checkbox"/>两周内自动登陆</span>
     <button><router-link to="/land" id="den">登陆</router-link></button>
  </div>
</template>
<style lang="scss">
   .page{
     display:flex;
     flex-direction:column;
     margin-top: 14px;
     ul{
       display:flex;
       flex-direction:column;
       margin-top: -12px;
        li{
          width:90%;
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
            height:33px;
            border-radius: 3px;
          }
        }
        li:first-of-type{
          margin-bottom: 30px;
        }
     }
     span{
       text-align: left;
       display:block;
       font-size:12px;
       margin:24px 0 10px 0;
       display:flex;
       justify-content: flex-start;
       align-items: center;
       margin-bottom: 15px;
       input{
         margin-right:4px;
       }
     }
     button{
       width: 90%;
       height: 90px;
       border:0;
       background: 0;
       #den{
         color:#fff;
       }
       background-color: rgb(63, 81, 181);
       border-radius:4px;
     }
   }
</style>

