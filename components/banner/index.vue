<!--
 * @Author: your name
 * @Date: 2021-05-28 10:33:45
 * @LastEditTime: 2021-05-28 16:47:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\components\banner\index.vue
-->
<template>
  <a-carousel autoplay>
    <img :src="img1" alt="">
    <img :src="img2" alt="">
    <img :src="img3" alt="">
    <img :src="img4" alt="">
  </a-carousel>
</template>

<script>
import img1 from  '@/static/images/0.jpg'
import img2 from  '@/static/images/1.jpg'
import img3 from  '@/static/images/0.jpg'
import img4 from  '@/static/images/1.jpg'
export default {
  data(){
    return{
      img1:img1,
      img2:img2,
      img3:img3,
      img4:img4
    }
  }
};
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>