<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">
            <div class="letter">
              <div class="letter-body">
                <h1>Rate</h1>
                <small>icon</small>
              </div>
            </div>

            <demo-rate></demo-rate>

          </div>
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
