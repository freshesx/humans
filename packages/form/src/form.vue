<template>
  <form class="mn-form" @submit.prevent="submit" novalidate>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'mn-form',
    props: {
      validate: Object
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      submit ($event) {
        // If the form is loading, disable submit.
        if (this.loading) return

        // If validate prop is undefined, then return success.
        if (!this.validate) {
          this.emitSuccess()
          return
        }

        // Touch validate prop by vuelidate.
        this.validate.$touch()

        // Check invalid
        if (!this.validate.$invalid) {
          this.emitSuccess($event)
        } else {
          this.emitError($event)
        }
      },
      emitSuccess ($event) {
        this.$emit('submit', $event, this, true)
        this.$emit('success', $event, this)
      },
      emitError ($event) {
        this.$emit('submit', $event, this, false)
        this.$emit('error', $event, this)
      }
    }
  }
</script>
