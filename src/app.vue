<template>
  <div>
    <router-view></router-view>
    <div class="mn-tab mn-tab-fixed-bottom">
      <div class="mn-tab-item">Home</div>
      <div class="mn-tab-item">Events</div>
      <div class="mn-tab-item">Search</div>
      <div class="mn-tab-item">Setting</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../sass/human";
</style>
