<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Button</h1>
              <small>btn, block, loading, disabled</small>
            </mn-letter>
            <demo-normal></demo-normal>
            <demo-disabled></demo-disabled>
            <demo-link></demo-link>
            <demo-block></demo-block>
            <demo-size></demo-size>
            <demo-active></demo-active>
            <demo-circle></demo-circle>
            <demo-outline></demo-outline>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoNormal from './normal'
  import DemoLink from './link'
  import DemoBlock from './block'
  import DemoSize from './size'
  import DemoDisabled from './disabled'
  import DemoActive from './active'
  import DemoCircle from './circle'
  import DemoOutline from './outline'

  export default {
    components: {
      DemoNormal,
      DemoLink,
      DemoBlock,
      DemoSize,
      DemoDisabled,
      DemoActive,
      DemoCircle,
      DemoOutline
    }
  }
</script>
