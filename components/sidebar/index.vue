<!--
 * @Author: your name
 * @Date: 2021-05-31 14:14:38
 * @LastEditTime: 2021-06-05 17:01:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\sidebar\index.vue
-->
<template>
  <div>
    <div class="sider-box">
      <a-divider style="font-weight: 700"> 博主简介 </a-divider>
      <p>
        {{ blogInfo }}
      </p>
      <div v-if="loading">
        <a-skeleton
          active
          :paragraph="{ rows: 3 }"
        />
      </div>
      <div class="contact">
        <a :href="qq" target="_blank"> <a-icon type="qq" /></a>
        <a :href="github" target="_blank">
          <a-icon type="github" />
        </a>
      </div>
    </div>
    <div class="sider-box">
      <a-divider style="font-weight: 700"> 最新发布 </a-divider>
      <div>
        <NewArticle />
      </div>
    </div>
    <div class="sider-box">
      <a-divider style="font-weight: 700"> 最新评论 </a-divider>
      <div>
        <Comment />
      </div>
    </div>
    <div class="sider-box">
      <a-divider style="font-weight: 700"> 友情链接 </a-divider>
      <div>
        <LinkList />
      </div>
    </div>
  </div>
</template>

<script>
import NewArticle from "./newArticleList/index.vue";
import Comment from "./commentList/index.vue";
import LinkList from "./linkList/index.vue";
export default {
  data() {
    return {
      blogInfo: "",
      qq: "",
      github: "",
      loading:true
    };
  },
  components: {
    NewArticle,
    Comment,
    LinkList,
  },
  mounted() {
    this.getBlogInfo();
  },
  methods: {
    getBlogInfo() {
      this.$axios.get("/getBlogInfo").then((res) => {
        this.loading=false
        this.blogInfo = res.data.data.blogInfo;
        this.qq = `http://wpa.qq.com/msgrd?v=3&uin=${res.data.data.qq}&site=qq&menu=yes`;
        this.github = `https://github.com/${res.data.data.github}`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sider-box {
  border-radius: 2px;
  background-color: #fff;
  padding: 10px 20px;
  ::before,
  ::after {
    transform: translateY(3px);
    border-color: #eee;
    border-width: 2px;
  }
  + .sider-box {
    margin-top: 20px;
  }
}
.contact {
  a {
    color: #666;
    :hover {
      color: #666;
    }
  }
  font-size: 24px;
}
</style>