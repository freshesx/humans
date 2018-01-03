<template>
  <div class="scroller-full-page">
    <mn-scroller>
      <ul>
        <li v-for="i in 50">{{ i }}</li>
      </ul>
    </mn-scroller>
  </div>
</template>

<script>
  import { scroller } from '@humans/scroller'

  export default {
    components: {
      ...scroller
    }
  }
</script>
