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
            <demo-slide-bar></demo-slide-bar>
          </div>
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
