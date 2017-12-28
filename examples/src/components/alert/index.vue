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
        console.log('hai')
      }
    },
    beforeDestroy () {
      if (this.alertLayer) this.alertLayer.destroy()
    }
  }
</script>
