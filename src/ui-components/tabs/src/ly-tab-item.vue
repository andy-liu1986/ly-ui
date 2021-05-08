<template>
  <div class="ly-tab-item" v-show="show">
    <slot />
  </div>
</template>
<script>
export default {
  name:'ly-tab-item',
  props:{
    label:{
      type: String
    },
    name:{
      type: String
    }
  },
  data(){
    return {
      show:false
    }
  }
}
</script>
<style lang="scss">
  
</style>