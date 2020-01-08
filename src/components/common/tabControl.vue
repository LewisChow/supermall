<template>
  <div class="tabcontrol">
      <div class="tabcontrol-item" v-for="(item,index) in title"
       :class="{active:currentindex === index}"
       @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name:"tabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentindex:0
      }
    },
    methods: {
      itemclick(index){
          this.currentindex = index
          this.$emit('tabclick',index)
      }
    },
  }
</script>

<style  scoped>

.tabcontrol{
  display: flex;
  height: 40px;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
}

.tabcontrol-item{
  flex: 1;
  
}
.tabcontrol-item span{
  padding: 5px;
}
.active span{
  color:var(--color-tint);
  
  border-bottom: 1px solid #ff5777;
}
</style>