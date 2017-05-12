<template>
  <div
    class="mn-card-item"
    :class="{
      [`is-${type}`]: !!type,
      'is-focus': focus,
      'is-disabled': disabled
    }"
    @click="click">
    <slot></slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-card-item',
    props: {
      type: {
        type: String,
        validator: val => ['link', 'arrow', 'cursor'].includes(val)
      },
      disabled: Boolean
    },
    data () {
      return {
        focus: false
      }
    },
    methods: {
      click ($event) {
        this.$emit('click', $event, this)
        if (this.type) {
          this.focus = true
          setTimeout(() => {
            this.focus = false
          }, 150)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "../../scss/vars";
  @import "../../scss/mixins/arrow";

  .mn-card-item {
    display: flex;
    padding: $grid-gutters;
    align-items: center;

    &.is-focus {
      background: #f5f5f5;
    }

    &.is-link,
    &.is-cursor {
      cursor: pointer;
    }

    &.is-link,
    &.is-arrow {
      &::after {
        @include make-arrow();
      }
    }
  }

  // @affect(./cardBtns.vue, ./card-media.vue)
  .mn-card-item + .mn-card-item,
  .mn-card-media + .mn-card-item,
  .mn-card-btns + .mn-card-item {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
</style>
