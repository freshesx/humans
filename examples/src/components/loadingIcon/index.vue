<template>
  <div>
    <mn-loading-icon></mn-loading-icon> loading
  </div>
</template>

<script>
  import loadingIcon from '@packages/loadingIcon/dist'
  import '@packages/loadingIcon/dist/index.css'

  export default {
    components: {
      ...loadingIcon.map()
    }
  }
</script>
