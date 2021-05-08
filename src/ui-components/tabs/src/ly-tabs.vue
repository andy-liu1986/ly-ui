<template>
  <div class="ly-tabs">
    <div class="ly-tabs_header">
      <div class="ly-tabs_nav_wrap">
        <div 
          v-for="(item, index) in tabsList" :key="index" 
          :class="itemClass(index)"
          ref="tablists"
          @click="tabsChange(index)"
        >
        {{item.label}}
        </div>
        <div class="ly-tabs-line" :style="lineStyle"></div>
      </div>
    </div>
    <div class="ly-tabs-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name:'lyTabs',
  props:{
    value:{
      type:String,
      default:''
    },
    lineColor:{
        type: String,
        default: '#409eff'
    }
  },
  data() {
    return {
      tabsList: [],
      lineWidth: 20,
      currentTabIndex: '',
      translateX:0
    }
  },
  computed:{
    //底部线条样式
    lineStyle(){
      return {
        width: `${this.lineWidth}px`,
        transform: `translateX(${this.translateX}px)`,
        backgroundColor: `${this.lineColor}`
      }
    }
  },
  mounted(){
    this.tabsList =  this.$children.map(v=>{
      return {
        label:v.label,
        name: v.name
      }
    })
  },
  methods:{
    //tab切换时间
    tabsChange(index){
      this.currentTabIndex = index
    },
    //content的显示和隐藏
    showContent(n = this.currentTabIndex){
      this.$children.forEach((v,i)=> {
        v.show = false ;
        n == i && ( this.$children[i].show = true )
      })
    },
    //头部样式
    itemClass(i){
      return [
        'ly-tabs-item',
        {
          'ly-tabs-item_frist':i == 0,
          'ly-tabs-item_last':i == (this.tabsList.length - 1)
        }
      ]
    }
  },
  watch:{
    value(n){
      this.currentTabIndex = this.tabsList.findIndex(v => v.name == n)
    },
    tabsList(){
      this.currentTabIndex = this.tabsList.findIndex(v => v.name == this.value)
      this.showContent()
    },
    currentTabIndex(n){
      if(n < 0)return;
      this.$nextTick().then(res => {
        let tabRefs = this.$refs.tablists[n]
        if(n == 0){
          this.lineWidth = tabRefs.offsetWidth - 20
          this.translateX = tabRefs.offsetLeft
        }else if(n == this.tabsList.length - 1){
           this.lineWidth = tabRefs.offsetWidth - 20
          this.translateX = tabRefs.offsetLeft + 20
        }else{
          this.lineWidth = tabRefs.offsetWidth - 40
          this.translateX = tabRefs.offsetLeft + 20
        }
        this.showContent(n)
      })
    },
  }
}
</script>
<style lang="scss">
$prefixCls:'ly-tabs';
.#{$prefixCls}{
  text-align: left;
  &-line{
    height: 2px;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
  }
  &_header{
    padding: 10px;
    .#{$prefixCls}_nav_wrap{
      position: relative;
      width: 100%;
      .#{$prefixCls}-item{
        &_frist{
          padding-left: 0;
        }
        .#{$prefixCls}-item_last{
          padding-right: 0;
        }
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }
}
</style>