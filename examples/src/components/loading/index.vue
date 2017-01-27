<template>
  <docs-layout-page>
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
      <mn-card>
        <mn-card-item>
          <mn-card-body>Full screen loading</mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn type="primary" block @click.native="isLoading()">Loading</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </docs-layout-page>
</template>

<script>
  import loading from 'vue-human/util/loading'
  export default {
    methods: {
      isLoading: function () {
        const loadingComponent = loading()
        loadingComponent.show = true
        // show the loading component
        setTimeout(() => {
          loadingComponent.close()
        }, 2000)
        // the loading component will be automatically close in 2s
      }
    }
  }
</script>
