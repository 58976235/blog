<!--
 * @Author: your name
 * @Date: 2021-05-28 14:42:32
 * @LastEditTime: 2021-07-12 09:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\backTop\index.vue
-->
<template>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">
        <img :src="img" alt="返回顶部" width="40" height="40">
      </div>
    </a-back-top>
  </div>
</template>
<script>
import img from '@/static/images/top.png'
export default {
    data(){
        return{
            img:img
        }
    }
}
</script>
<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>