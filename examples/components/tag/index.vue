<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Tag</h1>
              <small>Tag</small>
            </mn-letter>
            <demo-tag></demo-tag>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoTag from './tag'

  export default {
    components: {
      DemoTag
    }
  }
</script>
