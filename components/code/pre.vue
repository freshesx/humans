<template>
  <pre>{{ outputCode }}</pre>
</template>

<script>
  export default {
    name: 'mn-pre',
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
