<template>
  <label class="mn-radio-label" @click="click">
    <mn-icon class="mn-radio-checkmark" :class="{ 'is-active': checked }"
      :name="icon"></mn-icon>
    <span v-if="$slots.default">
      <slot>placeholder</slot>
    </span>
  </label>
</template>

<script>
  import icon from '@humans/icon'

  export default {
    name: 'mn-radio',
    components: Object.assign({}, icon),
    props: {
      value: null,
      data: null,
      disabled: Boolean,
      active: {
        default () { return require('vue-human-icons/js/ios/circle-filled') }
      },
      unactive: {
        default () { return require('vue-human-icons/js/ios/circle-outline') }
      }
    },
    computed: {
      checked () {
        return this.data === this.value
      },
      icon () {
        return this.checked
          ? this.active
          : this.unactive
      }
    },
    methods: {
      click () {
        if (!this.disabled) {
          this.$emit('input', this.data)
        }
      }
    }
  }
</script>
