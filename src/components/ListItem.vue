<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 21:06:13
 * @LastEditTime: 2019-08-27 09:33:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <ul>
      <li>1</li>
      <li>11-03-2017</li>
      <li>89</li>
      <li>Success</li>
      <li>对方过后就给范德萨的风格和接口规范的撒上辅导过后就会看见割发代首撒的风格和减肥的撒的风格和</li>
      <li>是</li>
      <li><span @click="edit">编辑</span><span @click="del">删除</span></li>
    </ul>
    <div class="mask" v-show="delFlag">
      <div class="del">
        <h4>确定要删除吗？</h4>
        <p><span @click="del">取消</span><span>确定</span></p>
      </div>
    </div>
    <div class="mask" v-show="editFlag">
      <div class="edit">
        <h4><span>编辑内容</span><span>X</span></h4>
        <form action="">
          <label for="">
            <span>理论</span><input type="text">
          </label>
          <label for="">
            <span>技能</span><input type="text">
          </label>
          <label for="">
            <span></span><input type="text">
          </label>
          <label for="">
            <span>分析解决方案</span><textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </form>
        <h5><span @click="edit">取消</span><span>确定</span></h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      editFlag:false,
      delFlag:false
    };
  },
  computed: {},
  methods: {
    //删除
    del(){
      this.delFlag = !this.delFlag;
    },
    //编辑
    edit(){
      this.editFlag = !this.editFlag;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
ul {
  width: 100%;
  height: 68px;
  border-bottom: 1px solid rgba(187, 187, 187, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    flex: 2;
    text-align: center;
    &:nth-child(1) {
      flex: 1;
    }
    &:nth-child(5) {
      flex: 5;
    }
  }
}
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.del{
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: -260px;
  width: 521px;
  height: 180px;
  line-height: 20px;
  border-radius: 4px 4px 4px 4px;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: PingFangSC-regular;
  }
  p{
    flex:1;
    span{
      display: inline-block;
      &:nth-child(1){
        width: 120px;
        height: 48px;
        line-height: 48px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        border: 1px solid rgba(217, 217, 217, 1);
        margin-right: 19px;
      }
      &:nth-child(2){
        width: 120px;
        height: 48px;
        line-height: 48px;
        border-radius: 4px;
        background-color: rgba(24, 144, 255, 1);
        text-align: center;
      }
    }
  }
}
.edit{
  box-sizing: border-box;
  position: fixed;
  top: 200px;
  left: 50%;
  width: 500px;
  line-height: 20px;
  margin-left: -250px;
  border-radius: 4px 4px 4px 4px;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 15px;
  h4{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  form{
    flex:1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    label{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      span{
        display: inline-block;
        width: 20%;
        text-align: center;
        line-height: 40px;
      }
      input{
        flex:1;
        width: 200px;
        height: 40px;
      }
      textarea{
        flex:1;
        height: 70px;
      }
    }
  }
  h5{
    width: 100%;
    height: 60px;
    text-align: right;
    margin-top: 13px;
    span{
      display: inline-block;
      width: 65px;
      height: 46px;
      line-height: 46px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 1);
      text-align: center;
      border: 1px solid rgba(217, 217, 217, 1);
      margin-right: 21px;
      &:nth-child(2){
        background: #1890FF 100%;
        color: #fff;
      }
    }
  }
}
</style>