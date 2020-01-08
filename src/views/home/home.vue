<template>
  <div id="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <Scroll class="content" ref="scroll" @scroll="backscroll" :probeType="3" :pullUpLoad="true" @pullingUp="loadmore" >
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <Feature></Feature>
      <tabControl :title="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick"></tabControl>
      <GoodsList :goods="goods[this.currentType].list" />
    </Scroll>
    <BackTop @click.native="backtop" v-show="isShow"/>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar";
import tabControl from "../../components/common/tabControl";
import Scroll from "../../components/common/scroll";

import GoodsList from "../../components/content/GoodsList";
import HomeSwiper from "../home/childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomenRecommend";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import Feature from "./childComps/FeatureView";
import BackTop from "../../components/content/BackTop";

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
    BackTop
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
      isShow:false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
        this.$refs.scroll.finishPullUp()
      });
      
    },
    backscroll(position){
      this.isShow = -(position.y) > 1000
    },
    loadmore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style  scoped>
.home-navbar {
  color: white;
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
}
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}

.tabcontrol {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>