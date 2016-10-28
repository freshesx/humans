<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Search Bar</div>
    </div>
    <mn-search-bar
      @enter="search"
      @input="hello"
      v-model="value">
    </mn-search-bar>
    <p class="message">
      Messages is : {{ value }}
    </p>
  </div>
</template>

<script>
  export default {
    methods: {
      search: function () {
        console.log('click enter.')
        // Do something when you press the 'enter'
      },
      hello: function () {
        console.log(this.$data.value)
        // Do something when typing
      }
    },
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>
  .message{
    padding: 0 1rem;
    margin-top: 0;
    color: #999;
    line-height: 1rem;
    font-size: 0.8rem;
  }
</style>
