<template>
  <div>
    <router-view></router-view>
    <div class="tab tab-fixed-bottom">
      <div class="tab-item">Home</div>
      <div class="tab-item">Events</div>
      <div class="tab-item">Search</div>
      <div class="tab-item">Setting</div>
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
