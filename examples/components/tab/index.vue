<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Tabs</h1>
              <small>tab</small>
            </mn-letter>
            <demo-tab></demo-tab>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoTab from './tab'

  export default {
    components: {
      DemoTab
    }
  }
</script>
