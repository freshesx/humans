<template>
  <div class="mn-radio-tag" :class="{ 'is-active': checked }" @click="click">
    <slot>placeholder</slot>
  </div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-radio-tag',
    props: {
      value: null,
      data: null,
      disabled: Boolean
    },
    computed: {
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
  })
</script>


<style lang="scss">
  @import "./vars";

  .mn-radio-tag {
    display: inline-block;
    border: solid 2px $gray;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;

    & + & {
      margin-left: 0.5rem;
    }

    &.is-active {
      background: $green;
      color: #fff;
      border-color: $green;
    }
  }
</style>
