<template>
  <button
    :class="[`${cssPrefix}btn`, classes]"
    :title="title"
    @click="click">
    <mn-loading-icon :class="'has-one-margin-right'" v-if="loading"></mn-loading-icon>
    <mn-icon :class="'has-one-margin-right'" :name="icon" v-if="icon && !loading"></mn-icon>
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
