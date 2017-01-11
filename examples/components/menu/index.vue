<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Menu</h1>
              <small>Menu</small>
            </mn-letter>
            <demo-menu></demo-menu>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoMenu from './menu'

  export default {
    components: {
      DemoMenu
    }
  }
</script>
