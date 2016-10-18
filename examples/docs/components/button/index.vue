<template>
  <div class="section">

    <div class="letter">
      <div class="letter-body">
        <h1>Button</h1>
        <small>btn, block, loading, disabled</small>
      </div>
    </div>

    <demo-normal></demo-normal>

    <demo-block></demo-block>

    <demo-size></demo-size>

    <demo-disabled></demo-disabled>

    <demo-active></demo-active>

    <demo-outline></demo-outline>
  </div>
</template>

<script>
  import DemoNormal from './normal'
  import DemoBlock from './block'
  import DemoSize from './size'
  import DemoDisabled from './disabled'
  import DemoActive from './active'
  import DemoOutline from './outline'

  export default {
    components: {
      DemoNormal,
      DemoBlock,
      DemoSize,
      DemoDisabled,
      DemoActive,
      DemoOutline
    }
  }
</script>
