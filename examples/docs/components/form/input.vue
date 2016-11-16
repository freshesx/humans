<template>
  <mn-card-wrapper>
    <strong slot="header">Input</strong>
    <mn-card slot="body">
      <mn-card-item>
        <mn-input v-model="value" clearInput></mn-input>
        <p class="example">{{ value }}</p>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
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
