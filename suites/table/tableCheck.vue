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

    &.is-active {
      background: #666;
    }
  }
</style>
