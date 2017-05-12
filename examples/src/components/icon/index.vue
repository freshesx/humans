<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Icon <small>图标</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5><mn-icon :name="icons.contactOutline"></mn-icon> 基本用法</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contactOutline"></mn-icon> 你好
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <h1>
              <mn-icon :name="icons.contactOutline" vertical="-25px"></mn-icon> 你好
            </h1>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>图标的设计和使用的注意点在于衬线是否对齐</div>
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5><mn-icon :name="icons.contactOutline"></mn-icon> 放大缩小</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-icon :name="icons.contactOutline" :scale="0.6" vertical="-6px"></mn-icon> 你好
            <mn-icon :name="icons.contactOutline" vertical="-2px"></mn-icon> 你好
            <mn-icon :name="icons.contactOutline" :scale="2" vertical="10px"></mn-icon> 你好
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        <div>@todo 目前仅能通过 vertical 属性来调整衬线对齐</div>
      </mn-section-note>
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

  import Icon from 'vue-human/suites/icon/icon'

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
      [Icon.name]: Icon
    },
    data () {
      return {
        icons: {
          contactOutline: require('vue-human-icons/js/ios/contact-outline')
        }
      }
    }
  }
</script>
