<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Counter <small>计数器</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>基本用法</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-counter v-model="models.counter" :min="5"></mn-counter>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

  </mn-container>
</template>

<script>
  import Container from 'vue-human/suites/container/container'
  import Section from 'vue-human/suites/section/section'
  import SectionNote from 'vue-human/suites/section/section-note'
  import Letter from 'vue-human/suites/letter/letter'
  import LetterBody from 'vue-human/suites/letter/letter-body'
  import Card from 'vue-human/suites/card/card'
  import CardItem from 'vue-human/suites/card/card-item'
  import CardBody from 'vue-human/suites/card/card-body'

  import Counter from 'vue-human/suites/counter/counter'

  export default {
    components: {
      [Container.name]: Container,
      [Section.name]: Section,
      [SectionNote.name]: SectionNote,
      [Letter.name]: Letter,
      [LetterBody.name]: LetterBody,
      [Card.name]: Card,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody,
      [Counter.name]: Counter
    },
    data () {
      return {
        icons: {
          home: require('vue-human-icons/js/ios/home')
        },
        models: {
          counter: 2
        }
      }
    }
  }
</script>
