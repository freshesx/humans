<template>
  <a
    :class="[`${cssPrefix}btn`, classes]"
    :title="title"
    @click="click">
    <mn-loading-icon :class="'has-one-margin-right'" v-if="loading"></mn-loading-icon>
    <mn-icon :class="'has-one-margin-right'" :name="icon" v-if="icon && !loading"></mn-icon>
    <slot></slot>
  </a>
</template>

<script>
  import MnBtn from './button'

  export default {
    name: 'mn-link',
    mixins: [ MnBtn ]
  }
</script>
