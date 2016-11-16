export default {
  install (Vue) {
    const toggleLoading = (el, binding) => {
      let div = document.createElement('div')
      div.className += `${Vue.human.cssPrefix}loading-mask`
      div.innerHTML = '<svg version="1.1" viewBox="0 0 32 32" class="icon is-spin"><path d="M29.988 14.131c-0.087-0.544-0.194-1.081-0.331-1.613-0.175-0.675-0.4-1.344-0.675-1.988-0.556-1.325-1.319-2.563-2.244-3.662-1-1.181-2.206-2.2-3.544-2.981-1.319-0.775-2.756-1.325-4.256-1.631-0.775-0.156-1.556-0.25-2.35-0.256-0.619-0.006-1.238 0.019-1.85 0.075-1.594 0.156-3.169 0.6-4.619 1.281-1.244 0.587-2.4 1.35-3.425 2.263s-1.919 1.975-2.638 3.144c-0.794 1.3-1.388 2.719-1.712 4.206-0.263 1.188-0.387 2.412-0.325 3.631 0.056 1.181 0.237 2.363 0.594 3.494 0.225 0.719 0.494 1.419 0.831 2.1 0.331 0.669 0.719 1.313 1.15 1.919 0.862 1.206 1.912 2.275 3.112 3.156 1.225 0.906 2.606 1.606 4.056 2.069 1.512 0.481 3.119 0.706 4.706 0.65 1.55-0.050 3.087-0.35 4.538-0.906 1.394-0.538 2.7-1.306 3.844-2.269 0.575-0.488 1.087-1.038 1.569-1.619 0.488-0.587 0.925-1.206 1.288-1.875 0.313-0.575 0.575-1.175 0.8-1.781 0.113-0.3 0.219-0.6 0.306-0.913 0.094-0.331 0.163-0.675 0.225-1.012 0.094-0.531 0.131-1.081 0.081-1.619-0.044 0.238-0.081 0.469-0.137 0.7-0.069 0.269-0.156 0.531-0.256 0.788-0.2 0.544-0.45 1.069-0.688 1.594-0.306 0.669-0.663 1.306-1.050 1.925-0.2 0.319-0.406 0.631-0.631 0.931s-0.481 0.587-0.738 0.869-1.069 1.075-1.688 1.525c-0.631 0.462-1.3 0.869-2.006 1.206-1.413 0.688-2.956 1.1-4.519 1.238-1.6 0.137-3.231-0.019-4.769-0.475-1.463-0.431-2.85-1.131-4.069-2.050-1.181-0.894-2.206-1.994-3.013-3.238-0.844-1.269-1.425-2.7-1.744-4.194-0.081-0.387-0.144-0.788-0.188-1.181-0.038-0.337-0.069-0.681-0.081-1.025-0.019-0.706 0.025-1.438 0.131-2.137 0.231-1.537 0.731-3.019 1.506-4.369 0.688-1.206 1.581-2.294 2.631-3.213 1.050-0.925 2.25-1.669 3.55-2.194 0.75-0.306 1.537-0.531 2.338-0.681 0.406-0.075 0.813-0.138 1.219-0.169 0.2-0.019 0.394-0.019 0.594-0.038 0.081 0 0.162 0.006 0.244 0.006 1.356-0.025 2.719 0.15 4.012 0.556 1.394 0.438 2.706 1.144 3.844 2.063 1.194 0.963 2.188 2.15 2.938 3.487 0.637 1.137 1.094 2.363 1.369 3.637 0.063 0.294 0.113 0.588 0.163 0.881 0.044 0.269 0.194 0.519 0.425 0.669 0.488 0.325 1.169 0.106 1.406-0.419 0.081-0.181 0.106-0.375 0.075-0.556z"></path></svg>'
      // Create div for el.mask
      if (binding.value) {
        // If 'mn-loading' is true
        el.mask = div
        Vue.nextTick(() => {
          if (el.isInsertDom) return
          // If is inserted, return
          if (binding.modifiers.fullscreen) {
            document.body.appendChild(el.mask)
            el.isInsertDom = true
            // If full screen, the mask will append to the body
          } else {
            el.mask.style.width = el.clientWidth + 'px'
            el.mask.style.height = el.clientHeight + 'px'
            el.style.position = 'relative'
            el.appendChild(el.mask)
            el.isInsertDom = true
            // If not full screen, the mask will append to the wrap(el)
          }
        })
      } else {
        Vue.nextTick(() => {
          removeLoading(el, binding)
          // If 'mn-loading' is false, remove loading
        })
      }
    }
    const removeLoading = (el, binding) => {
      if (el.isInsertDom) {
        let node
        let dom
        dom = (binding.modifiers.fullscreen) ? document.body : el
        dom.childNodes.forEach((item, index) => {
          if (item.className === 'loadingMask') node = index
        })
        dom.removeChild(dom.childNodes[node])
        // Search for the node of 'loadingMask', and remove it
        el.isInsertDom = false
        delete el.mask
      }
    }
    Vue.directive('mn-loading', {
      bind: function (el, binding) {
        toggleLoading(el, binding)
      },
      update: function (el, binding) {
        toggleLoading(el, binding)
      },
      unbind: function (el, binding) {
        removeLoading(el, binding)
      }
    })
  }
}
