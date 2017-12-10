<template>
  <div style="width: 100vw; height: 100vh;">
    <mn-assistive-bar></mn-assistive-bar>
  </div>
</template>

<script>
  import assistiveBar from '@humans/assistiveBar'

  export default {
    components: Object.assign({}, assistiveBar)
  }
</script>
