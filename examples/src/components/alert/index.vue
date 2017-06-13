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
  import Alert from 'vue-human/utils/Alert'

  export default {
    methods: {
      onOpenAlert () {
        this.alertLayer = Alert.create().show()
      }
    },
    beforeDestroy () {
      if (this.alertLayer) this.alertLayer.destroy()
    }
  }
</script>
