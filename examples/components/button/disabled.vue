<template>
  <mn-card>
    <mn-card-item>Button disabled</mn-card-item>
    <mn-card-item>
      <mn-card-body>
        <mn-btn type="primary" disabled margin @click="click" @error="error">Confirm</mn-btn>
        <mn-btn type="warning" disabled margin>Are you sure?</mn-btn>
        <mn-btn type="error" disabled margin>Cancel</mn-btn>
        <mn-btn type="secondary" disabled margin>Help</mn-btn>
        <mn-btn type="inverse" disabled margin>Off</mn-btn>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      click () {
        this.$human.toastr({ show: true, type: 'primary', description: '可用该功能' })
      },
      error () {
        this.$human.toastr({ show: true, type: 'error', description: '禁用该功能' })
      }
    }
  }
</script>
