<template>
  <div>
    <button @click="openAlert">Open alert</button>
  </div>
</template>

<script>
  import { Alert } from '@humans/alert'

  export default {
    methods: {
      openAlert () {
        this.alertLayer = Alert.create().show()
      }
    },
    beforeDestroy () {
      if (this.alertLayer) this.alertLayer.destroy()
    }
  }
</script>
