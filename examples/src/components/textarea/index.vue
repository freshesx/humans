<template>
  <div>
    <mn-textarea v-model="models.note"
      placeholder="Add some note"
      :max-length="300"
    ></mn-textarea>
  </div>
</template>

<script>
  import { textarea } from '@humans/textarea'

  export default {
    components: {
      ...textarea
    },
    data () {
      return {
        models: {
          note: undefined
        }
      }
    }
  }
</script>
