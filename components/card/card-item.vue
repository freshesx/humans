<template>
  <div
    :class="[
      `${cssPrefix}card-item`,
      typeClass,
      { 'is-focus': focus, 'is-disabled': disabled
    }]"
    @click="click">
    <slot></slot>
  </div>
</template>

<script>
  export default {
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
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
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
  }
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

  // @import mn-card-btns, mn-card-media
  .mn-card-item + .mn-card-item,
  .mn-card-media + .mn-card-item,
  .mn-card-btns + .mn-card-item {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }
</style>
