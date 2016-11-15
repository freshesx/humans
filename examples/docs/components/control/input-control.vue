<template>
  <mn-card>
    <mn-card-item>Input Control</mn-card-item>
    <mn-card-item>
      <mn-input></mn-input>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      change: function (value) {
        console.log(value)
      }
    }
  }
</script>
