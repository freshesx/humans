<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Column <small>12 列布局</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="4">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="4">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="4">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="2, 2" desktop="6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="8" desktop="12">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="2" desktop="6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
        <mn-column mobile="12" desktop="6">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好1</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column mobile="6" tablet="4" desktop="3" v-for="item in 10" :key="item">
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <h5>奈好</h5>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>
  </mn-container>
</template>

<script>
  import Scroller from 'vue-human/components/scroller/scroller'
  import Container from 'vue-human/components/container/container'
  import Section from 'vue-human/components/section/section'
  import SectionNote from 'vue-human/components/section/section-note'
  import Letter from 'vue-human/components/letter/letter'
  import LetterBody from 'vue-human/components/letter/letter-body'
  import Card from 'vue-human/components/card/card'
  import CardItem from 'vue-human/components/card/card-item'
  import CardBody from 'vue-human/components/card/card-body'

  // import Cols from 'vue-human/components/column/cols'
  // import Col from 'vue-human/components/column/col'
  import columns from 'vue-human/components/column/columns'
  import column from 'vue-human/components/column/column'

  export default {
    components: {
      [Scroller.name]: Scroller,
      [Container.name]: Container,
      [Section.name]: Section,
      [SectionNote.name]: SectionNote,
      [Letter.name]: Letter,
      [LetterBody.name]: LetterBody,
      [Card.name]: Card,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      ...columns.inject(),
      ...column.inject()
    }
  }
</script>
