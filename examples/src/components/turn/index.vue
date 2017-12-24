<template>
  <div>
    <h1>Turn</h1>
    <div>
      <mn-turn :data="true" v-model="models.policy"></mn-turn>
    </div>
    <h1>Value</h1>
    <div>
      {{ models.policy }}
    </div>
  </div>
</template>

<script>
  import turn from '@humans/turn'

  export default {
    components: Object.assign({}, turn),
    data () {
      return {
        models: {
          policy: undefined
        }
      }
    }
  }
</script>
