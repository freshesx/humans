<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">

            <div class="letter">
              <div class="letter-body">
                <h1>Control</h1>
                <small>input, button</small>
              </div>
            </div>

            <demo-quantity-control></demo-quantity-control>

          </div>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoQuantityControl from './quantity-control'

  export default {
    components: {
      DemoQuantityControl
    }
  }
</script>
