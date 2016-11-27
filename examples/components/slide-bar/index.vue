<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Slide Box</h1>
              <small></small>
            </mn-letter>
            <demo-slide-bar></demo-slide-bar>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoSlideBar from './slide-bar'

  export default {
    components: {
      DemoSlideBar
    }
  }
</script>
