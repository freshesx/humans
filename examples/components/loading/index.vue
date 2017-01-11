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
                <mn-card-body>
                  <mn-loading-icon></mn-loading-icon> Loading
                </mn-card-body>
              </mn-card-item>
            </mn-card>
            <mn-card>
              <mn-card-item>
                <mn-card-body>
                  <mn-btn type="primary" block @click.native="isLoading()">加载</mn-btn>
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
  import loading from 'vue-human/util/loading'
  export default {
    methods: {
      isLoading: function () {
        loading({ show: true })
      }
    }
  }
</script>
