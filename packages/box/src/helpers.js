/**
 * The function must be call by box VueComponent this.
 * Check box component slots to find MnScroller VNode.
 * @private
 */
export function getScrollerVNode () {
  if (!this.$slots || !this.$slots.default) return

  // Filter out MnScroller
  const vnodes = this.$slots.default.filter(vnode => {
    const tag = vnode.componentOptions && vnode.componentOptions.tag
    return this.scrollerTag.indexOf(tag) > -1
  })

  if (vnodes.length === 0) return

  // We only support one MnScroller in the box component.
  if (vnodes.length > 1) {
    throw new Error('The box default slot only support one MnScroller.')
  }

  return vnodes[0]
}
