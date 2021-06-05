<!--
 * @Author: your name
 * @Date: 2021-05-25 15:34:03
 * @LastEditTime: 2021-06-05 16:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\pages\index.vue
-->
<template>
  <div class="interview-box">
    <div class="top-box">
      当前位置：面试宝典
    </div>
    <div class="list-box">
      <MainList />
      <a-divider />
      <Pagination />
    </div>
  </div>
</template>

<script>
import MainList from "@/components/mainList/index";
import Pagination from "@/components/pagination/index";
export default {
  name: "interview",
  async asyncData({store}){
    store.commit('OPEN_SPINNING')
  },
  mounted(){
    this.$store.commit('CLOSE_SPINNING')
  },
  components: {
    MainList,
    Pagination,
  }
};
</script>

<style scoped lang='scss'>
.interview-box {
  max-width: 1200px;
  margin: 0 auto;
  .top-box {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
  }
  .list-box {
    margin-top: 2px;
    padding: 10px;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
  }
}
</style>
