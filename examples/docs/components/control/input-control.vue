<template>
  <mn-card>
    <mn-card-item>Input Control</mn-card-item>
    <mn-card-item>
      <mn-input v-model="value"></mn-input>
      <p>{{ value }}</p>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      change: function (value) {
        console.log(value)
      }
    },
    data () {
      return {
        value: ''
      }
    }
  }
</script>
