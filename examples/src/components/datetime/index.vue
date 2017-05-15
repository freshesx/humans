<template>
  <div>
    <button @click="onClick">Datetime</button>
  </div>
</template>

<script>
  import Datetime from 'vue-human/utils/Datetime'

  export default {
    methods: {
      onClick () {
        Datetime.create().show()
      }
    }
  }
</script>
