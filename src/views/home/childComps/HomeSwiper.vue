<template>
  <swiper>
    <swiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import swiper from "../../../components/common/swiper/Swiper";
import swiperItem from "../../../components/common/swiper/SwiperItem";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    swiper,
    swiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true
      }
    }
  }
};
</script>

<style  scoped>
</style>