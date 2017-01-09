<template>
  <a
    :href="computedHref"
    :class="[`${cssPrefix}btn`, classes]"
    :title="title"
    @click="click">
    <mn-loading-icon :class="'has-one-margin-right'" v-if="loading"></mn-loading-icon>
    <mn-icon :class="'has-one-margin-right'" :name="icon" v-if="icon && !loading"></mn-icon>
    <slot></slot>
  </a>
</template>

<script>
  import mixin from './mixin'

  export default {
    name: 'mn-link',
    mixins: [ mixin ],
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
  }
</script>
