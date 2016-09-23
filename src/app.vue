<template>
  <div>
    <docs-sidebar>
      <router-view slot="mainarea"></router-view>
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
