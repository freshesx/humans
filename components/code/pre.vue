<template>
  <pre>{{ outputCode }}</pre>
</template>

<script>
  export default {
    props: {
      code: {
        type: String
      }
    },
    computed: {
      outputCode () {
        return this.code.trim()
      }
    }
  }
</script>
