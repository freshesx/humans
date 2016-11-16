<template>
  <div :class="[ `${cssPrefix}form-input` ]" :style="wrapStyles">
    <mn-icon
      :name="this.icon"
      :class="`${cssPrefix}form-input-icon`"
      v-if="this.icon" :style="iconStyles"></mn-icon>
    <input
      type="text"
      name="name"
      v-bind:value="value"
      v-model="message"
      :class="[ `${cssPrefix}form-input-item` ]"
      v-on:input="onInput"
      ref="input"
      :style="inputStyles">
    <transition name="clear-input">
      <button
        class="clear-text"
        :class="[ `${cssPrefix}form-input-clear` ]"
        @mousedown.prevent
        @click="clear"
        v-if="message && this.clearInput"
        :style="buttonStyles">
        <mn-icon name="close-circled"></mn-icon>
      </button>
    </transition>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      inputStyles () {
        let styles = ''
        if (this.clearInput) styles += 'padding-right: 2rem;'
        // whether to show the 'clear-text' button
        if (this.icon) styles += 'padding-left: 2rem;'
        // whether to show the icon on the left
        if (this.height) styles += `height: ${this.height};`
        // whether to change the height
        if (this.noBorder) styles += 'border: 0;'
        // whether to hide the border
        return styles
      },
      wrapStyles () {
        let styles = ''
        if (this.width) styles += `width: ${this.width};`
        // whether to change the width
        return styles
      },
      buttonStyles () {
        let styles = ''
        if (this.height) styles += `height: ${this.height};`
        // whether to change the height
        return styles
      },
      iconStyles () {
        let styles = ''
        if (this.height) styles += `height: ${this.height};`
        // whether to change the height
        if (this.height) styles += `line-height: ${this.height};`
        // whether to change the height
        return styles
      }
    },
    methods: {
      clear: function (event) {
        this.message = ''
        this.$emit('input', event.target.value)
        // clear the value and trigger the input
      },
      onInput: function (event) {
        this.$emit('input', event.target.value)
        // trigger the input
      }
    },
    data () {
      return {
        message: '',
        iconName: ''
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      clearInput: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      noBorder: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
