<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Tag</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
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
          <mn-tag name="green"><mn-icon :name="checkmark"></mn-icon></mn-tag>
          <mn-tag name="orange"><mn-icon :name="checkmark"></mn-icon></mn-tag>
          <mn-tag name="pink"><mn-icon :name="checkmark"></mn-icon></mn-tag>
          <mn-tag bg="#f2753f" text="#ffe957"><mn-icon :name="checkmark"></mn-icon></mn-tag>
        </mn-card-item>
      </mn-card>
      <mn-card>
        <mn-card-item>Tags with different size</mn-card-item>
        <mn-card-item>
          <mn-tag name="purple" size="sm">hello</mn-tag>
          <mn-tag name="purple" size="md">hello</mn-tag>
          <mn-tag name="purple" size="lg">hello</mn-tag>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import tag from 'vue-human/suites/tag'

  export default {
    components: {
      ...tag.map()
    },
    data () {
      return {
        checkmark: require('vue-human-icons/js/ios/checkmark-empty')
      }
    }
  }
</script>
