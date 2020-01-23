<template>
  <div>
   
  </div>
</template>

<script>
import Test from '../../components/test'

  export default {
    name:"category",
    components:{
      Test
    },
    props:{
      info:{
        type:Array,
        default(){
          return []
        }
      }
    }
    
   
  }
</script>

<style  scoped>

</style>