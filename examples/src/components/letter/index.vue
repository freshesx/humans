<template>
  <div>
    <mn-letter>
      <mn-letter-body>
        <h1>Letter</h1>
      </mn-letter-body>
      <mn-letter-action>
        action
      </mn-letter-action>
    </mn-letter>
  </div>
</template>

<script>
  import { letter } from '@humans/letter'

  export default {
    components: {
      ...letter
    }
  }
</script>
