<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:51:14
 * @LastEditTime: 2019-08-26 21:12:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="All"> 
      <Head>
        <template slot="header">
            XX学生日周考试成绩统计表
        </template>
      </Head>
      <div class="content">
        <ul class="left">
          <li>讲师： XXX</li>
          <li>学生：XXX</li>
        </ul>
        <select name="" id=""  class="right">
          <option value="">快速选择其他学生1</option>
          <option value="">快速选择其他学生2</option>
          <option value="">快速选择其他学生3</option>
          <option value="">快速选择其他学生4</option>
        </select>
      </div>
      <div class="list">
        <ul>
          <li>序号</li>
          <li>日期</li>
          <li>理论</li>
          <li>技能</li>
          <li>分析和解决</li>
          <li>是否周考</li>
          <li>操作</li>
        </ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
  </div>
</template>
<script>
import Head from '@/components/Head'
import ListItem from '@/components/ListItem'
export default {
  props:{

  },
  components:{
    Head,
    ListItem
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
  .All{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content{
    width: 1298px;
    height: 100px;
    border: 1px solid #101010;
    margin:  0 auto;
    margin-top: 63px;
    line-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    left: 73px;
    color: rgba(16, 16, 16, 1);
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      width:32%;
      li{
        flex:1;
        text-align: center;
        font-size: 14px;
      }
    }
    .right{
      width: 224px;
      height: 40px;
      line-height: 40px;
      margin-right: 49px;
      padding-left: 15px;
      color:#606266;
      font-size: 14px;
      font-family: SourceHanSansSC-regular;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(192, 196, 204, 1);
    }
  }
  .list{
    width: 1298px;
    margin: 0 auto;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: Roboto;
    border: 1px solid rgba(187, 187, 187, 1);
    ul{
      width: 100%;
      height: 64px;
      border-bottom: 1px solid rgba(187, 187, 187, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        flex:2;
        text-align: center;
        &:nth-child(1){
          flex:1;
        }
        &:nth-child(5){
          flex:5
        }
      }
    }
  }
</style>