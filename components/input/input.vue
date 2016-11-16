<template>
  <div :class="[ `${cssPrefix}input` ]">
    <input
    type="text"
    name="name"
    v-bind:value="value"
    v-model="message"
    :class="[ `${cssPrefix}input-item` ]"
    v-on:input="onInput"
    ref="input">
    <button class="clear-text" :class="[ `${cssPrefix}input-clear` ]" @click="clear" v-if="message">
      <mn-icon name="ios-close-outline"></mn-icon>
    </button>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    },
    methods: {
      clear: function (event) {
        this.message = ''
        this.$emit('input', event.target.value)
      },
      onInput: function (event) {
        this.$emit('input', event.target.value)
      }
    },
    data () {
      return {
        message: ''
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
