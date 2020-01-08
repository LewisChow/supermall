<template>
  <div class="tabbar-item" @click="itemclick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
 
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
   activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style  scoped>
.tabbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>