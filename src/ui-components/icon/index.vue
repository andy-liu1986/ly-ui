<template>
  <i class="iconfont" :class="'icon-' + name" />
</template>
<script>
export default {
  name:'ly-icon',
  props:{
    name:{
      type:String,
      defalut:''
    },
    color:{
      type:String
    }
  },
}
</script>