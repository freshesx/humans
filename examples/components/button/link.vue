<template>
  <mn-card>
    <mn-card-item><h5>{{ title }}</h5></mn-card-item>
    <mn-card-item>
      <mn-card-body>
        <mn-link
          type="primary"
          :class="'has-one-margin-right'"
          @click="click">Hyper link</mn-link>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  export default {
    data () {
      return {
        title: '<a> link'
      }
    },
    methods: {
      click () {
        console.log('Click hyper link')
      }
    }
  }
</script>
