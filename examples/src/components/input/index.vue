<template>
  <div>
    <div style="background: #fff; margin-bottom: 2rem;">
      <mn-input v-model="models.username"
        placeholder="Username"
      ></mn-input>
    </div>

    <div style="background: #fff; margin-bottom: 2rem;">
      <mn-input v-model="models.username"
        size="sm"
        placeholder="Username"
      ></mn-input>
    </div>

    <mn-input type="password"
       v-model="models.password"
       placeholder="Password"
    ></mn-input>

    <mn-input v-model="models.code"
      placeholder="Code"
      hide-clear
    ></mn-input>

    <mn-input v-model="models.number"
      placeholder="Card number"
      :parseBeforeFn="numberParseBeforeFn"
      :parseAfterFn="numberParseAfterFn"
    ></mn-input>

    <code>
      {{ models }}
    </code>
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
          code: undefined,
          number: '123412341234123'
        },
        numberParseBeforeFn (value) {
          // format card number to xxxx xxxx xxxx xxx
          return typeof value === 'string'
            ? value.replace(/(....)(?=.)/g, '$1 ')
            : value
        },
        numberParseAfterFn (value) {
          // parse the formatted value
          return value.length > 0
            ? value.replace(/\s/g, '')
            : undefined
        }
      }
    }
  }
</script>
