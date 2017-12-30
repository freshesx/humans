<template>
  <div>
    <button @click="openConfirm">Open confirm</button>
  </div>
</template>

<script>
  import { Confirm } from '@humans/confirm'

  export default {
    methods: {
      openConfirm () {
        this.confirmLayer = Confirm.create().show()
      }
    },
    beforeDestroy () {
      if (this.confirmLayer) this.confirmLayer.destroy()
    }
  }
</script>
