<template>
  <div :class="[ `${cssPrefix}input` ]">
    <mn-icon
      :name="iconName"
      :class="`${cssPrefix}input-icon`"
      v-if="this.icon !== {}"
      ref="icon"
      :style="icontyles"
      ></mn-icon>
    <input
    type="text"
    name="name"
    v-bind:value="value"
    v-model="message"
    :class="[ `${cssPrefix}input-item` ]"
    v-on:input="onInput"
    ref="input"
    :style="inputStyles">
    <button
      class="clear-text"
      :class="[ `${cssPrefix}input-clear` ]"
      @mousedown.prevent
      @click="clear"
      v-if="message && this.clearInput"
      :style="buttonStyles">
      <mn-icon name="ios-close-outline"></mn-icon>
    </button>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      icontyles () {
        if (this.icon.name && this.icon.position) return (this.icon.position === 'right') ? 'right: 0.5rem;' : 'left: 0.5rem;'
      },
      inputStyles () {
        if (this.icon.name && this.icon.position) return (this.icon.position === 'right') ? 'padding-right: 2rem;' : 'padding-left: 2rem;'
      },
      buttonStyles () {
        if (this.icon.name && this.icon.position) return (this.icon.position === 'right') ? 'right: 2rem;' : ''
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
      icon: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    mounted () {
      if (this.icon.name) this.iconName = this.icon.name
    }
  }
</script>
