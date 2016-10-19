<template>
  <div class="bar-search">
    <mn-icon name="ios-search-strong"></mn-icon>
    <input @focus="show = true" type="text" class="bar-search-input" placeholder="Search something">
    <transition name="ani-bar-search">
      <button @focus="show = false" v-if="show" class="bar-search-button is-error is-sm">cancel</button>
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
