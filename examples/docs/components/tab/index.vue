<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">
            <div class="letter">
              <div class="letter-body">
                <h1>Tabs</h1>
                <small>tab</small>
              </div>
            </div>

            <demo-tab></demo-tab>

          </div>
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
