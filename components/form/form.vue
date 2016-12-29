<template>
  <form @submit="submit" novalidate>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      submit ($event) {
        if (this.loading) return
        this.$emit('submit', $event, this)
      }
    }
  }
</script>
