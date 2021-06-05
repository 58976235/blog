<!--
 * @Author: your name
 * @Date: 2021-05-25 15:34:03
 * @LastEditTime: 2021-06-05 17:51:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\layouts\default.vue
-->
<template>
  <div class="app">
    <a-spin :spinning="spinning">
      <div class="spin-content">
        <div id="components-layout-demo-basic">
          <a-layout class="width-max">
            <a-layout-header class="layout-header">
              <Header />
            </a-layout-header>
            <a-layout-content>
              <div class="main_box">
                <a-row
                  type="flex"
                  justify="space-between"
                  align="top"
                  :gutter="[16, 8]"
                >
                  <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="search-box">
                      <a-input-search
                        placeholder="请输入关键词"
                        enter-button
                        @search="onSearch"
                      />
                    </div>
                  </a-col>
                  <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <Nuxt />
                  </a-col>
                  <a-col :xs="0" :sm="0" :md="0" :lg="6" :xl="6">
                    <div class="sidebar-right">
                      <Sidebar />
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-layout-content>
            <a-layout-footer>
              <Footer />
            </a-layout-footer>
          </a-layout>
          <a-layout class="width-min">
            <a-layout-sider
              class="layout-sider"
              v-show="this.$store.state.menuActive"
              ><Sider
            /></a-layout-sider>
            <a-layout>
              <a-layout-header class="layout-header"
                ><Header @menuActive="menuClick" @searchAtive="searchClick" />
              </a-layout-header>

              <a-layout-content class="layout-content">
                <div class="main_box">
                  <a-row
                    type="flex"
                    justify="space-between"
                    align="top"
                    :gutter="[16, 8]"
                  >
                    <a-col :xs="24" :sm="24" :md="24" :lg="0" :xl="0">
                      <div
                        class="search-box"
                        :style="{ display: searchHeight }"
                      >
                        <a-input-search
                          placeholder="请输入关键词"
                          enter-button
                          @search="onSearch"
                        />
                      </div>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                      <Nuxt />
                    </a-col>
                    <a-col :xs="0" :sm="0" :md="0" :lg="6" :xl="6">
                      <div class="sidebar-right">
                        <Sidebar />
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-layout-content>
              <a-layout-footer class="layout-content">
                <Footer
              /></a-layout-footer>
            </a-layout>
          </a-layout>
        </div>
        <Back-Top />
      </div>
    </a-spin>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchActive: false,
      searchHeight: "none"
    };
  },
  computed:{
    spinning(){return this.$store.state.spinning}
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    menuClick() {
      this.$store.commit("SET_MENUACTIVE");
    },
    searchClick() {
      this.searchActive = !this.searchActive;
      if (this.searchActive) {
        this.searchHeight = "block";
      } else {
        this.searchHeight = "none";
      }
    },
  },
  mounted() {
    let text = `
  ███╗      ╔███╗██╗  ╔██╗    ██████╗ ██╗     ██████╗  ██████╗
  ████╗    ╔████║╚██╗ ██╔╝    ██╔══██╗██║    ██╔═══██╗██╔════╝
  ██╔██╗  ╔██╔██║ ╚████╔╝     ██████╔╝██║    ██║   ██║██║  ███╗
  ██║╚██╗ ██╔╝██║  ╚██╔╝      ██╔══██╗██║    ██║   ██║██║   ██║
  ██║ ╚████╔╝ ██║   ██║       ██████╔╝██████╗╚██████╔╝╚██████╔╝
  ╚═╝  ╚═══╝  ╚═╝   ╚═╝       ╚═════╝ ╚═════╝ ╚═════╝  ╚═════╝
`;
    console.log(`%c${text}`, "color: #fc4d50");
  },
};
</script>

<style lang="scss">
@import "@/assets/layout.scss";
.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot{
position: fixed;
}
.spin-content {
  background-color: #e6f7ff;
}
</style>
