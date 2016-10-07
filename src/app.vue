<template>
  <div class="is-full-screen">
    <mn-scroller save>
      <transition name="has-slide">
        <router-view></router-view>
      </transition>
    </mn-scroller>
  </div>
</template>

<script>
  export default {
  }
</script>
