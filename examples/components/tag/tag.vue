<template>
  <div class="section">
    <mn-card>
      <mn-card-item>Tags with text</mn-card-item>
      <mn-card-item>
        <mn-tag name="green">1</mn-tag>
        <mn-tag name="orange">99+</mn-tag>
        <mn-tag name="pink">hello</mn-tag>
        <mn-tag bg="#f2753f" text="#ffe957">world</mn-tag>
        <mn-tag bg="#eee">world</mn-tag>
        <mn-tag bg="#000">world</mn-tag>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Tags with icon</mn-card-item>
      <mn-card-item>
        <mn-tag name="green"><mn-icon name="ios-checkmark-empty"></mn-icon></mn-tag>
        <mn-tag name="orange"><mn-icon name="ios-checkmark-empty"></mn-icon></mn-tag>
        <mn-tag name="pink"><mn-icon name="ios-checkmark-empty"></mn-icon></mn-tag>
        <mn-tag bg="#f2753f" text="#ffe957"><mn-icon name="ios-checkmark-empty"></mn-icon></mn-tag>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Tags with different size</mn-card-item>
      <mn-card-item>
        <mn-tag name="purple" size="sm">123456</mn-tag>
        <mn-tag name="purple" size="md">123456</mn-tag>
        <mn-tag name="purple" size="lg">123456</mn-tag>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {

  }
</script>
