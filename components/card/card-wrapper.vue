<template>
  <div :class="[ `${cssPrefix}card-group` ]">
    <div :class="[ `${cssPrefix}card-group-note` ]" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <slot name="body"></slot>

    <div :class="[ `${cssPrefix}card-group-note` ]" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
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
