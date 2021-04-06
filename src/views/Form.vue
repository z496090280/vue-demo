<!--
 * @Descripttion: form 实例
 * @version: 
 * @Author: daping
 * @Date: 2021-04-06 15:23:55
 * @LastEditors: daping
 * @LastEditTime: 2021-04-06 19:16:38
-->
<template>
  <div class="form">
    <Form ref="ruleForm" :rules="rules" :formConfig="forms" :model="form" @handleReset="resetForm"
      @handleSubmit="submitForm" />
    <el-button type="primary" @click="asyncFn">假异步获取select数据</el-button>
  </div>
</template>

<script>
  import Form from '../components/Form'
  export default {
    components: {
      Form
    },
    data() {
      return {
        form: {
          inputKey: '',
          selectKey: '',
          dateKey: ''
        },
        rules: {
          inputKey: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          selectKey: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        },
        selectOpts: [],
        selectOpts1: [
          { label: '区域一', value: 'shanghai' },
          { label: '区域二', value: 'beijing' },
        ]
      }
    },
    methods: {
      resetForm(e) {
        this.$refs.ruleForm.$children[0].resetFields()
      },
      submitForm() {
        console.log(this.form)
        this.$refs.ruleForm.$children[0].validate((v) => {
          if (v) {
            console.log('submit~')
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      asyncFn() {
        let _this = this
        setTimeout(() => {
          _this.selectOpts = _this.selectOpts1
          _this.$message({
            message: '添加资源成功',
            type: 'success'
          });
        }, 2000)
      }
    },
    computed: {
      forms() {
        return [
          {
            type: 'el-input',
            prop: 'inputKey',
            label: 'input：',
            value: 'packName',
            props: {
              clearable: true
            },
          },
          {
            type: 'el-select',
            prop: 'selectKey',
            label: 'select',
            value: 'beijing',
            props: {
              clearable: true
            },
            options: this.selectOpts
          },
          {
            type: 'el-date-picker',
            prop: 'dateKey',
            label: '时间：',
            value: 'date',
            props: {
              type: 'daterange',
              'range-separator': '至',
              'start-placeholder': '开始日期',
              'end-placeholder': '结束日期',
              'default-time': ['00:00:00', '23:59:59'],
              'value-format': "timestamp"
            },
          }
        ]
      }
    }
  }
</script>