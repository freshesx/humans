<template>
  <div :class="[ `${cssPrefix}input` ]">
    <input type="text" name="name" value="" :class="[ `${cssPrefix}input-item` ]">
    <button class="clear-text" :class="[ `${cssPrefix}input-clear` ]">
      <mn-icon name="ios-close-outline"></mn-icon>
    </button>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      }
    }
  }
</script>
