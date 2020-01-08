<template>
  <div class="goods">
     <GoodsListItem :item="item" v-for="item in goods"></GoodsListItem>
  </div>
</template>

<script>

  import GoodsListItem from './GoodsListItem'
  export default {
    name:"GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style  scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>