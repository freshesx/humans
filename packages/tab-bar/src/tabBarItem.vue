<template>
  <div class="mn-tab-bar-item" :class="{ 'is-active': active }" :style="{ width: computedWidth }" @click="click">
    <slot>
      <div class="mn-tab-bar-badge" :class="{ 'is-more': badge && badge > 9 }"
        v-if="badge && badge > 0">{{ badge && badge <= 9 ? badge : '' }}</div>
      <div class="mn-tab-bar-icon">
        <mn-icon :name="icon"></mn-icon>
      </div>
      <div class="mn-tab-bar-title">{{ title }}</div>
    </slot>
  </div>
</template>

<script>
  import icon from '@humans/icon'

  export default {
    components: Object.assign({}, icon),
    name: 'mn-tab-bar-item',
    props: {
      icon: null,
      title: String,
      active: Boolean,
      badge: {
        type: Number
      }
    },
    methods: {
      click (event) {
        this.$emit('click', event, this)
      }
    },
    computed: {
      computedWidth () {
        let length = this.$parent.childrenLength !== 0
          ? this.$parent.childrenLength
          : 1
        return `${100 / length}%`
      }
    }
  }
</script>
