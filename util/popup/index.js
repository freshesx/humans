import Vue from 'vue'
import storage from './storage'

/**
 * 将组件配置初始化为 popup 弹层
 * @param  {Object}     Component
 * @param  {Object}     propsData
 * @return {Object}     VueComponent
 */
export default function popup (Component, propsData) {
  // Build Component
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ el: document.createElement('div') })

  // Change vm props by propsData
  for (var variable in propsData) {
    if (propsData.hasOwnProperty(variable) && vm.hasOwnProperty(variable) && variable !== 'close') {
      vm[variable] = propsData[variable]
    }
  }

  // When listen 'close' event, set show is false
  vm.$on('close', () => {
    vm.show = false
  })

  // Add this vm to popup storage
  storage.addItem(vm)

  return vm
}
