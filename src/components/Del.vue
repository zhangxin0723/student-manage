<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 15:09:53
 * @LastEditTime: 2019-08-27 16:35:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="mask">
    <div class="del">
      <h4>确定要删除吗？</h4>
      <p>
        <span>取消</span>
        <span>确定</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@media screen and (min-width: 768px) {
  html{
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
  .del {
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
    h4 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-family: PingFangSC-regular;
    }
    p {
      flex: 1;
      span {
        display: inline-block;
        &:nth-child(1) {
          width: 120px;
          height: 48px;
          line-height: 48px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 1);
          text-align: center;
          border: 1px solid rgba(217, 217, 217, 1);
          margin-right: 19px;
        }
        &:nth-child(2) {
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
}
@media screen and (max-width: 414px) {
  html{
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
  .del{
    position: fixed;
    top: 7rem;
    left: 2.2rem;
    width: 80%;
    height: 6rem;
    border-radius: 4px 4px 4px 4px;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(0, 0, 0, 0.65);
      font-size: .5rem;
      font-family: PingFangSC-regular;
    }
    p {
      flex: 1;
      span {
        display: inline-block;
        &:nth-child(1) {
          width: 3rem;
          height: 1rem;
          line-height: 1rem;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 1);
          text-align: center;
          border: 1px solid rgba(217, 217, 217, 1);
          margin-right: 19px;
        }
        &:nth-child(2) {
          width: 3rem;
          height: 1rem;
          line-height: 1rem;
          border-radius: 4px;
          background-color: rgba(24, 144, 255, 1);
          text-align: center;
        }
      }
    }
  }
}
</style>