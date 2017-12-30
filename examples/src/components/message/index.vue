<template>
  <div>
    <button @click="openMessage">Open message</button>
  </div>
</template>

<script>
  import { Message } from '@humans/message'

  export default {
    methods: {
      openMessage () {
        this.messageLayer = Message.create().show()
      }
    },
    beforeDestroy () {
      if (this.messageLayer) this.messageLayer.destroy()
    }
  }
</script>
