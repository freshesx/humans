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
import { MnContainer, MnSectionSuites, MnCardSuites } from '@freshes/human'

export default {
  components: {
    MnContainer,
    ...MnSectionSuites,
    ...MnCardSuites
  }
}
</script>
