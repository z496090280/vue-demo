/*
 * @Author: lee
 * @Date: 2022-06-12 21:55:50
 * @LastEditTime: 2022-06-12 22:32:46
 */
import Vue from 'vue'
import Img from './Img.vue'

const Component = Vue.extend(Img)
let instance = null

function ImgBox(option) {
  if (!instance) {
    instance = new Component({
      el: document.createElement('div'),
      data() {
        return option
      }
    })
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.show = true
    })
  } else {
    instance.show = true
    Object.assign(instance, option)
  }
}

ImgBox.close = function () {
  if (instance) {
    instance.show = false
  }
}

export default {
  install() {
    Vue.prototype.$imgBox = ImgBox
  }
}