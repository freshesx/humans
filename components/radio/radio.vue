<template>
  <label class="mn-radio-label" @click="click">
    <mn-icon
      :class="['mn-radio-checkmark', {
        'is-active': checked
      }]"
      :name="icon"></mn-icon>
    <span v-if="$slots.default">
      <slot>placeholder</slot>
    </span>
  </label>
</template>

<script>
  import Element from '../../util/element'
  import Icon from '../icon/icon'
  import circleFilled from 'vue-human-icons/js/ios/circle-filled'
  import circleOutline from 'vue-human-icons/js/ios/circle-outline'

  export default new Element({
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
  @import "../../scss/vars";

  .mn-radio {
    &-label {
      cursor: pointer;
      user-select: none;

      & + & {
        margin-left: 0.5rem;
      }
    }

    &-checkmark {
      color: #999;

      &.is-active {
        color: $green;
      }
    }
  }
</style>
