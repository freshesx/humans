<template>
  <mn-card>
    <mn-card-item><h5>Button</h5></mn-card-item>
    <mn-card-item v-for="types in buttons">
      <mn-card-body>
        <mn-btn :class="'has-one-margin-right'" :type="button" @click="click(button)" v-for="button in types">{{ button }}</mn-btn>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      click (some) {
        this.$human.toastr({ show: true, description: some })
      }
    },
    data () {
      return {
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
