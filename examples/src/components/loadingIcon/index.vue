<template>
  <div>
    <mn-loading-icon></mn-loading-icon> loading
  </div>
</template>

<script>
  import loadingIcon from '@freshes/loadingIcon'

  export default {
    components: {
      ...loadingIcon.map()
    }
  }
</script>
