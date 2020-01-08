<template>
   <swiper>
      <swiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiperItem>
    </swiper>
</template>

<script>
import swiper from '../../../components/common/swiper/Swiper'
import swiperItem from '../../../components/common/swiper/SwiperItem'

  export default {
    name:'HomeSwiper',
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      swiper,
      swiperItem
    }
  }
</script>

<style  scoped>

</style>