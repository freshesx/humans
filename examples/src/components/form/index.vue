<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Validation Form</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-form>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            form
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-form>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      page
    }
  }
</script>
