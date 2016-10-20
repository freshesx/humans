<template>
  <div class="bar-search">
    <div class="bar-search-input">
      <mn-icon name="ios-search-strong" class="ifSearch"></mn-icon>
      <input type="text"
      v-bind:value="value"
      v-on:input="onInput"
      v-model="message"
      @focus="show = true"
      @blur="show = false"
      @keyup.enter="userKeyEnter"
      placeholder="Search something">
    </div>
    <transition name="ani-bar-search">
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
      thisKeyEnter: {
        type: Function,
        default: function () {
          return
        }
      },
      thisOninput: {
        type: Function,
        default: function () {
          return
        }
      },
      value: {
        type: String,
        default: ''
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
