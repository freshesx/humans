<template>
  <div>
    <mn-select :options="cityOptions" v-model="models.city"></mn-select>
  </div>
</template>

<script>
  import select from '@humans/select'

  export default {
    components: Object.assign({}, select),
    data () {
      return {
        models: {
          city: undefined
        },
        cityOptions: [
          { label: 'Choose your city', value: undefined },
          { label: 'Shanghai', value: 'Shanghai' },
          { label: 'Suzhou', value: 'Suzhou' },
          { label: 'Hangzhou', value: 'Hangzhou' }
        ]
      }
    }
  }
</script>
