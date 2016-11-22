<template>
  <div :class="[ `${cssPrefix}bar-search` ]">
    <div
    :class="[ `${cssPrefix}bar-search-input` ]">
      <mn-icon name="ios-search-strong"></mn-icon>
      <input
        ref="input"
        type="text"
        v-model="message"
        placeholder="Search something"
        :value="value"
        @input="input"
        @focus="show = true"
        @blur="show = false"
        @keyup.enter="typying">
        <transition :name="`${cssPrefix}bar-search-clear`">
          <div
            v-if="value"
            :class="[ `${cssPrefix}bar-search-clear` ]"
            @click="clearValue"
            @mousedown.prevent>
            <mn-icon name="ios-close-outline"></mn-icon>
          </div>
        </transition>
    </div>
    <transition :name="`${cssPrefix}bar-search`">
      <button
        :class="[ `${cssPrefix}bar-search-button` ]"
        @click="cancel"
        @mousedown.prevent
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
      },
      cancel: function () {
        this.message = undefined
        this.$emit('input', undefined)
        this.$refs.input.blur()
      },
      clearValue: function () {
        this.message = undefined
        this.$emit('input', undefined)
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
