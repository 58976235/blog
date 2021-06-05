<template>
  <div class="header">
    <a-row type="flex" justify="space-between" align="middle" :gutter="[8, 0]">
      <a-col :xs="24" :sm="24" :md="4" :lg="3" :xl="2">
        <div class="header-title">
          <h1>
            {{ title }}<span class="site-type">{{ type }}</span>
          </h1>
        </div>
      </a-col>
      <a-col :xs="0" :sm="0" :md="20" :lg="16" :xl="16">
        <nav>
          <top-nav></top-nav>
        </nav>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="5" :xl="6">
        <div class="header-search">
          <a-input-search
            placeholder="请输入关键词"
            style="width: 200px"
            @search="onSearch"
          />
        </div>
      </a-col>
    </a-row>
    <a-button icon="menu" class="menu-btn" @click="menuActive()"/>
    <a-button shape="circle" icon="search" class="search-btn" @click="searchAtive()"/>
  </div>
</template>

<script>
import topNav from "./topNav/index";
import siteConfig from "@/site-config";
export default {
  name: "Navlist",
  data() {
    return {
      title: siteConfig.title,
      type: siteConfig.type,
      route:''
    };
  },
  components: {
    topNav,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    menuActive(){
      this.$emit('menuActive')
    },
    searchAtive(){
      this.$emit('searchAtive')
    }
  },
  computed: {},
};
</script>

<style lang="scss">

@import '@/assets/header.scss'
</style>