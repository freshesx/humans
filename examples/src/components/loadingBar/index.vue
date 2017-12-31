<template>
  <div>
    <button @click="openLoadingBar">Open loading bar</button>
  </div>
</template>

<script>
  import { LoadingBar } from '@humans/loading-bar'

  const loadingBar = new LoadingBar()

  export default {
    methods: {
      openLoadingBar () {
        loadingBar.finish(70)

        setTimeout(() => {
          loadingBar.finish()
        }, 1000)
      }
    }
  }
</script>
