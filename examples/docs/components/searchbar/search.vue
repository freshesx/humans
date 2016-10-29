<template>
  <mn-cols>
    <mn-col query="sm-4">
      <mn-card>
        <mn-card-item>
          <mn-search-bar @enter="search" @input="hello" v-model="value"></mn-search-bar>
          <p class="is-gray-text">
            Messages is : {{ value }}
          </p>
        </mn-card-item>
      </mn-card>
    </mn-col>
  </mn-cols>
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
