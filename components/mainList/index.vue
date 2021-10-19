<!--
 * @Author: your name
 * @Date: 2021-05-31 10:31:29
 * @LastEditTime: 2021-10-19 11:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\mainList\index.vue
-->
<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <a-list-item slot="renderItem" key="item.title" class="hover" slot-scope="item"  @click="skipDetail(item.articleId)">
        <img
          v-if="!loading"
          slot="extra"
          width="272"
          alt="logo"
          :src="item.imgPath"
        />
        <a-skeleton :loading="loading" active avatar>
          <a-list-item-meta :description="item.tag">
            <a slot="title" href="javascript:;">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="photo" />
          </a-list-item-meta>
          <p v-html="item.content" class="text">{{ item.content }}</p>
        </a-skeleton>
        <div v-if="!loading">
          <span style="margin-right: 8px">
            <a-icon type="eye" style="font-size:16px;" />
            {{ item.look }}
          </span>
          <span>
              <a-icon type="message" />
              {{ item.comment }}
          </span>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import photo from '@/static/images/photo.jpg'
export default {
  data() {
    return {
      listData:[],
      photo:photo
    };
  },
  props:{
    loading:{
      type:Boolean
    },
    articlList:{
      type:Array
    }
  },
  methods: {
    onChange(checked) {
      this.loading = !checked;
    },
    skipDetail(id){
      this.$router.push(`/detail?articleId=${id}`);
    }
  },
  watch:{
    articlList:{
      handler(newData){
        this.listData=newData
      },
      deep:true,
      immediate: true
    }
  }
};
</script>
<style scoped lang='scss'>
::v-deep .skeleton-demo {
  border: 1px solid #f4f4f4;
}
.hover:hover{
  cursor: pointer;
}
.text{
  display: -webkit-box;
　-webkit-box-orient: vertical;
　-webkit-line-clamp: 4;
　overflow: hidden;
  min-height: 84px;
}
</style>