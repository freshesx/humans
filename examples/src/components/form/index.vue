<template>
  <div>
    <mn-form :validate="$v">
      <h1>Form area</h1>
      <div>
        <mn-label :validate="$v.models.age">Label: age</mn-label>
      </div>
      <div>
        <input type="number" v-model="models.age">
      </div>
      <div>
        <button>Submit form</button>
      </div>
    </mn-form>

    <div style="padding-top: 60px;">
      <h1>Code</h1>
      <code>
        {{ $v }}
      </code>
    </div>
  </div>
</template>

<script>
  import form from '@humans/form'
  import label from '@humans/label'
  import { between } from 'vuelidate/lib/validators'

  export default {
    components: Object.assign({}, form, label),
    data () {
      return {
        models: {
          age: 0
        }
      }
    },
    validations: {
      models: {
        age: {
          between: between(20, 30)
        }
      }
    }
  }
</script>
