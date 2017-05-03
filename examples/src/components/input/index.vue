<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        Username
      </mn-card-prefix>
      <mn-card-body>
        <mn-input v-model="models.username" placeholder="Username"></mn-input>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import cardSuit from 'vue-human/components/card'
  import inputSuit from 'vue-human/components/input'

  export default {
    components: {
      ...cardSuit.map(),
      ...inputSuit.map()
    },
    data () {
      return {
        models: {
          username: undefined
        }
      }
    }
  }
</script>
