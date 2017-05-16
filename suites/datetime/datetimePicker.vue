<template>
  <div class="mn-datetime-picker" @click="onClick">
    {{ display }}
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-datetime-picker',
    props: {
      display: null
    },
    methods: {
      onClick (event) {
        this.$emit('openPicker', event, this)
      }
    }
  })
</script>

<style lang="scss">
  .mn-datetime-picker {}
</style>
