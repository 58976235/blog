<!--
 * @Author: your name
 * @Date: 2021-06-01 20:46:15
 * @LastEditTime: 2021-10-09 16:59:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\sidebar\newArticleList\index.vue
-->
<template>
  <div>
    <article class="article" v-for="article in NawArticle" :key="article.key">
      <div class="article-box">
        <div class="article-img-box">
          <img
            :src="article.imgPath"
            alt="一张图片"
            class="article-img"
          />
          <span>{{article.tag}}</span>
        </div>
        <div class="article-content-box">
          <p class="article-content" v-html='article.content'>{{article.content}}</p>
          <div class="article-content-behavior">
            <a-statistic :value="article.look">
              <template #prefix>
                <a-icon type="eye" />
              </template>
            </a-statistic>
            <a-statistic :value="article.comment" style="margin-left: 16px">
              <template #prefix>
                <a-icon type="message" />
              </template>
            </a-statistic>
          </div>
        </div>
      </div>
    </article>
    
    <div v-if="loading">
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
      <a-skeleton :avatar='{shape:"square"}' active :paragraph="{ rows: 2 }" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading:true,
      NawArticle: [],
    };
  },
  methods: {
    getNawArticle() {
      this.$axios.get("/getNawArticle").then((res) => {
        this.loading=false
        this.NawArticle = res.data;
      });
    },
  },
  mounted(){
      this.getNawArticle()
  }
};
</script>

<style lang="scss">
.article {
  padding: 10px 0;
  + .article {
    border-top: 1px solid #eee;
  }
}
.article:hover {
  cursor: pointer;
  .article-img {
    transform: scale(1.1);
  }
  .article-content {
    color: #1890ff;
  }
}
.article-box {
  display: flex;
  justify-content: space-between;
  .article-img-box {
    position: relative;
    width: 42%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-out;
    }
    span {
      display: inline-block;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-align: center;
    }
  }
  .article-content-box {
    width: 54%;
    .article-content-behavior {
      display: flex;
      .ant-statistic-content {
        font-size: 14px;
        color: #aaa;
      }
    }
    .article-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>