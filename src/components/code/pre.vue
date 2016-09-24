<template>
  <pre>{{ code }}</pre>
</template>

<script>
  export default {
    props: {
      code: {
        type: String,
        coerce: val => {
          console.log(val)
          return val.trim()
        }
      }
    }
  }
</script>
