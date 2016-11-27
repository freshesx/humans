<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Rate</h1>
              <small>icon</small>
            </mn-letter>
            <demo-rate></demo-rate>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoRate from './rate'

  export default {
    components: {
      DemoRate
    }
  }
</script>
