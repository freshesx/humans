<template>
  <div>
    <mn-counter v-model="models.counter" :min="5"></mn-counter>
  </div>
</template>

<script>
  import counter from '@humans/counter'

  export default {
    components: Object.assign({}, counter),
    data () {
      return {
        icons: {
          home: require('vue-human-icons/js/ios/home')
        },
        models: {
          counter: 2
        }
      }
    }
  }
</script>
