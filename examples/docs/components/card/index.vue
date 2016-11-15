<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <div class="section">

            <div class="letter">
              <div class="letter-body">
                <h1>Card</h1>
                <small>card, header, block, lists, item, button</small>
              </div>
            </div>

            <div class="cols">
              <div class="col is-sm-6">
                <demo-card-item></demo-card-item>
                <demo-card-media></demo-card-media>
                <demo-card-btns></demo-card-btns>
              </div>
            </div>

          </div>
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
    },
    data () {
      return {
        inlineImage: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg',
        blockImage: [
          {
            min: 0,
            max: 700,
            scale: 400 / 200,
            src: 'https://o9qu3mxgj.qnssl.com/o_1ard82t21s7j9a0184ier9qaa7k.png-cover.md'
          },
          {
            min: 701,
            src: 'https://o9qu3mxgj.qnssl.com/holder/multicolored.jpg-cover.lg'
          }
        ]
      }
    }
  }
</script>
