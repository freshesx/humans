<template>
  <div>
    <h1>@humans</h1>
    <ul>
      <li v-for="(route, index) in routes" :key="index"><router-link :to="route.path">{{ route.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        version: process.env.VERSION
      }
    },
    computed: {
      routes () {
        return this.$router.options.routes
      }
    }
  }
</script>
