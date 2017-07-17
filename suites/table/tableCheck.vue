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
  .mn-table-check {
    border: solid 2px #666;
    border-radius: 0.25rem;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition-duration: 500ms;

    &.is-active {
      background: rgb(76, 217, 100);
      border-color: darken(rgb(76, 217, 100), 5%);
    }
  }
</style>
