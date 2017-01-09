<template>
  <mn-card>
    <mn-card-item><h5>{{ title }}</h5></mn-card-item>
    <mn-card-item v-for="types in buttons">
      <mn-card-body>
        <mn-link
          :icon="iosAnalytics"
          :class="'has-one-margin-right'"
          :type="button"
          :disabled="disabled"
          @click="click"
          @error="error"
          v-for="button in types">{{ button }}</mn-link>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import Normal from './normal'

  export default {
    mixins: [ Normal ],
    data () {
      return {
        title: '<a> link'
      }
    }
  }
</script>
