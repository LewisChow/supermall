<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
   
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
    })
    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })
    this.scroll.on("pullingUp",() =>{
      this.$emit("pullingUp")
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      
      this.scroll.refresh()
    }
  },
} 
</script>

<style  scoped>


</style>