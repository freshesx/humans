<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">
            <mn-letter>
              <h1>Slide Box</h1>
              <small></small>
            </mn-letter>
            <demo-slide-box></demo-slide-box>
          </div>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoSlideBox from './slidebox'

  export default {
    components: {
      DemoSlideBox
    }
  }
</script>
