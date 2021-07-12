<!--
 * @Author: your name
 * @Date: 2021-07-08 17:24:43
 * @LastEditTime: 2021-07-12 08:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blog/pages/index/index.vue
-->
<template>
  <div class="index-box">
    <div class="banner-box">
      <Banner />
    </div>
    <div class="list-box">
      <MainList :loading='loading'/>
      <a-divider />
      <Pagination />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/index";
import MainList from "@/components/mainList/index";
import Pagination from "@/components/pagination/index";
export default {
  name: "index",
  data(){
    return{
      loading:true
    }
  },
  async asyncData({store}){
    store.commit('OPEN_SPINNING')
  },
  mounted(){
    this.loading=false
    this.$store.commit('CLOSE_SPINNING')
  },
  destroyed(){
    console.log('aaa');
  },
  components: {
    Banner,
    MainList,
    Pagination,
  }
};
</script>

<style scoped lang='scss'>
.index-box {
  max-width: 1200px;
  margin: 0 auto;
  .banner-box {
    overflow: hidden;
    max-width: 100%;
    max-height: 280px;
    border-radius: 4px;
  }
  .list-box {
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
