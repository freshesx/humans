<template>
  <div :class="[`${cssPrefix}card-item`, typeClass]">
    <div :class="[ `${cssPrefix}card-item-addon` ]" v-if="$slots.addon">
      <slot name="addon"></slot>
    </div>
    <div :class="[ `${cssPrefix}card-item-body` ]" v-if="$slots.body || $slots.default">
      <slot name="body"></slot>   <!-- Slot for name -->
      <slot></slot>               <!-- Slot for default -->
    </div>
    <div :class="[ `${cssPrefix}card-item-help` ]" v-if="$slots.help">
      <slot name="help"></slot>
    </div>
    <div :class="[ `${cssPrefix}card-item-action` ]" v-if="$slots.action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        validator: val => ['link', 'arrow'].includes(val)
      }
    },
    computed: {
      cssPrefix () {
        return this.$human.cssPrefix
      },
      typeClass () {
        return { [`is-${this.type}`]: !!this.type }
      }
    }
  }
</script>
