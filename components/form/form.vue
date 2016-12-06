<template>
  <form @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    props: {
      value: [Array, Object],
      models: Object,
      rules: Object
    },
    data () {
      return {
        form: {
          $loading: false,
          $valid: false,
          $checked: false
        }
      }
    },
    methods: {
      submit () {
        // Before validate
        this.form.$loading = true
        this.form.$checked = true
        this.$emit('input', this.form)

        // Build validate schema
        const validator = new Schema(this.rules)

        // Async validate
        validator.validate(this.models, (errors, form) => {
          if (errors) {
            // Validate error
            this.form.$loading = false
            this.form.$valid = false
            this.$emit('input', { ...this.form, ...form })
          } else {
            // Validate success, and emit submit
            this.form.$loading = false
            this.form.$valid = true
            this.$emit('input', { ...this.form, ...form })
            this.$emit('submit')
          }
        })
      }
    },
    mounted () {
      // Init input
      this.$emit('input', this.form)
    }
  }
</script>
