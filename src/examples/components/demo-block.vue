<template>
  <div class="docs-demo-wrapper">
      <div :style="{height: isExpand ? '0' : 'auto'}" class="demo-container">
        <div span="14">
          <div class="docs-demo docs-demo--expand">
            <div class="highlight-wrapper">
              <slot name="highlight"></slot>
            </div>
          </div>
        </div>
      </div>
    <span class="docs-trans docs-demo-triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue'
  export default {
    data() {
      return {
        isExpand: true
      };
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand;
      }
    }
  };
</script>

<style lang="scss">
.docs-demo-wrapper{
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  min-height: 50px;
  padding: 20px 0;
  margin-top: 20px;
  text-align: left;
}
  .demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
  
  }
  .docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    pre code {
      font-family: Consolas,Menlo,Courier,monospace;
      line-height: 22px;
      border: none;
    }
  }
  .docs-trans {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #0c1ef5;
    font-size: 12px;
    padding: 10px 0;
    background-color: #FAFBFC;
    cursor: pointer;
  }
  .docs-demo-code,
  .highlight-wrapper,
  .docs-demo-meta {
    padding: 0 20px;
    overflow-y: auto;
  }
  .docs-demo-code {
    border-bottom: 1px solid #eee;
  }
  .docs-demo.docs-demo--expand .docs-demo-meta {
    border-bottom: 1px dashed #e9e9e9;
  }
  .docs-demo.docs-demo--expand .docs-demo-triangle {
    transform: rotate(180deg);
  }
  .highlight-wrapper {
    display: none;
    p,
    pre {
      margin: 0;
    }
    .hljs {
      padding: 0;
    }
  }
  .docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
  }
  .docs-demo-code-mobi {
    height: 620px;
    margin: 20px 0;
  }
  .docs-demo-code-mobi-header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;
    img {
      width: 100%;
    }
    .url-box {
      height: 28px;
      line-height: 28px;
      color: #fff;
      padding: 0 3px;
      background-color: #a2a2a2;
      margin: 10px auto 0;
      border-radius: 4px;
      white-space: nowrap;
      overflow-x: auto;
    }
  }
  .docs-demo-code-mobi-content {
    iframe {
      width: 100%;
      border: 0;
      height: 548px;
    }
  }
</style>