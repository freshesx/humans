<template>
  <mn-card>
    <mn-card-item>Button</mn-card-item>
    <mn-card-item>
      <mn-btn type="primary" @click.native.prevent="say('Hi')"><mn-icon name="navicon-round"></mn-icon> Confirm</mn-btn>
      <mn-btn type="warning">Are you sure?</mn-btn>
      <mn-btn type="error">Cancel</mn-btn>
      <mn-btn type="secondary">Help</mn-btn>
      <mn-btn type="inverse"><mn-load></mn-load></mn-btn>
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
