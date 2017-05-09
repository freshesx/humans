<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Vue Human</h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-columns>
      <mn-column tablet="4" desktop="3"
        v-for="(menu, menuIndex) in menus" :key="menuIndex">
        <mn-section>
          <mn-section-note>
            {{ menu.name }}
          </mn-section-note>
          <mn-card>
            <mn-card-item type="link" @click="$router.push(child.link)"
              v-for="(child, childIndex) in menu.children" :key="childIndex">
              <mn-card-body>
                {{ child.name }}
              </mn-card-body>
              <mn-card-suffix>
                <small>{{ child.small }}</small>
              </mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-column>
    </mn-columns>
  </mn-container>
</template>

<script>
  import containerSuit from 'vue-human/components/container'
  import sectionSuit from 'vue-human/components/section'
  import letterSuit from 'vue-human/components/letter'
  import cardSuit from 'vue-human/components/card'
  import columnSuit from 'vue-human/components/column'

  export default {
    components: {
      ...containerSuit.map(),
      ...sectionSuit.map(),
      ...letterSuit.map(),
      ...cardSuit.map(),
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
                small: this.$t('examples.submenus.core.button'),
                link: { name: 'button' }
              },
              {
                name: 'Icon',
                small: this.$t('examples.submenus.core.icon'),
                link: { name: 'icon' }
              },
              {
                name: 'Scroller',
                small: this.$t('examples.submenus.core.scroller'),
                link: { name: 'scroller' }
              },
              {
                name: 'Container',
                small: this.$t('examples.submenus.core.container'),
                link: { name: 'container' }
              },
              {
                name: 'Column',
                small: this.$t('examples.submenus.core.column'),
                link: { name: 'column' }
              },
              {
                name: 'Flex',
                small: this.$t('examples.submenus.core.flex'),
                link: { name: 'flex' }
              },
              {
                name: 'Image',
                small: this.$t('examples.submenus.core.image'),
                link: { name: 'image' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.popup'),
            children: [
              {
                name: 'Popup',
                small: this.$t('examples.submenus.popup.popup'),
                link: { name: 'popup' }
              },
              {
                name: 'Message',
                small: this.$t('examples.submenus.popup.message'),
                link: { name: 'message' }
              },
              {
                name: 'Modal',
                small: this.$t('examples.submenus.popup.modal'),
                link: { name: 'modal' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.form'),
            children: [
              {
                name: 'Form',
                small: this.$t('examples.submenus.form.form'),
                link: { name: 'form' }
              },
              {
                name: 'Input',
                small: this.$t('examples.submenus.form.input'),
                link: { name: 'input' }
              },
              {
                name: 'Check',
                small: this.$t('examples.submenus.form.check'),
                link: { name: 'check' }
              },
              {
                name: 'Counter',
                small: this.$t('examples.submenus.form.counter'),
                link: { name: 'counter' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.components'),
            children: [
              {
                name: 'Paginate',
                small: this.$t('examples.submenus.components.paginate'),
                link: { name: 'paginate' }
              },
              {
                name: 'Cell',
                small: this.$t('examples.submenus.components.cell'),
                link: { name: 'cell' }
              },
              {
                name: 'Carousel',
                small: this.$t('examples.submenus.components.carousel'),
                link: { name: 'carousel' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
