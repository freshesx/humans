<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Button</div>
    </div>
    <div class="card-block">
      <mn-btn type="primary" @click.native.prevent="say('Hi')"><mn-icon name="navicon-round"></mn-icon> Confirm</mn-btn>
      <mn-btn type="warning">Are you sure?</mn-btn>
      <mn-btn type="error">Cancel</mn-btn>
      <mn-btn type="secondary">Help</mn-btn>
      <mn-btn type="inverse" loading>Off</mn-btn>
    </div>
  </div>
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
