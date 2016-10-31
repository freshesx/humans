<template>
  <mn-card>
    <mn-card-item>
      <h5 slot="body">Labels with text</h5>
      <mn-label type="primary">标签一</mn-label>
      <mn-label type="warning">标签二</mn-label>
      <mn-label type="error">标签三</mn-label>
      <mn-label type="secondary">标签四</mn-label>
      <mn-label type="inverse">标签五</mn-label>
    </mn-card-item>
    <mn-card-item>
      <h5 slot="body">Labels with icon</h5>
      <mn-label type="primary"><mn-icon name="pricetags"></mn-icon></mn-label>
      <mn-label type="warning"><mn-icon name="pricetags"></mn-icon></mn-label>
      <mn-label type="error"><mn-icon name="pricetags"></mn-icon></mn-label>
      <mn-label type="secondary"><mn-icon name="pricetags"></mn-icon></mn-label>
      <mn-label type="inverse"><mn-icon name="pricetags"></mn-icon></mn-label>
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
