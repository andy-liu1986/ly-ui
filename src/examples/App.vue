<template>
  <div id="app">
    <app-header />
    <div id="nav">
    </div>
    <c-menu />
    <router-view/>
  </div>
</template>
<script>
import cMenu from './views/cMenu';
import appHeader from './views/appHeader'
export default {
  name:'App',
  components:{ cMenu:cMenu, appHeader},
  mounted(){
    console.log(this.$router)
  },
}
</script>
<style lang="scss">
@import '@/examples/assets/css/index.scss';
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515a6e;
  background-color: #F7F7F7;
}

#nav {
  padding: 30px;
}
</style>
