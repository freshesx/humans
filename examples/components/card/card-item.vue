<template>

  <mn-card>
    <mn-card-item>
      <h5 slot="body">Card items</h5>
      <mn-icon slot="addon" name="ios-navigate"></mn-icon>
    </mn-card-item>
    <mn-card-item>
      <template slot="body">Item title</template>
      <template slot="help">description</template>
    </mn-card-item>
    <mn-card-item type="link">
      <mn-icon slot="addon" name="compass"></mn-icon>
      <template slot="body">Item title</template>
      <template slot="help">description</template>
    </mn-card-item>
  </mn-card>

</template>

<script>
  export default {
  }
</script>
