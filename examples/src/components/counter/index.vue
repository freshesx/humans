<template>
  <div>
    <mn-counter v-model="models.counter" :min="5"></mn-counter>
  </div>
</template>

<script>
  import { counter } from '@humans/counter'

  export default {
    components: {
      ...counter
    },
    data () {
      return {
        icons: {
          home: require('@freshes/icons/js/ios/home')
        },
        models: {
          counter: 2
        }
      }
    }
  }
</script>
