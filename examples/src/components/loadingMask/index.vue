<template>
  <div>
    <button @click="openLoadingMask">Open loading mask</button>
  </div>
</template>

<script>
  import { LoadingMask } from '@humans/loading-mask'

  export default {
    methods: {
      openLoadingMask () {
        this.loadingMaskLayer = LoadingMask.create().show()

        setTimeout(() => {
          this.destroyLoadingMask()
        }, 3000)
      },
      destroyLoadingMask () {
        if (this.loadingMaskLayer) this.loadingMaskLayer.destroy()
      }
    },
    beforeDestroy () {
      this.destroyLoadingMask()
    }
  }
</script>
