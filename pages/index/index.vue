<!--
 * @Author: your name
 * @Date: 2021-07-08 17:24:43
 * @LastEditTime: 2021-10-09 17:15:55
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
      <MainList :loading='loading' :articlList='articlList'/>
      <a-divider />
      <Pagination :total='total' @pagechange='pagechange'/>
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
  async asyncData({store,$axios}){
    store.commit('OPEN_SPINNING')
    let data=await $axios.get("/getArticle",{params:{page:1,size:10}})
    return {articlList:data.data.data,total:data.data.total}
  },
  mounted(){
    this.loading=false
    this.$store.commit('CLOSE_SPINNING')
  },
  methods:{
    pagechange({page,pageSize}){
      this.$axios.get("/getArticle",{params:{page:page,size:pageSize}}).then(res=>{
        this.articlList=res.data.data
      })
    }
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
