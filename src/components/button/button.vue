<template>
  <button
    :class="[`${cssPrefix}btn`, classes]"
    :title="title"
    @click="click">
    <mn-loading-icon :class="{ 'has-one-margin-right': !!$slots.default }" v-if="loading"></mn-loading-icon>
    <mn-icon :class="{ 'has-one-margin-right': !!$slots.default }" :name="icon" v-if="icon && !loading"></mn-icon>
    <slot></slot>
  </button>
</template>

<script>
  import mixin from './mixin'

  export default {
    name: 'mn-btn',
    mixins: [ mixin ]
  }
</script>
