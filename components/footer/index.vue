<!--
 * @Author: your name
 * @Date: 2021-05-28 14:03:47
 * @LastEditTime: 2021-06-05 19:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\footer\index.vue
-->
<template>
  <footer>
    <p class="footer">
      Copyright &copy; <span>{{ eTitle }}</span> Blog All Rights Reserved.
      <span>{{ ICP }}</span>
    </p>
  </footer>
</template>

<script>
import siteConfig from "@/site-config";
export default {
  data() {
    return {
      eTitle: siteConfig.eTitle,
      ICP: siteConfig.ICP,
    };
  },
};
</script>


<style lang="scss">
.footer {
  padding: 40px 0;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */

  -khtml-user-select: none; /* Konqueror */

  -moz-user-select: none; /* Firefox */

  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none;
}
</style>