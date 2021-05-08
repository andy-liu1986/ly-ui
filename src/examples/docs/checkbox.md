

### 基本用法(checkbox)
<div class="demo-block">
  <ly-checkbox v-model="checked" >复选框1</ly-checkbox>
  <ly-checkbox v-model="checked2" >复选框2</ly-checkbox>
  <ly-checkbox :checked="true">复选框2</ly-checkbox>
</div>
<script>
export default {
   data(){
     return{
       checked:true,
       checked2:false,
       checked3:true,
       checked4:false,
       checked5:false,
       groupLists:['小明','隔壁老王']
     }
  },
  methods:{
    onChange(e){
      alert(e)
    }
  }
}
</script>
<p>lyj-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</p>

::: demo
```html
<ly-checkbox v-model="checked"></ly-checkbox>
<ly-checkbox v-model="checked2"></ly-checkbox>
<ly-checkbox checked>复选框2</ly-checkbox>
<script>
export default {
   data(){
    return{
      checked:true,
      checked2:false
    }
  },
}
</script>

```
:::
### 禁用状态(disabled)
<div class="demo-block">
  <ly-checkbox v-model="checked3" :disabled="true">复选框1</ly-checkbox>
  <ly-checkbox v-model="checked4" :disabled="true">复选框2</ly-checkbox>
</div>

::: demo
```html
<ly-checkbox v-model="checked" disabled>复选框1</ly-checkbox>
<ly-checkbox v-model="checked2" disabled>复选框2</ly-checkbox>
<script>
export default {
   data(){
    return{
      checked:true,
      checked2:false
    }
  },
  
}
</script>

```
:::

### Event(当绑定值变化时触发)
<div class="demo-block">
  <ly-checkbox v-model="checked5" @onChange="onChange" >复选框1</ly-checkbox>
</div>

::: demo
```html
<ly-checkbox v-model="checked" @onChange="onChange" >复选框1</ly-checkbox>
<script>
export default {
   data(){
    return{
      checked:false
    }
  },
  methods:{
    onChange(e){
      alert(e)
    }
  }
}
</script>

```
:::

### 多选框组(ly-checkbox-group适用于多个勾选框绑定到同一个数组的情景)
<div class="demo-block">
  <ly-checkbox-group v-model="groupLists">
    <ly-checkbox label="小明"></ly-checkbox>
    <ly-checkbox label="小李"></ly-checkbox>
    <ly-checkbox label="小新"></ly-checkbox>
    <ly-checkbox label="隔壁老王" :disabled="true"></ly-checkbox>
  </ly-checkbox-group>
</div>


::: demo
```html
<ly-checkbox-group v-model="groupLists">
  <ly-checkbox label="小明"></ly-checkbox>
  <ly-checkbox label="小李"></ly-checkbox>
  <ly-checkbox label="小新"></ly-checkbox>
  <ly-checkbox label="隔壁老王" disabled></ly-checkbox>
</ly-checkbox-group>
<script>
export default {
   data(){
    return{
      groupLists:['小明','隔壁老王']
    }
  },
  methods:{
   
  }
}
</script>

```
:::

### checkbox prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value / v-model |绑定值                 |	boolean   |	—           | - |
|disabled |	是否禁用 |	boolean  |	—  | false |
|label      |	只有在checkbox-group或者绑定对象类型为array时有效 |	String   |	—           | '' |
|checked      |	当前是否勾选 |	boolean   |	—           | false |
### checkbox Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onChange         |当绑定值变化时触发| 更新后的值 |

### checkboxGroup prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|value / v-model |绑定值                 |	array   |	—           | - |
### checkboxGroup Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onChange         |当绑定值变化时触发| 更新后的值 |

