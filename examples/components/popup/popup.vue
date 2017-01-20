<template>
  <mn-popup :show="show" @close="close" animation="slideInDown">
    <mn-popup-card class="has-one-margin-bottom">
      <mn-card-item>
        <mn-card-body class="has-center-text">
          <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
        </mn-card-body>
      </mn-card-item>
      <mn-card-btns>
        <button class="has-red-text">Delete Photo</button>
      </mn-card-btns>
    </mn-popup-card>
    <mn-popup-card class="has-none-margin-bottom">
      <mn-card-btns>
        <button class="has-blue-text" @click="close"><strong>Cancel</strong></button>
      </mn-card-btns>
    </mn-popup-card>
  </mn-popup>
</template>

<script>
  export default {
    props: {
      show: Boolean
    },
    methods: {
      close () {
        console.log('close')
        this.$emit('close')
      }
    }
  }
</script>
