<template>
  <mn-container>
    <mn-section>
      <mn-section-note>Section title</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            Card body
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-btn>
        Section button
      </mn-section-btn>
    </mn-section>
  </mn-container>
</template>

<script>
  import { container } from '@humans/container'
  import { section } from '@humans/section'
  import { card } from '@humans/card'

  export default {
    components: {
      ...container,
      ...section,
      ...card
    }
  }
</script>
