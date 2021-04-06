/*
 * @Author: your name
 * @Date: 2021-04-04 21:23:09
 * @LastEditTime: 2021-04-06 13:26:40
 * @LastEditors: daping
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\mock\demoList.js
 */
const demoList = [{
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
  id: 3,
  name: '索拉里皮',
  age: '24',
  job: '后端工程师'
},
{
  id: 4,
  name: '闫女士',
  age: '24',
  job: 'UI设计师'
}]

export default {
  'get|/parameter/query': option => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    }
  }
}
