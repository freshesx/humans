<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <template slot="body">
                <h1>Card</h1>
                <small>card</small>
              </template>
              <template slot="action">
                <mn-btn type="primary" size="sm">New</mn-btn>
                <mn-btn size="sm">Link</mn-btn>
                <mn-btn size="sm"><mn-icon name="ios-navigate"></mn-icon></mn-btn>
              </template>
            </mn-letter>

            <mn-cols>
              <mn-col tablet="six">
                <demo-card-media></demo-card-media>
              </mn-col>
              <mn-col tablet="six">
                <demo-card-item></demo-card-item>
                <demo-card-btns></demo-card-btns>
              </mn-col>
            </mn-cols>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
</template>

<script>
  import DemoCardItem from './card-item'
  import DemoCardMedia from './card-media'
  import DemoCardBtns from './card-btns'

  export default {
    components: {
      DemoCardItem,
      DemoCardMedia,
      DemoCardBtns
    }
  }
</script>
