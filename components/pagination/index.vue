<!--
 * @Author: your name
 * @Date: 2021-05-31 10:47:02
 * @LastEditTime: 2021-06-01 10:19:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\pagination\index.vue
-->
<template>
  <a-pagination
    v-model="current"
    :page-size-options="pageSizeOptions"
    :total="total"
    show-size-changer
    :page-size="pageSize"
    @showSizeChange="onShowSizeChange"
    @change="paginChange"
  >
    <template slot="buildOptionText" slot-scope="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-if="props.value === '50'">全部</span>
    </template>
  </a-pagination>
</template>
<script>
export default {
  data() {
    return {
      pageSizeOptions: ['10', '20', '30'],
      current: 1,
      pageSize: 10,
      total: 33,
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      console.log(current, pageSize);
    },
    paginChange(page,pageSize){
      console.log(page,pageSize);
    }
  },
};
</script>
