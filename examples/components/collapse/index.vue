<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Collapse</h1>
              <small>Collapse</small>
            </mn-letter>
            <demo-collapse></demo-collapse>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoCollapse from './collapse'

  export default {
    components: {
      DemoCollapse
    }
  }
</script>
