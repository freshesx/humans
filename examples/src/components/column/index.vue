<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Column <small>12 列布局</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="4">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="4, , -1">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好2</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="4">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好3</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="2, 2" desktop="6, 6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="8" desktop="12">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="2" desktop="6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="12" desktop="6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="6" tablet="4" desktop="3" v-for="item in 10" :key="item">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      page
    }
  }
</script>
