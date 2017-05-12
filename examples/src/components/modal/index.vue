<template>
  <mn-container>
    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" @click="onOpenModal" block>Open Modal</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>

    <mn-modal :show.sync="showModal">
      <mn-scroller>
        <mn-section>
          <mn-card>
            <mn-card-item v-for="item in 20" :key="item" type="link">
              <mn-card-body>奈好</mn-card-body>
              <mn-card-suffix>{{ item }}</mn-card-suffix>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
      <mn-modal-action slot="suffix">
        <mn-btn theme="secondary-link" @click="onCloseModal">Cancel</mn-btn>
        <mn-btn theme="primary">Confirm</mn-btn>
      </mn-modal-action>
    </mn-modal>
  </mn-container>
</template>

<script>
  import scrollerSuits from 'vue-human/suites/scroller'
  import containerSuits from 'vue-human/suites/container'
  import sectionSuits from 'vue-human/suites/section'
  import cardSuits from 'vue-human/suites/card'
  import buttonSuits from 'vue-human/suites/button'
  import modalSuits from 'vue-human/suites/modal'

  export default {
    components: {
      ...scrollerSuits.map(),
      ...containerSuits.map(),
      ...sectionSuits.map(),
      ...cardSuits.map(),
      ...buttonSuits.map(),
      ...modalSuits.map()
    },
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      onOpenModal () {
        this.showModal = true
      },
      onCloseModal () {
        this.showModal = false
      }
    }
  }
</script>
