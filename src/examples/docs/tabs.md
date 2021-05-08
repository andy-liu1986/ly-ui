

### 提示(alert)
---
<div class="demo-block">
  <ly-tabs v-model="activeName" lineColor="#409eff">
    <ly-tab-item label="权限管理" name="first">权限管理</ly-tab-item>
    <ly-tab-item label="角色管理" name="sencond">角色管理</ly-tab-item>
    <ly-tab-item label="账号管理" name="threed">账号管理</ly-tab-item>
    <ly-tab-item label="系统设置" name="threed">系统设置</ly-tab-item>
  </ly-tabs>
</div>
<script>
export default {
   data(){
     return{
       activeName:'first',
     }
  },
  methods:{
  }
}
</script>



::: demo
```html
<div class="demon-block">
    <yj-button @click.native="showConfirm">alert</yj-button>
</div>
<script>
export default {
   data(){
     return{
       show:false,
       title:'标题'
     }
  },
  methods:{
    showConfirm(){
      this.$dialog.confirm({
        title:'Alert！',
        content:'确认content!!是否继续?'
      }).then(res => {
        alert(res)
      }).catch(rej => {
        alert(rej)
      })
    }
  }
}
</script>

```
:::

### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |标题 |	String   |	—           | '' |
|content      |	消息内容 |	String/Html/VNode  |	—           | '' |
|showClose      |	是否显示关闭按钮 |	Boolean   |	—           | true |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onclick         |点击按钮时触发| —  |
