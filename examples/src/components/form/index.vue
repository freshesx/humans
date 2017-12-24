<template>
  <div>
    <mn-form :validate="$v">
      form area
    </mn-form>
    <div>
      {{ $v }}
    </div>
  </div>
</template>

<script>
  import form from '@humans/form'
  import { between } from 'vuelidate/lib/validators'

  export default {
    components: Object.assign({}, form),
    data () {
      return {
        age: 0
      }
    },
    validations: {
      age: {
        between: between(20, 30)
      }
    }
  }
</script>
