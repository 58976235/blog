<!--
 * @Author: your name
 * @Date: 2021-05-25 15:34:03
 * @LastEditTime: 2021-06-05 17:43:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\pages\index.vue
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
