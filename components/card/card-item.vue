<template>
  <div :class="[cssPrefix]">
    <div :class="[cssPrefix + '-addon']" v-if="$slots.addon">
      <slot name="addon"></slot>
    </div>
    <div :class="[cssPrefix + '-body']" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <div :class="[cssPrefix + '-action']" v-if="$slots.action">
      <slot name="action"></slot>
    </div>
    <div :class="[cssPrefix + '-help']" v-if="$slots.help">
      <slot name="help"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      cssPrefix () {
        return `${this.$human.cssPrefix}card-item`
      }
    }
  }
</script>
