<template>
  <div class="yj-checkbox-group11" role="checkboxgroup">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'ly-checkbox-group',
  props:{
    value:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    handleChange(val){
      this.$emit('onChange',val)
      this.$emit('input',val)
    }
  }
}
</script>