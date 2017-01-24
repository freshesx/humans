<template>
  <mn-card>
    <mn-card-item><h5>{{ title }}</h5></mn-card-item>
    <mn-card-item v-for="types in buttons">
      <mn-card-body>
        <component
          :is="buttonName"
          :icon="iosAnalytics"
          margin
          :class="'has-one-margin-right'"
          :type="button"
          :disabled="disabled"
          @click="click"
          @error="error"
          v-for="button in types">{{ button }}</component>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import message from 'vue-human/util/message'
  import iosAnalytics from 'vue-human-icons/js/ios/analytics'

  export default {
    methods: {
      click ($event, button) {
        button.loading = true
        setTimeout(() => {
          message({ show: true, description: 'Testing' })
          button.loading = false
        }, 3000)
      },
      error () {
        message({ show: true, type: 'error', description: 'disabled 时禁用按钮' })
      }
    },
    data () {
      return {
        iosAnalytics,
        buttonName: 'mn-btn',
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
