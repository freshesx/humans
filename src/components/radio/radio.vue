<template>
  <label :class="[`${cssPrefix}form-radio-label`]" @click="click">
    <mn-icon
      :class="[`${cssPrefix}form-radio-checkmark`, {
        'is-active': checked
      }]"
      :name="checked ? circleFilled : circleOutline"></mn-icon>
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
      disabled: Boolean
    },
    data () {
      return {
        circleFilled,
        circleOutline
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      checked () {
        return this.data === this.value
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
