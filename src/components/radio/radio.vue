<template>
  <label :class="[`${cssPrefix}form-radio-label`]" @click="click">
    <mn-icon
      :class="[`${cssPrefix}form-radio-checkmark`, {
        'is-active': checked
      }]"
      :name="icon"></mn-icon>
    <span v-if="$slots.default">
      <slot>placeholder</slot>
    </span>
  </label>
</template>

<script>
  import Icon from '../icon/icon'
  import circleFilled from './circle-filled.json'
  import circleOutline from './circle-outline.json'

  export default {
    name: 'mn-radio',
    components: {
      [Icon.name]: Icon
    },
    props: {
      value: null,
      data: null,
      disabled: Boolean,
      active: {
        type: [String, Object],
        default: () => circleFilled
      },
      unactive: {
        type: [String, Object],
        default: () => circleOutline
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
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
