<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">

      <div class="letter">
        <div class="letter-body">
          <h1>Control</h1>
          <small>input, button</small>
        </div>
      </div>

      <demo-quantity-control></demo-quantity-control>

      <demo-input-control></demo-input-control>

    </div>
  </mn-scroller>
</template>

<script>
  import DemoQuantityControl from './quantity-control'
  import DemoInputControl from './input-control'

  export default {
    components: {
      DemoQuantityControl,
      DemoInputControl
    }
  }
</script>
