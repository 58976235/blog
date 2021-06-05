<template>
  <div>
    <a-menu
      v-model="current"
      mode="horizontal"
      class="nav-box"
      @select="selectItem"
    >
      <template v-for="route in routerList">
        <a-menu-item
          :key="route.path"
          v-if="!route.children.length"
          class="nav-item"
        >
          <span
            ><a-icon :type="route.icon" theme="filled" />{{ route.title }}</span
          >
        </a-menu-item>
        <a-sub-menu :key="route.name" v-else class="nav-item">
          <span slot="title" class="submenu-title-wrapper">
            <a-icon :type="route.icon" theme="filled" />{{ route.title }}</span
          >
          <a-menu-item
            :key="children.path"
            v-for="children in route.children"
            class="children-item"
          >
            {{ children.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import navConfig from "../config";
export default {
  name: "topNav",
  data() {
    return {};
  },
  methods: {
    selectItem({ key }) {
      this.$router.push(key);
    },
  },
  computed: {
    current: {
      get() {
        return [this.$route.path];
      },
      set() {},
    },
    routerList() {
      let parentArr = [];
      let childrenArr = {};
      this.$router.options.routes.forEach((item) => {
        if (item.path != "/") {
          navConfig.forEach((navConfigItem, index) => {
            if (navConfigItem.name == item.name) {
              item.title = navConfigItem.title;
              item.icon = navConfigItem.icon;
              parentArr[index] = item;
            }
            if (navConfigItem.children.length) {
              navConfigItem.children.forEach((navChildrenItem, index) => {
                if (navChildrenItem.name == item.name) {
                  item.title = navChildrenItem.title;
                  if (!childrenArr[navConfigItem.name]) {
                    childrenArr[navConfigItem.name] = [];
                    childrenArr[navConfigItem.name][index] = item;
                  } else {
                    childrenArr[navConfigItem.name][index] = item;
                  }
                }
              });
            }
          });
        }
      });
      parentArr.forEach((item) => {
        if (!childrenArr[item.name]) {
          item.children = [];
        } else {
          item.children = childrenArr[item.name];
        }
      });
      return parentArr;
    },
  },
};
</script>
<style>
.nav-item span {
  display: inline-block;
  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */

  -khtml-user-select: none; /* Konqueror */

  -moz-user-select: none; /* Firefox */

  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none;
}
.nav-item:hover span {
  animation-name: items;
  animation-duration: 0.5s;
}
.ant-menu-submenu-content {
  overflow: hidden;
}
.children-item {
  margin: 0 !important;
  transition: text-indent 0.2s linear;
}
.children-item:hover {
  background-color: #1890ff;
  color: #fff;
  text-indent: 10px;
}
.nav-box {
  display: flex;
  line-height: 63px;
  justify-content: flex-end;
}
@keyframes items {
  0% {
    transform: translateY(0);
  }
  24% {
    transform: translateY(-8px);
  }
  40% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-4px);
  }
  72% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(-0);
  }
}
</style>