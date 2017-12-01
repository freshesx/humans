<template>
  <a
    :href="computedHref"
    class="mn-btn"
    :class="classes"
    :title="title"
    @click="click">
    <mn-icon :name="icon" :loading="loading" v-if="icon || loading"></mn-icon>
    <!-- Link btn text contents -->
    <slot></slot>
  </a>
</template>

<script>
  import btn from '@humans/btn'

  /**
   * Link component from btn component
   */
  export default {
    name: 'mn-link',
    mixins: [ btn['mn-btn'] ],
    props: {
      /**
       * Href string
       */
      href: {
        type: String
      },
      /**
       * $router Object or String
       */
      to: {
        type: [String, Object]
      }
    },
    computed: {
      // If has to and $router, parse href. Or use string href.
      computedHref () {
        if (this.to && this.$router) {
          const { href } = this.$router.resolve(this.to)
          return href
        } else {
          return this.href || 'javascript:void(0);'
        }
      }
    }
  }
</script>
