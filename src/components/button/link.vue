<template>
  <a
    :href="href"
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
      to: {
        type: String,
        default: '/components/radio'
      }
    },
    computed: {
      href () {
        if (this.$router) {
          const { href } = this.$router.resolve(this.to)
          return href
        } else {
          return this.to
        }
      }
    }
  }
</script>
