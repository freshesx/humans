<template>
  <div class="bar-search">
    <div class="bar-search-input">
      <mn-icon name="ios-search-strong" class="ifSearch"></mn-icon>
      <input type="text"
        v-bind:value="value"
        v-on:input="input"
        v-model="message"
        @focus="show = true"
        @blur="show = false"
        @keyup.enter="typying"
        placeholder="Search something">
    </div>
    <transition name="bar-search">
      <button class="bar-search-button"
        @click="show = false"
        v-if="show">cancel</button>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        message: ''
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      typying: function () {
        this.$emit('enter')
      },
      input: function (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style>

</style>
