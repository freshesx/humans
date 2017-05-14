<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Alert</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="warning" block @click="onOpenAlert">Open alert</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'
  import Alert from 'vue-human/utils/Alert'

  export default {
    components: {
      ...core.map(),
      page
    },
    methods: {
      onOpenAlert () {
        Alert.create().show()
      }
    }
  }
</script>
