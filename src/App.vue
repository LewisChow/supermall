<template>

  <div id="app">
    
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <mainhome/>
     
  </div>
  
</template>

<script>
import mainhome from './components/content/mainhome.vue'



export default {
  name: 'app',
  components: {
    mainhome,
    
    

    
  }
}
</script>

<style>

  @import './assets/css/base.css';

</style>
