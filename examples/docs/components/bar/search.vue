<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Search Bar</div>
    </div>
    <mn-seachBar :thisKeyEnter="search" :thisKeyUp="hello" v-model="message"></mn-seachBar>
    <p class="message">
      Messages is : {{ message }}
    </p>
  </div>
</template>

<script>
  export default {
    methods: {
      search: function () {
        console.log('click enter.')
      },
      hello: function () {
        console.log('Type something.')
      }
    },
    data () {
      return {
        message: ''
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
  }
</style>
