<!--
 * @Descripttion: form 实例
 * @version: 
 * @Author: daping
 * @Date: 2021-04-06 15:23:55
 * @LastEditors: daping
 * @LastEditTime: 2021-04-13 21:17:14
-->
<template>
  <div class="form">
    <Form ref="form" :rules="rules" :formConfig="forms" :model="form" @handleReset="resetForm($event, 'form')"
      @handleSubmit="submitForm('form')" />

    <Form ref="form1" :rules="rules" :formConfig="forms1" :model="form1" @handleReset="resetForm($event, 'form1')"
      @handleSubmit="submitForm('form1')" />
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
        form1: {
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
    mounted() {
      // this.$refs.form = this.$refs.form.$refs.elform
      // this.$refs.form1 = this.$refs.form1.$refs.elform
    },
    methods: {
      resetForm(e, name) {
        console.log(this)
        this.$refs[name].$children[0].resetFields()
        console.log(this[name], name)
      },
      submitForm(name) {
        let _this = this
        this.$refs[name].$children[0].validate((v) => {
          if (v) {
            console.log(_this[name])
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
      },
      forms1() {
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