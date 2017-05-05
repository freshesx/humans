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
      <mn-col tablet="four" desktop="three"
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
      </mn-col>
    </mn-cols>
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
                name: 'Column',
                small: '12 列布局',
                link: { name: 'column' }
              },
              {
                name: 'Flex',
                small: '弹性盒子',
                link: { name: 'flex' }
              }
            ]
          },
          {
            name: this.$t('examples.menus.form'),
            children: [
              {
                name: 'Form',
                small: '表单',
                link: { name: 'form' }
              },
              {
                name: 'Input',
                small: '单行文本框',
                link: { name: 'input' }
              },
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
              },
              {
                name: 'Image',
                small: '图片',
                link: { name: 'image' }
              },
              {
                name: 'Modal',
                small: '模态对话框',
                link: { name: 'modal' }
              }
            ]
          }
        ]
      }
    }
  }
</script>
