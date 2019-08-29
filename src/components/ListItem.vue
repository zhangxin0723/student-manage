<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 21:06:13
 * @LastEditTime: 2019-08-28 09:08:18
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
      <li>
        <span @click="this.edit_change">编辑</span>
        <span @click="this.del_change">删除</span>
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Del from "@/components/Del.vue";
import Edit from "@/components/Edit.vue";
import { mapMutations, mapActions } from "vuex";

export default Vue.extend({
  props: {},
  components: {
    Del
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations({
      edit_change: "all/edit_change",
      del_change: 'all/del_change'
    }),
    ...mapActions({
      recordlists: 'all/recordlists'
    })
  },
  created() {},
  mounted() {
    this.recordlists()
  }
});
</script>
<style scoped lang="scss">
@media screen and (min-width: 768px) {
  html {
    font-size: 100px;
  }
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
}
@media screen and (max-width: 767px) {
  html {
    font-size: 50px;
  }
  ul {
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.1rem;
    li {
      flex: 2;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(5) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>