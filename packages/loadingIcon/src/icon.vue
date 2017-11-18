<template>
  <span class="mn-default-icon"></span>
</template>

<script>
  export default {
    name: 'mn-default-icon'
  }
</script>

<style lang="scss">
  .mn-default-icon {
    @keyframes mn-default-icon {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(0.6);
      }

      100% {
        transform: scale(1);
      }
    }

    width: 16px;
    height: 16px;
    margin: 0 2px;
    display: inline-block;
    background: currentColor;
    border-radius: 8px;
    vertical-align: -2px;
    animation: mn-default-icon 1.5s infinite linear;
  }
</style>
