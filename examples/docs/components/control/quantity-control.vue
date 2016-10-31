<template>
  <mn-card>
    <mn-card-item>
      <h5 slot="body">Quantity Control</h5>
      <mn-quantity-control :min="3" :max="16" @change="change"></mn-quantity-control>
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

<style scoped>
  h5{
    margin-bottom: 20px;
  }
</style>
