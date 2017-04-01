<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Column <small>列</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-columns>
        <mn-column :tablet="{ flex: '0 1 33.3%' }" :desktop="{ flex: '0 1 20%' }" v-for="item in 10" :key="item">
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

    <mn-section>
      <mn-columns :desktop="{ margin: 0, 'margin-left': '1px' }">
        <mn-column :mobile="{ flex: '1 1 50%' }" :tablet="{ flex: '1 1 25%' }" :desktop="{ flex: '1 1 20%' }" :style="{ 'border': 'solid 1px #e5e5e5', 'margin-left': '-1px', 'margin-top': '-1px', padding: 0 }" v-for="item in 10" :key="item">
          <div :style="{ height: '160px', display: 'flex', 'justify-content': 'center', 'align-items': 'center', background: '#fff' }">
            <h5>奈好</h5>
          </div>
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

  import Columns from 'vue-human/components/column/columns'
  import Column from 'vue-human/components/column/column'

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
      [Columns.name]: Columns,
      [Column.name]: Column
    }
  }
</script>
