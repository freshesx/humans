<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Vue Human</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-cols>
      <mn-col desktop="three" v-for="(menu, menuIndex) in menus" :key="menuIndex">
        <mn-section>
          <mn-section-note>
            {{ menu.name }}
          </mn-section-note>
          <mn-card>
            <mn-card-item type="link" @click="$router.push(child.link)" v-for="(child, childIndex) in menu.children" :key="childIndex">
              <mn-card-body>
                {{ child.name }}
                <small>{{ child.small }}</small>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-col>
    </mn-cols>
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
  import columnSuit from 'vue-human/components/column'

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
      ...columnSuit.map()
    },
    data () {
      return {
        menus: [
          {
            name: this.$t('examples.menus.core'),
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
              },
              {
                name: 'Scroller',
                small: '滚动条',
                link: { name: 'scroller' }
              },
              {
                name: 'Popup',
                small: '浮层',
                link: { name: 'popup' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.layout'),
            children: [
              {
                name: 'Col',
                small: '列',
                link: { name: 'legacyColumn' }
              },
              {
                name: 'Column',
                small: '列',
                link: { name: 'column' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.form'),
            children: [
              {
                name: 'Counter',
                small: '计数器',
                link: { name: 'counter' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.components'),
            children: [
              {
                name: 'Paginate',
                small: '页码',
                link: { name: 'paginate' }
              },
              {
                name: 'Cell',
                small: '单位列表',
                link: { name: 'cell' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
