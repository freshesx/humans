<template>
  <div class="mn-datetime-picker" @click="onClick">
    {{ display }}
  </div>
</template>

<script>
  export default {
    name: 'mn-datetime-picker',
    props: {
      display: null
    },
    methods: {
      onClick (event) {
        this.$emit('openPicker', event, this)
      }
    }
  }
</script>
