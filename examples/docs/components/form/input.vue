<template>
  <mn-card>
    <mn-card-item>Input Control</mn-card-item>
    <mn-card-item>
      <mn-input v-model="value" clearInput></mn-input>
      <p class="example">{{ value }}</p>
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

<style scoped>
  .example{
    font-size: 0.8rem;
    color: #999;
  }
</style>
