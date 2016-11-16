<template>
  <mn-card>
    <mn-card-item>Input Control</mn-card-item>
    <mn-card-item>
      <mn-input v-model="value" clearInput :icon="icon"></mn-input>
      <p>{{ value }}</p>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    methods: {
      change: function (value) {
        console.log(value)
      }
    },
    data () {
      return {
        value: '',
        icon: {
          name: 'ios-search',
          position: 'right'
        }
      }
    }
  }
</script>
