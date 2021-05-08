<template>
  <div id="cMenu">
    <div class="c-menu-group"  v-for="(item, index) in menuJsonList" :key="index">
      <div class="c-menu-title">{{item}}</div>
      <ul>
        <li 
          v-for="(conf,ix) in lists[item]" :key="ix" 
          @click="goPagePath(conf.path,index)"
          class="c-menu-item" 
          :class="{'c-menu-item_active':count === index}"
        >
          {{conf.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import menuJson from '../util/menu_config.json'
export default {
  name:'cMenu',
  data() {
    return {
      lists:menuJson,
      count:null
    }
  },
  computed: {
    menuJsonList(){
      return Object.keys(this.lists)
    },
  },
  methods:{
    goPagePath(path, index){
      this.count = index;
      this.$router.push({path})
    }
  }
}
</script>
<style lang="scss">
  #cMenu{
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 60px;
    background-color: #fff;
    text-align: left;
    border-right: 1px solid #C5D9E8;
    .c-menu-title{
      font-size: 16px;
      margin: 8px 0;
      padding-left: 15px;
    }
    .c-menu-item{
      &.c-menu-item_active{
        position: relative;
        color: #2d8cf0;
        background-color: #f0faff;
        &::after{
          content: '';
          position: absolute;
          width: 1px;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: #2d8cf0;
        }
      }
      transition: all .5s ease-in-out;
      padding: 14px 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      padding-left: 34px;
      cursor: pointer;
    }
  }
</style>
