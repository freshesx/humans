<template>
  <div class="mn-nav-bar">
    <div class="mn-nav-bar-prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="mn-nav-bar-body">
      <slot name="body"></slot>
    </div>
    <div class="mn-nav-bar-suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
  import Element from '../../util/Element'

  export default new Element({
    name: 'mn-nav-bar',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  })
</script>

<style lang="scss">
  .mn-nav-bar {
    display: flex;
    background: #fafafa;
    height: 50px;
    white-space: nowrap;

    &-prefix {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
    }

    &-suffix {
      flex: 1;
      display: flex;
      align-items: center;
      padding-right: 0.5rem;
      justify-content: flex-end;
    }

    &-body {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
</style>
