<template>
  <div class="bar-search">
    <slot></slot>
    <mn-icon name="ios-search-strong"></mn-icon>
    <input @focus="show = true" type="text" placeholder="Search something">
    <transition name="searchBar">
      <button @click="show = false" v-if="show" class="is-error is-sm">cancel</button>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style>

</style>
