<!--
 * @Author: your name
 * @Date: 2021-05-31 10:31:29
 * @LastEditTime: 2021-06-05 17:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\mainList\index.vue
-->
<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template v-for="{ type, text } in actions" slot="actions">
          <span :key="type" v-if="!loading">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <img
          v-if="!loading"
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-skeleton :loading="loading" active avatar>
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-skeleton>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  data() {
    return {
      listData,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  props:[
      'loading'
  ],
  methods: {
    onChange(checked) {
      this.loading = !checked;
    },
  },
};
</script>
<style>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>