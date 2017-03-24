<template>
  <mn-container>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Button <small>按钮</small></h1>
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
            <mn-btn theme="primary" :icon="icons.home">按钮</mn-btn>
            <mn-btn theme="secondary">按钮</mn-btn>
            <mn-btn theme="inverse">按钮</mn-btn>
            <mn-btn theme="warning">按钮</mn-btn>
            <mn-btn theme="error">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 调整 theme 的方案
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>按钮尺寸</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" size="xs">按钮</mn-btn>
            <mn-btn theme="primary" size="sm">按钮</mn-btn>
            <mn-btn theme="primary">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>

        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" :icon="icons.home" size="xs">按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" size="sm">按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home">按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 定义 xs 尺寸的按钮；是否调整 size 的命名？
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>状态</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary">Normal</mn-btn>
            <mn-btn theme="primary" active>Active</mn-btn>
            <mn-btn theme="primary" disabled>Disabled</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 添加更多的色彩案例
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>圆形</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary">按钮</mn-btn>
            <mn-btn theme="primary" circle>按钮</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" circle></mn-btn>
            <mn-btn theme="primary" circle size="sm">A</mn-btn>
            <mn-btn theme="primary" :icon="icons.home" circle size="sm"></mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 添加更多的色彩案例
      </mn-section-note>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>块状</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" :icon="icons.home" block margin>按钮</mn-btn>
            <mn-btn theme="secondary" block margin>按钮</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        @todo: 调整 theme 的方案
      </mn-section-note>
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

  import Button from 'vue-human/components/button/button'

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
      [Button.name]: Button
    },
    data () {
      return {
        icons: {
          home: require('vue-human-icons/js/ios/home')
        }
      }
    }
  }
</script>
