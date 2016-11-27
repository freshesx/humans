<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Loading</h1>
              <small>Loading component</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>
                <mn-loading-icon></mn-loading-icon> Loading
              </mn-card-item>
            </mn-card>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  export default {
  }
</script>
