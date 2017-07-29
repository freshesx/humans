<template>
  <div class="mn-table-check" :class="{ 'is-active': checked }" @click="onClick"></div>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-table-check',
    props: {
      checked: Boolean
    },
    methods: {
      onClick (event) {
        this.$emit('click', event)
      }
    }
  })
</script>

<style lang="scss">
  @import "./vars";

  @keyframes mn-table-check-bounce {
    0% {
      transform: translate(0);
    }
    25% {
      transform: translate(0, -2px);
    }
    50% {
      transform: translate(0, 1px);
    }
    75% {
      transform: translate(0, -3px);
    }
    100% {
      transform: translate(0);
    }
  }

  .mn-table-check {
    border: solid 2px $mn-table-check-bg;
    border-radius: 0.25rem;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition-duration: 200ms;

    &.is-active {
      background: $mn-table-check-active-bg;
      border-color: darken($mn-table-check-active-bg, 5%);
      animation: 800ms mn-table-check-bounce;
    }
  }
</style>
