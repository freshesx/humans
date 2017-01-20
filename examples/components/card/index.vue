<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Card</h1>
          <small>card</small>
        </mn-letter-body>
        <mn-letter-action>
          <mn-link type="primary" size="sm">New</mn-link>
          <mn-link type="secondary-link" size="sm">Link</mn-link>
        </mn-letter-action>
      </mn-letter>

      <mn-cols>
        <mn-col tablet="six">
          <demo-card-media></demo-card-media>
        </mn-col>
        <mn-col tablet="six">
          <demo-card-item></demo-card-item>
          <demo-card-btns></demo-card-btns>
        </mn-col>
        <mn-col tablet="twelve">
          <demo-card-dark></demo-card-dark>
        </mn-col>
      </mn-cols>
    </mn-section>
  </docs-layout-page>
</template>

<script>
  import DemoCardItem from './card-item'
  import DemoCardMedia from './card-media'
  import DemoCardBtns from './card-btns'
  import DemoCardDark from './card-dark'

  export default {
    components: {
      DemoCardItem,
      DemoCardMedia,
      DemoCardBtns,
      DemoCardDark
    }
  }
</script>
