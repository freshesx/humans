<template>
  <mn-card>
    <mn-card-item><h5>{{ title }}</h5></mn-card-item>
    <mn-card-item v-for="types in buttons">
      <mn-card-body>
        <mn-btn :class="'has-one-margin-right'" :type="button" @click="click(button)" @error="error" :disabled="disabled" v-for="button in types">{{ button }}</mn-btn>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      click (some) {
        this.$human.toastr({ show: true, description: some })
      },
      error (some) {
        this.$human.toastr({ show: true, type: 'error', description: 'disabled 时禁用按钮' })
      }
    },
    data () {
      return {
        title: 'Buttons',
        disabled: false,
        buttons: {
          normal: [
            'primary',
            'warning',
            'error',
            'secondary',
            'inverse'
          ],
          outline: [
            'primary-outline',
            'warning-outline',
            'error-outline',
            'secondary-outline',
            'inverse-outline'
          ],
          link: [
            'primary-link',
            'warning-link',
            'error-link',
            'secondary-link',
            'inverse-link'
          ]
        }
      }
    }
  }
</script>
