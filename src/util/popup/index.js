import Vue from 'vue'
import storage from './storage'

/**
 * 将组件配置初始化为 popup 弹层
 * @param  {Object}     componentConfig
 * @param  {Object}     data
 * @return {Object}     VueComponent
 */
export default function popup (componentConfig, data) {
  // Instance component
  const component = new (Vue.extend(componentConfig))({
    el: document.createElement('div')
  })

  // Change component data by data
  for (var variable in data) {
    if (data.hasOwnProperty(variable) && component.hasOwnProperty(variable) && variable !== 'close') {
      component[variable] = data[variable]
    }
  }

  // When listen 'close' event, set show is false
  component.$on('close', () => {
    component.show = false
  })

  // Add this component to popup storage
  storage.addItem(component)

  return component
}
