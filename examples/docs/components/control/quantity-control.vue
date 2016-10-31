<template>
  <mn-card>
    <mn-card-item>
      <h5 slot="body">Quantity Control</h5>
      <mn-quantity-control :min="3" :max="6"></mn-quantity-control>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  h5{
    margin-bottom: 20px;
  }
</style>
