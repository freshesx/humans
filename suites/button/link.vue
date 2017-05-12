<template>
  <a
    :href="computedHref"
    class="mn-btn"
    :class="classes"
    :title="title"
    @click="click">
    <mn-loading-icon :class="'has-one-margin-right'" v-if="loading"></mn-loading-icon>
    <mn-icon :class="'has-one-margin-right'" :name="icon" v-if="icon && !loading"></mn-icon>
    <slot></slot>
  </a>
</template>

<script>
  import Element from '../../utils/Element'
  import Button from './button'

  export default new Element({
    name: 'mn-link',
    mixins: [ Button ],
    props: {
      href: {
        type: String
      },
      to: {
        type: String
      }
    },
    computed: {
      computedHref () {
        if (this.to && this.$router) {
          const { href } = this.$router.resolve(this.to)
          return href
        } else {
          return this.href || ''
        }
      }
    }
  })
</script>
