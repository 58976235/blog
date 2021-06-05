<!--
 * @Author: your name
 * @Date: 2021-06-02 11:27:21
 * @LastEditTime: 2021-06-05 16:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\sidebar\linkList\index.vue
-->
<template>
  <div>
    <div class="link">
      <a-tag color="green"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒博客</a
        ></a-tag
      >
      <a-tag color="blue"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒sa 博客</a
        ></a-tag
      >
      <a-tag color="purple"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒博客</a
        ></a-tag
      >
      <a-tag color="red"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒as博客</a
        ></a-tag
      >
      <a-tag color="blue"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒 博客</a
        ></a-tag
      >
      <a-tag color="green"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒博客</a
        ></a-tag
      >
      <a-tag color="purple"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒寒博寒博博客</a
        ></a-tag
      >
      <a-tag color="red"
        ><a href="https://github.com/vueComponent/ant-design"
          >洛寒寒博寒博博客sdasd as</a
        ></a-tag
      >
    </div>
    <div v-if="loading">
      <a-skeleton  active :paragraph="{ rows: 2 }" />
      <a-skeleton  active :paragraph="{ rows: 2 }" />
      <a-skeleton  active :paragraph="{ rows: 2 }" />
      <a-skeleton  active :paragraph="{ rows: 2 }" />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading:true
        }
    },
    mounted(){
        this.loading=false
    }
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 20px;
  span {
    margin-top: 10px;
  }
}
</style>