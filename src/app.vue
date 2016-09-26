<template>
  <div class="is-full-screen">
    <docs-sidebar>
      <div class="is-full-screen" slot="mainarea">
        <mn-scroller>
          <router-view></router-view>
        </mn-scroller>
      </div>
    </docs-sidebar>
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
