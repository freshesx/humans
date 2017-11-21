<template>
  <div>
    <mn-loading-icon></mn-loading-icon> loading
  </div>
</template>

<script>
  import loadingIcon from '@freshes/loadingIcon'
  import '@freshes/loadingIcon/dist/main.css'

  export default {
    components: {
      ...loadingIcon.map()
    }
  }
</script>
