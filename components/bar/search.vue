<template>
  <div class="bar-search">
    <mn-icon name="ios-search-strong"></mn-icon>
      <input type="text" @focus="show = true" @blur="show = false" @keyup.enter="userKeyEnter" placeholder="Search something">
    <transition name="ani-bar-search">
      <button @click="show = false" v-if="show">cancel</button>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    props: {
      thisKeyEnter: {
        type: Function
      }
    },
    methods: {
      userKeyEnter: function () {
        return this.thisKeyEnter()
      }
    }
  }
</script>

<style>

</style>
