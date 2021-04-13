<!--
 * @Descripttion: form表单的基础封装
 * @version: 1.0.0
 * @Author: daping
 * @Date: 2021-04-06 15:23:55
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 20:56:35
-->
<template>
  <el-form ref="elform" v-show="formConfig" :model="model" :rules="rules">
    <el-form-item v-for="(item, idx) in formConfig" :key="idx" :label="item.label" :prop="item.prop">
      <component v-model="model[item.prop]" :is="item.type" v-bind="item.props">
        <template v-if="item.type == 'el-select'">
          <el-option v-for="(option, index) in item.options" :key="option.value + index" v-bind="option">
          </el-option>
        </template>
      </component>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">立即创建</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      formConfig: {
        type: Array
      },
      model: {
        type: Object
      },
      rules: {
        type: Object
      }
    },
    methods: {
      submitForm() {
        this.$emit('handleSubmit')
      },
      resetForm() {
        this.$emit('handleReset', '子组件值')
      },
    },
    mounted() {
    }
  }
</script>