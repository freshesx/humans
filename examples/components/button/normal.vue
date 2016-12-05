<template>
  <mn-card>
    <mn-card-item>Button</mn-card-item>
    <mn-card-item>
      <mn-btn type="primary" @click.native.prevent="say('Hi')" margin><mn-icon name="navicon-round"></mn-icon> Confirm</mn-btn>
      <mn-btn type="warning" margin>Are you sure?</mn-btn>
      <mn-btn type="error" margin>Cancel</mn-btn>
      <mn-btn type="secondary" margin>Help</mn-btn>
      <mn-btn type="inverse" loading margin></mn-btn>
      <mn-btn type="primary-link" margin>Link</mn-btn>
      <mn-btn type="secondary-link" margin>Link</mn-btn>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      say (some) {
        window.alert(some)
      }
    }
  }
</script>
