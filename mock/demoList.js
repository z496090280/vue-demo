/*
 * @Author: your name
 * @Date: 2021-04-04 21:23:09
 * @LastEditTime: 2021-04-04 21:41:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\mock\demoList.js
 */
let demoList = [{
  id: 1,
  name: '索拉里斯',
  age: '31',
  job: '前端工程师'
}, {
  id: 2,
  name: '索拉力王',
  age: '29',
  job: '运维工程师'
}, {
  id: 2,
  name: '索拉里皮',
  age: '24',
  job: '后端工程师'
}]

export default {
  'get|/parameter/query': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}