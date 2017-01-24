<template>
  <form @submit.prevent="submit" novalidate>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'mn-form',
    props: {
      validate: Object
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      submit ($event) {
        if (this.loading) return

        if (!this.validate) {
          this.emitSuccess()
          return
        }

        this.validate.$touch()

        if (!this.validate.$invalid) {
          this.emitSuccess($event)
        } else {
          this.emitError($event)
        }
      },
      emitSuccess ($event) {
        this.$emit('submit', $event, this, true)
        this.$emit('success', $event, this)
      },
      emitError ($event) {
        this.$emit('submit', $event, this, false)
        this.$emit('error', $event, this)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/variables";

  .#{$namespace}form-counter {
    display: flex;
    max-width: 8rem;

    &-box {
      flex-shrink: 1;
      border-top: solid 1px #ddd;
      border-bottom: solid 1px #ddd;
    }

    &-input {
      width: 100%;
      display: block;
      padding: 0.25rem 0.5rem;
      text-align: center;
      outline: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      border: none;
      background: transparent;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
      }

      &[type="number"] {
        -moz-appearance: textfield;
      }
    }

    &-btn {
      flex-shrink: 0;
      border: solid 1px #ddd;
      background: transparent;
      width: 2.375rem;
      text-align: center;
      cursor: pointer;
      padding: 0;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;

      &.is-disabled {
        background: #eee;
        outline: none;
      }

      &:first-child {
        border-top-left-radius: $base-radius;
        border-bottom-left-radius: $base-radius;
      }

      &:last-child {
        border-top-right-radius: $base-radius;
        border-bottom-right-radius: $base-radius;
      }
    }
  }
</style>
