<template>
  <div class="container">
    <div v-for="item in recommends" class="recommends-item" >
       <a :href="item.link">
         <img :src="item.image" alt="">
       </a>
       <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HomeRecommend",
    props:{
      recommends:{
        type:Array,
        defaule(){
          return []
        }
      }
    }
  }
</script>

<style  scoped>

.container{
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommends-item{
  flex: 1;
}

.recommends-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  
}
</style>