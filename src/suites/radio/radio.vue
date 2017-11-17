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
  import Element from '../../utils/Element'
  import iconElement from '../icon/icon'

  export default new Element({
    name: 'mn-radio',
    components: {
      ...iconElement.insert()
    },
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
  })
</script>


<style lang="scss">
  @import "./vars";

  .mn-radio {
    &-label {
      cursor: pointer;
      user-select: none;

      & + & {
        margin-left: $mn-radio-grid-gutters;
      }
    }

    &-checkmark {
      color: $mn-radio-color;

      &.is-active {
        color: $mn-radio-active-color;
      }
    }
  }
</style>
