<template>

  <mn-card>
    <mn-card-item>
      <mn-card-prefix><mn-icon name="ios-navigate"></mn-icon></mn-card-prefix>
      <mn-card-body>
        <h5>Card items</h5>
      </mn-card-body>
    </mn-card-item>

    <mn-card-item>
      <mn-card-body>Item title</mn-card-body>
      <mn-card-suffix muted>description</mn-card-suffix>
    </mn-card-item>

    <mn-card-item type="link">
      <mn-card-prefix><mn-loading-icon></mn-loading-icon></mn-card-prefix>
      <mn-card-body>Item title</mn-card-body>
      <mn-card-suffix muted>description</mn-card-suffix>
    </mn-card-item>

    <mn-card-item type="arrow">
      <mn-card-prefix><mn-loading-icon></mn-loading-icon></mn-card-prefix>
      <mn-card-body>Item title</mn-card-body>
      <mn-card-suffix>
        <mn-card-action>
          <mn-btn type="primary" size="sm">Action</mn-btn>
        </mn-card-action>
      </mn-card-suffix>
    </mn-card-item>
  </mn-card>

</template>

<script>
  export default {
  }
</script>
