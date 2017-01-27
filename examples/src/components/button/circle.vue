<template>
  <mn-card>
    <mn-card-item>Circle Button</mn-card-item>
    <mn-card-item>
      <mn-card-body>
        <mn-btn type="primary" circle>hi</mn-btn>
        <mn-btn type="warning" :icon="iosArrowDown" circle></mn-btn>
        <mn-btn type="error" :icon="iosArrowDown" circle></mn-btn>
        <mn-btn type="error" :icon="iosArrowDown" circle size="sm"></mn-btn>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import iosArrowDown from 'vue-human-icons/js/ios/arrow-down'

  export default {
    data () {
      return {
        iosArrowDown
      }
    }
  }
</script>
