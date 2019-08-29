<template>
  <div id="add" class="display" ref="add">
        <span>新添加成绩---××同学</span>
        <ul id="day">
            <li>
              <input type="text" placeholder="默认当前的日期"/>
              <span>昨天</span>
            </li>  
            <li>
                <span>技能</span>
                <input type="text" placeholder="数字" />
                <textarea name="" id="" cols="30" rows="10" class="display"></textarea>
            </li>  
            <li>
                <span>理论</span>
                <input type="text" placeholder="0-100之间的数字"/>
                <textarea name="" id="" cols="30" rows="10" class="display"></textarea>
            </li> 
            <li>
            <button class="active">取消</button>
            <button>正确</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: ['boole','copu'],
  created(){
     console.log(this.boole,'thisacth')
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #add{
    position:absolute;
    left: 9%;
    top: 7%;
    width:380px;
    height:250px;
    border-radius: 4px 4px 4px 4px;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
    padding-top:10px;
     >span{
       display: flex;
       font-size:13px;
       color:#000000;
       padding-left:10px;
     }
    
     #day{
       display:flex;
       flex-direction:column;
       width:80%;
       margin:0px auto;
       margin-top: 30px;
       li{
         display:flex;
         justify-content: center;
         align-items: center;
         margin-bottom:10px;
         input{
           flex:1;
           border:0;
           background:9;
           border:1px solid #DCDFE6;
           padding:5px 0;
           font-size:12px;
          color:#101010;
          padding-left:10px;
         }
         span{
            font-size:12px;
            color:#101010;
            margin-right:18px;
         }
         textarea{
             height:50px;
         }
       }
       li:first-of-type{
         span{
           padding:4px 10px;
           border-radius:5px;
           background:#E6F1FC;
           color:#1989FA;
         }
       }
       li:last-of-type{
         display:flex;
         justify-content: flex-end;
         align-items: center;
         button{
            width:40px;
            height:25px;    
            border:0;
            background: 0;
            border:1px solid #D9D9D9;
            font-size:1px;
            color:#000000;
            margin:0 4px;
         }
         .active{
           background:#1890FF;
           color:#fff;
       }
       }
     }
  }
   .display{
       display:none
     }
     .block{
        display:block
     }
</style>