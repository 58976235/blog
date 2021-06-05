<!--
 * @Author: your name
 * @Date: 2021-06-01 20:46:08
 * @LastEditTime: 2021-06-05 16:51:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\sidebar\commentList\index.vue
-->
<template>
  <div>
    <div class="comment-box" v-for="comment in commentData" :key="comment.key">
      <div class="comment-img">
        <img :src="photo" alt="" />
      </div>
      <div class="comment-main">
        <h3 class="comment-name">{{ comment.name }}</h3>
        <p class="comment-content">{{ comment.content }}</p>
        <p class="comment-tag">
          <a href="javascript:;">{{ comment.tag | tag }}</a>
        </p>
      </div>
    </div>
    <div v-if="loading">
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
      <a-skeleton avatar active :paragraph="{ rows: 2 }" />
    </div>
  </div>
</template>

<script>
import photo from "@/static/images/photo.jpg";
export default {
  data() {
    return {
      loading:true,
      photo,
      commentData: [],
    };
  },
  methods: {
    getComment() {
      this.$axios.get("/getComment").then((res) => {
        this.loading=false
        this.commentData = res.data;
      });
    },
  },
  mounted() {
    this.getComment();
  },
  filters: {
    tag(value) {
      return "文章：" + value;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-box {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .comment-img {
    img {
      width: 60px;
      height: 50px;
    }
  }
  .comment-main {
    width: 76%;
    .comment-tag {
      margin: 0;
    }
    .comment-name {
      color: #1890ff;
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .comment-tag {
      color: #1890ff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .comment-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  + .comment-box {
    border-top: 1px solid #eee;
  }
}
</style>