<template>
  <div :class="search">
    <div :class="search_input">
      <mn-icon name="ios-search-strong"></mn-icon>
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
      <button :class="search_button"
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
        message: '',
        defaultClasses: this.$human.cssPrefix
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
    },
    computed: {
      search () {
        let classes = {}
        classes[`${this.defaultClasses}bar-search`] = true
        return Object.assign({}, classes)
      },
      search_input () {
        let classes = {}
        classes[`${this.defaultClasses}bar-search-input`] = true
        return Object.assign({}, classes)
      },
      search_button () {
        let classes = {}
        classes[`${this.defaultClasses}bar-search-button`] = true
        return Object.assign({}, classes)
      }
    }
  }
</script>

<style>

</style>
