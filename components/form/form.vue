<template>
  <form @submit.prevent="submit" novalidate>
    <slot></slot>
  </form>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    props: {
      value: Object,
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
    watch: {
      models: {
        deep: true,
        handler () {
          // After first submit
          if (this.form.$checked) {
            this.validate().then().catch()
          }
        }
      }
    },
    methods: {
      submit () {
        // First using submit method, set checked true
        this.form.$checked = true

        // Validate and emit
        this.validate().then(() => {
          this.$emit('submit', true)
          this.$emit('success')
        }).catch(() => {
          this.$emit('submit', false)
          this.$emit('fail')
        })
      },
      validate () {
        return new Promise((resolve, reject) => {
          // Before validate
          this.form.$loading = true
          // this.form.$checked = true
          this.$emit('input', this.form)

          // Build validate schema
          const validator = new Schema(this.rules)

          // Async validate
          validator.validate(this.models, (errors, form) => {
            this.form.$valid = !!errors
            this.form.$loading = false
            this.$emit('input', { ...this.form, ...form })
            errors ? reject(form) : resolve(form)
          })
        })
      }
    },
    mounted () {
      // Init input
      this.$emit('input', this.form)
    }
  }
</script>
