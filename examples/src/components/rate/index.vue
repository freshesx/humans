<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Rate</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-section-note>Read only rate component. Support for half-star.</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-rate :default="3.5" disabled></mn-rate>
            <mn-rate :default="5" disabled></mn-rate>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-section>
      <mn-section-note>Clickable rate</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-rate></mn-rate>
            <mn-rate
              color="rgb(255, 45, 85)"
              :default="3.5"
              @change="show"
              @select="select"
              ></mn-rate>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import rate from 'vue-human/suites/rate'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...rate.map(),
      page
    },
    methods: {
      show (val) {
        console.log(val)
      },
      select (val) {
        console.log('selected: ', val)
      }
    }
  }
</script>
