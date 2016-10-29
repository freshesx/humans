<template>
  <div :class="[cssPrefix + 'col', queryClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}`
      },
      queryClass () {
        let queries = this.query.split(' ')
        let classes = []

        queries.forEach(item => {
          classes.push({ [`is-${item}`]: true })
        })

        return classes
      }
    }
  }
</script>
