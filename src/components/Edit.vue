<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 15:15:12
 * @LastEditTime: 2019-08-28 08:56:25
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="mask">
    <div class="edit">
      <h4>
        <span>编辑内容</span>
        <span @click="this.edit_change">X</span>
      </h4>
      <form action>
        <label for>
          <span>理论</span>
          <input type="text" />
        </label>
        <label for>
          <span>技能</span>
          <input type="text" />
        </label>
        <label for>
          <span></span>
          <input type="text" />
        </label>
        <label for>
          <span>分析解决方案</span>
          <textarea name id cols="30" rows="10"></textarea>
        </label>
      </form>
      <h5>
        <span @click="this.edit_change">取消</span>
        <span>确定</span>
      </h5>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations({
      edit_change: "all/edit_change"
    })
  },
  created() {},
  mounted() {}
});
</script>
<style scoped lang="scss">
@media screen and (min-width: 768px) {
  html {
    font-size: 100px;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .edit {
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
    z-index: 2;
    h4 {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      label {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        span {
          display: inline-block;
          width: 20%;
          text-align: center;
          line-height: 40px;
        }
        input {
          flex: 1;
          width: 200px;
          height: 40px;
          padding-left: 20px;
        }
        textarea {
          flex: 1;
          height: 70px;
        }
      }
    }
    h5 {
      width: 100%;
      height: 60px;
      text-align: right;
      margin-top: 13px;
      span {
        display: inline-block;
        width: 65px;
        height: 46px;
        line-height: 46px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        border: 1px solid rgba(217, 217, 217, 1);
        margin-right: 21px;
        &:nth-child(2) {
          background: #1890ff 100%;
          color: #fff;
        }
      }
    }
  }
}
@media screen and (max-width:767px) {
  html {
    font-size: 50px;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .edit{
    position: fixed;
    top: 7rem;
    left: 1.2rem;
    width: 90%;
    border-radius: 4px 4px 4px 4px;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 2;
    h4 {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      label {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .5rem;
        span {
          display: inline-block;
          width: 20%;
          text-align: center;
          line-height: .8rem;
          font-size: .8rem;
        }
        input {
          flex: 1;
          width: 5rem;
          height: 2rem;
          padding-left: .4rem;
        }
        textarea {
          flex: 1;
          height: 2.5rem;
        }
      }
    }
    h5 {
      width: 100%;
      height: 1.5rem;
      text-align: right;
      margin-top: 1rem;
      span {
        display: inline-block;
        width: 4rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        border: 1px solid rgba(217, 217, 217, 1);
        margin-right: .4rem;
        &:nth-child(2) {
          background: #1890ff 100%;
          color: #fff;
        }
      }
    }
  }
}
</style>