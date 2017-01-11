<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <mn-letter-body>
                <h1>Loading</h1>
                <small>Loading component</small>
              </mn-letter-body>
            </mn-letter>

            <mn-card>
              <mn-card-item>
                <mn-card-body>
                  <mn-loading-icon></mn-loading-icon> Loading
                </mn-card-body>
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
