<template>
  <div>
    <div>
      <h1>Tags with text</h1>
      <div>
        <mn-tag name="green">1</mn-tag>
        <mn-tag name="orange">99+</mn-tag>
        <mn-tag name="pink">hello</mn-tag>
        <mn-tag bg="#f2753f" text="#ffe957">world</mn-tag>
        <mn-tag bg="#eee">world</mn-tag>
        <mn-tag bg="#000">world</mn-tag>
      </div>
    </div>
    <div>
      <h1>Tags with icon</h1>
      <div>
        <mn-tag name="green"><mn-icon :name="checkmark"></mn-icon></mn-tag>
        <mn-tag name="orange"><mn-icon :name="checkmark"></mn-icon></mn-tag>
        <mn-tag name="pink"><mn-icon :name="checkmark"></mn-icon></mn-tag>
        <mn-tag bg="#f2753f" text="#ffe957"><mn-icon :name="checkmark"></mn-icon></mn-tag>
      </div>
    </div>
    <div>
      <h1>Tags with different size</h1>
      <div>
        <mn-tag name="purple" size="sm">hello</mn-tag>
        <mn-tag name="purple" size="md">hello</mn-tag>
        <mn-tag name="purple" size="lg">hello</mn-tag>
      </div>
    </div>
  </div>
</template>

<script>
  import { tag } from '@humans/tag'
  import { icon } from '@humans/icon'

  export default {
    components: {
      ...tag,
      ...icon
    },
    data () {
      return {
        checkmark: require('@freshes/icons/js/ios/checkmark-empty')
      }
    }
  }
</script>
