/*
 * @Author: your name
 * @Date: 2021-04-04 21:21:32
 * @LastEditTime: 2021-04-04 21:21:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-watermark\mock\index.js
 */
// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});