<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Card</h1>
              <small>card, header, block, lists, item, button</small>
            </mn-letter>

            <mn-cols>
              <mn-col query="sm-6">
                <demo-card-media></demo-card-media>
              </mn-col>
              <mn-col query="sm-6">
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
