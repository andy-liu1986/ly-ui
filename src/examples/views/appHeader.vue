<template>
  <div id="appHeader">
    <div class="app-header-wrap">
      <div class="left">
        <img :src="require('@/examples/assets/img/logo.jpg')" />
        <span class="title">ly-vue-ui</span>
      </div>
      <div class="right">
        <!-- <img :src="require('@/examples/assets/img/timg.jfif')" /> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#appHeader {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  z-index: 1000;
  .app-header-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      padding-left: 30px;
      img {
        height: 30px;
        border-radius: 20px;
        vertical-align: middle;
      }
      .title {
        vertical-align: middle;
        font-size: 30px;
        margin-left: 10px;
        text-shadow: 5px 5px 5px #2465c1;
      }
    }
  }
}
</style>