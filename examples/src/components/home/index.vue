<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Vue Human</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section v-for="menu in menus">
      <mn-section-note>
        {{ menu.name }}
      </mn-section-note>
      <mn-card>
        <mn-card-item type="link" @click="$router.push(child.link)" v-for="child in menu.children">
          <mn-card-body>
            {{ child.name }}
            <small>{{ child.small }}</small>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </mn-container>
</template>

<script>
  import Container from 'vue-human/components/container/container'
  import Section from 'vue-human/components/section/section'
  import SectionNote from 'vue-human/components/section/section-note'
  import Letter from 'vue-human/components/letter/letter'
  import LetterBody from 'vue-human/components/letter/letter-body'
  import Card from 'vue-human/components/card/card'
  import CardItem from 'vue-human/components/card/card-item'
  import CardBody from 'vue-human/components/card/card-body'

  export default {
    components: {
      [Container.name]: Container,
      [Section.name]: Section,
      [SectionNote.name]: SectionNote,
      [Letter.name]: Letter,
      [LetterBody.name]: LetterBody,
      [Card.name]: Card,
      [CardItem.name]: CardItem,
      [CardBody.name]: CardBody
    },
    data () {
      return {
        menus: [
          {
            name: '核心',
            children: [
              {
                name: 'Button',
                small: '按钮',
                link: { name: 'button' }
              },
              {
                name: 'Icon',
                small: '图标',
                link: { name: 'icon' }
              }
            ]
          },
          {
            name: '表单',
            children: [
              {
                name: 'Counter',
                small: '计数器',
                link: { name: 'counter' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
