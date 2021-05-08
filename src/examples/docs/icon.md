<script>
const iconList = require('@/examples/util/iconList.json')
export default {
  data() {
    return {
      icons: iconList
    }
  }
}
</script>
<style lang="scss">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .iconfont-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .iconfont-list li {
    float: left;
    width: 8.88%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: all .3s;
    cursor: pointer;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    }
    i {
      display: block;
      font-size: 22px;
      margin-bottom: 15px;
      transition: all .2s;
    }
    &:hover{
    	color: rgb(80,80,80);
    	box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);
	    i{
	      font-size: 36px;
	    }
    } 
  }
</style>

# Icon 图标

----
<!-- 语义化的矢量图形，```xview``` 使用开源的 Iconfont (<a href="http://www.iconfont.cn/collections/detail?cid=558"> 彡茄子酱彡 在阿里巴巴矢量图标库的开源图标库</a>) 作为图标库，并制作成了 ```icon font```。 -->
### 如何使用

使用 ```name="icon-XXX"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
  <ly-icon name="all" color="red"></ly-icon>
</div>

::: demo
```html

  <ly-icon class="icon-iconset0101 fs-24"></ly-icon>
  <ly-icon class="icon-iconset0102 fs-24"></ly-icon>
  <ly-icon class="icon-iconset0103 fs-24"></ly-icon>
  <ly-icon class="icon-iconset0104 fs-24"></ly-icon>

```
:::

### 图标示例
<ul class="iconfont-list">
  <li v-for="(item,index) in icons" :key="index">
    <ly-icon :name="item.split('-')[1]" class="fs-24"> </ly-icon>
    <p>{{item}}</p>
  </li>
</ul>