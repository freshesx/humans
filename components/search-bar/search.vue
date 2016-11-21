<template>
  <div :class="[ `${cssPrefix}bar-search` ]">
    <div :class="[ `${cssPrefix}bar-search-input` ]">
      <mn-icon name="ios-search-strong"></mn-icon>
      <input
        type="text"
        v-model="message"
        placeholder="Search something"
        :value="value"
        @input="input"
        @focus="show = true"
        @blur="show = false"
        @keyup.enter="typying">
    </div>
    <transition name="bar-search">
      <button
        :class="[ `${cssPrefix}bar-search-button` ]"
        @click="show = false"
        v-if="show">
        cancel
     </button>
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
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
