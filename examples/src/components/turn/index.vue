<template>
  <div>
    <div>
      <h1>Turn 1</h1>
      <div>
        <mn-turn v-model="models.policy"></mn-turn>
      </div>
      <h1>Value</h1>
      <div>
        {{ models.policy }}
      </div>
    </div>

    <hr>

    <div>
      <h1>Turn 2</h1>
      <div>
        <mn-turn data="male" v-model="models.sex"></mn-turn>
      </div>
      <h1>Value</h1>
      <div>
        {{ models.sex }}
      </div>
    </div>
  </div>
</template>

<script>
  import { turn } from '@humans/turn'

  export default {
    components: {
      ...turn
    },
    data () {
      return {
        models: {
          policy: undefined,
          sex: undefined
        }
      }
    }
  }
</script>
