<template>
  <mn-scroller>
    <mn-container>
      <mn-section>
        <mn-letter>
          <mn-letter-body>
            <h1>Scroller <small>滚动条</small></h1>
          </mn-letter-body>
        </mn-letter>
      </mn-section>

      <mn-section>
        <mn-card>
          <mn-card-item>
            <mn-card-body>
              建议在手机版测试一下，在 mn-scroller 底下时启动 popup mask，
              然后判断 touch 模式下，滚动条是否滚动。
            </mn-card-body>
          </mn-card-item>
          <mn-card-item type="link" @click="onOpenConfirm">
            <mn-card-body>
              点击打开 popup 以测试
            </mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-section>

      <mn-section>
        <mn-card>
          <mn-card-item v-for="(item, key) in 20" :key="key" type="arrow">
            <mn-card-body>Row {{ item }}</mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-section>
    </mn-container>
  </mn-scroller>
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

  import confirm from 'vue-human/util/confirm'

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
      [CardBody.name]: CardBody
    },
    methods: {
      onOpenConfirm () {
        confirm({ show: true, description: '观察你的滚动条' })
      }
    }
  }
</script>
