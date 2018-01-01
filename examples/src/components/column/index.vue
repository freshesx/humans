<template>
  <div>
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
  </div>
</template>

<script>
  import section from '@humans/section'
  import card from '@humans/card'
  import column from '@humans/column'

  export default {
    components: Object.assign({}, section, card, column)
  }
</script>
