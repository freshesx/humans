<template>
  <div class="bar-search">
    <mn-icon name="ios-search-strong"></mn-icon>
    <input type="text" v-bind:value="value" v-on:input="onInput" v-model="message" @focus="show = true" @blur="show = false" @keyup.enter="userKeyEnter" placeholder="Search something">
    <transition name="ani-bar-search">
      <button @click="show = false" v-if="show">cancel</button>
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
      thisKeyEnter: {
        type: Function
      },
      thisOninput: {
        type: Function
      },
      value: {
        type: String
      }
    },
    methods: {
      userKeyEnter: function () {
        return this.thisKeyEnter()
      },
      onInput: function (event) {
        this.$emit('input', event.target.value)
        return this.thisOninput()
      }
    }
  }
</script>

<style>

</style>
