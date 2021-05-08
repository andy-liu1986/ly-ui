<template>
  <label
    class="ly-checkbox"
    :class="{
      'is-checked': this.isChecked,
      'is-disabled': this.disabled,
    }"
    @click="updateValue"
  >
    <!-- 方框 -->
    <span class="ly-checkbox__box">
      <span class="ly-checkbox_inner"> </span>
    </span>
    <!-- label -->
    <span class="ly-checkbox_label">
      <slot></slot>
      <!-- 如果没有插槽且为checkbox-group时直接渲染label -->
      <template v-if="!this.$slots.default && this.isGroup">
        {{ label }}
      </template>
    </span>
  </label>
</template>
<script>
export default {
  name: "lyCheckbox",
  props: [
    // [Boolean, Array] 布尔值，或者数组（表单多选时），v-model绑定值
    "value",
    //是否禁用
    "disabled",
    // 当value 为Array时 提供resetValue值,标记当前checkBox的值
    "label",
    // 是否选中
    "checked",
  ],
  computed: {
    isChecked() {
      if (typeof this.value == "boolean") {
        // 单个checkbox
        return this.value;
      } else if (this.valueIsArray) {
        // checkbox-group
        return this.model.includes(this.label);
      } else {
        return this.model;
      }
      return false;
    },
    // v-model绑定值
    model: {
      get() {
        /**
         * 如果是checkbox-group  返回父组件的数组value
         * 否则返回当前checkbox的value或者checked
         */
        return this.isGroup
          ? this.resetValue 
          : this.value == undefined
          ? this.checked
          : this.value;
      },
      set(val) {},
    },
    //是否是多选框组ckeckbox-group
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag !== "ly-checkbox-group") {
          // 不存在ckeckbox-group则继续找
          parent = parent.$parent;
        } else {
          // 存在父组件ckeckbox-group
          this._group = parent;
          return true;
        }
      }
      return false;
    },
    //是否使用GroupValue
    resetValue() {
      return this._group ? this._group.value : this.value;
    },
  },
  created() {
    //如果value isArray
    this.cc = this.isGroup;
    // 绑定值是否为array
    this.valueIsArray = Array.isArray(this.model);
  },
  methods: {
    //  checkbox 点击事件
    updateValue() {
      // 禁止操作
      if (this.disabled) return;
      let check;
      if (
        this.value !== undefined &&
        {}.toString.call(this.value) == "[object Boolean]"
      ) {
        // 单个ckeckbox 直接双向绑定value
        this.$emit("input", !this.value);
      } else if (this.valueIsArray) {
        // checkbox-group组 情况
        if (this.model.includes(this.label)) {
          // 存在则删除
          check = JSON.parse(JSON.stringify(this.model));
          delete check[this.model.indexOf(this.label)];
        } else {
          // 不存在则添加
          check = JSON.parse(JSON.stringify(this.model));
          check.push(this.label);
        }
      }
      // 绑定值发生变化时 向外传参
      this.$emit("onChange", this.model);
      // 如果是check-group 则调用父组件的handleChange方法
      this.isGroup && this._group.handleChange(check);
    },
  },
};
</script>
<style lang="scss">
.ly-checkbox {
  position: relative;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  box-sizing: border-box;
  margin-right: 10px;
  &.is-checked {
    .ly-checkbox_inner {
      background-color: #6575f6;
      border-color: #6575f6;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    .ly-checkbox_inner {
      background-color: #edf2fc;
      border-color: #dcdfe6;
      &:hover {
        border-color: #dcdfe6;
      }
      &::after {
        border-color: #c0c4cc;
      }
    }
    .ly-checkbox_label {
      color: #c0c4cc;
    }
  }
  .ly-checkbox__box {
    display: inline-block;
    line-height: 1;
  }
  .ly-checkbox_inner {
    display: inline-block;
    position: relative;
    border: 1px solid #c4cad7;
    border-radius: 2px;
    width: 1em;
    height: 1em;
    background-color: #fff;
    z-index: 1;
    vertical-align: middle;
    transition: all 0.3s;
    &:hover {
      border-color: #6575f6;
    }
    &::after {
      position: absolute;
      content: "";
      width: 3px;
      height: 0.5em;
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      left: 0.25em;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      transform-origin: center;
    }
  }
  .ly-checkbox_label {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    padding-left: 6px;
  }
}
</style>