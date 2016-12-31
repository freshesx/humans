import Vue from 'vue'

let icons = null

export function getMergeIcons () {
  if (!icons) {
    icons = { ...require('./icons.json'), ...Vue.human.icons }
  }

  return icons
}
