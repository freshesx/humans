<template>
  <div>
    <mn-input v-model="models.username"
      placeholder="Username"
      size="lg"
    ></mn-input>

    <mn-input type="password"
       v-model="models.password"
       placeholder="Password"
       size="lg"
    ></mn-input>

    <mn-input v-model="models.code"
      placeholder="Code"
      size="lg"
      hide-clear
    ></mn-input>
  </div>
</template>

<script>
  import input from '@humans/input'

  export default {
    components: Object.assign({}, input),
    data () {
      return {
        models: {
          username: undefined,
          password: undefined,
          code: undefined
        }
      }
    }
  }
</script>
