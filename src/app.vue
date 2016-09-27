<template>
  <div class="is-full-screen">
    <mn-scroller>
      <router-view></router-view>
    </mn-scroller>
  </div>
</template>

<script>
  import DocsSidebar from './docs/sidebars/sidebar'

  export default {
    components: {
      DocsSidebar
    }
  }
</script>
