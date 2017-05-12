<template>
  <mn-form>
    <mn-card>
      <mn-card-item>
        <mn-card-body>
          form
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </mn-form>
</template>

<script>
  import formSuit from 'vue-human/suites/form'
  import cardSuit from 'vue-human/suites/card'

  export default {
    components: {
      ...formSuit.map(),
      ...cardSuit.map()
    }
  }
</script>
