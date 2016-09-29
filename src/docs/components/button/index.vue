<template>
  <div class="section" transition="is-slide-left">

    <div class="letter">
      <div class="letter-body">
        <h1 class="letter-title">Button</h1>
      </div>
    </div>

    <demo-normal></demo-normal>

    <demo-block></demo-block>

    <demo-size></demo-size>
  </div>
</template>

<script>
  import DemoNormal from './normal'
  import DemoBlock from './block'
  import DemoSize from './size'

  export default {
    components: {
      DemoNormal,
      DemoBlock,
      DemoSize
    }
  }
</script>
