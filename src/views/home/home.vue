<template>

  <div id="home">
    
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tabControl :title="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick" ref="tabControl1"  v-show="tabcontrolshow"></tabControl>
    <Scroll class="content" ref="scroll" @scroll="backscroll" :probeType="3"  :pullUpLoad="true" @pullingUp="loadmore">
      <HomeSwiper :banners="banners" @imageLoad="imageLoad"></HomeSwiper>
      
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <Feature></Feature>
      <tabControl :title="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick" ref="tabControl2"></tabControl>
      <GoodsList :goods="goods[this.currentType].list" />
    </Scroll>
    <BackTop @click.native="backtop" v-show="isShow"/>
    
  </div>
</template>

<script>
import navbar from "components/common/navbar";
import tabControl from "components/common/tabControl";
import Scroll from "components/common/scroll";
import Test from 'components/test'


import GoodsList from "components/content/GoodsList";
import HomeSwiper from "../home/childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomenRecommend";
import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from "common/utils.js";
import Feature from "./childComps/FeatureView";
import BackTop from "components/content/BackTop";

export default {
  name: "home",
  components: {
    navbar,
    tabControl,
    Scroll,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    Feature,
    BackTop,
    Test
   
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false,
      tabOffsetTop:0,
      tabcontrolshow:false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
   
  },
  mounted() {
    
    const refresh = debounce(this.$refs.scroll.refresh,50)

     this.$bus.$on("itemImageLoad",() =>{
      refresh()
    })
    
  },
  methods: {
   
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentindex = index;
      this.$refs.tabControl2.currentindex = index;

    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0,300);
      
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
      
    },
    backscroll(position){
      this.isShow = -(position.y) > 1000;
      this.tabcontrolshow = -(position.y) > this.tabOffsetTop 
    },
    loadmore(){
      this.getHomeGoods(this.currentType)
    },
    imageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
    
  }
};
</script>

<style  scoped>
.home-navbar {
  color: white;
  background-color: var(--color-tint);
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; */
}
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}



.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tabcontrol{
  position: relative;
  z-index: 9;
}
</style>