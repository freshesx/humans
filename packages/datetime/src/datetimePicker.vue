<template>
  <div class="mn-datetime-picker" @click="onClick">
    {{ display }}
  </div>
</template>

<script>
  export default {
    name: 'mn-datetime-picker',
    props: {
      /**
       * Display string
       */
      display: null
    },
    methods: {
      onClick (event) {
        /**
         * @event openPicker
         * @property {Event} event - DOM Event
         * @property {VueComponent} - datetimePicker self
         */
        this.$emit('openPicker', event, this)
      }
    }
  }
</script>
