<template>
  <mn-scroller>
    <mn-container>
      <mn-section>
        <mn-cell :contents="contents" :selections.sync="selections">
          <mn-card-suffix slot="action" action>
            <mn-btn theme="secondary" size="sm">删除</mn-btn>
          </mn-card-suffix>
          <template scope="scope">
            <mn-cell-item type="link" :item="scope.item">
              <mn-card-body>
                <h2>{{ scope.item.name }} <small>{{ scope.item.zip }}</small></h2>
              </mn-card-body>
            </mn-cell-item>
          </template>
        </mn-cell>
      </mn-section>
    </mn-container>
  </mn-scroller>
</template>

<script>
  import scrollerSuit from 'vue-human/suites/scroller'
  import containerSuit from 'vue-human/suites/container'
  import sectionSuit from 'vue-human/suites/section'
  import cellSuit from 'vue-human/suites/cell'
  import cardSuit from 'vue-human/suites/card'
  import buttonSuit from 'vue-human/suites/button'
  import { getDistrict } from './api'

  export default {
    components: {
      ...scrollerSuit.map(),
      ...containerSuit.map(),
      ...sectionSuit.map(),
      ...cellSuit.map(),
      ...cardSuit.map(),
      ...buttonSuit.map()
    },
    data () {
      return {
        contents: undefined,
        selections: []
      }
    },
    methods: {
      update () {
        getDistrict().then(response => {
          this.contents = response
        })
      }
    },
    mounted () {
      this.update()
    }
  }
</script>
