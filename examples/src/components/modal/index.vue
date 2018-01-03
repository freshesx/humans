<template>
  <div>
    <button @click="openModal" block>Open Modal</button>

    <mn-modal :visible.sync="showModal">
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
        <mn-btn theme="secondary-link" @click="closeModal">Cancel</mn-btn>
        <mn-btn theme="primary">Confirm</mn-btn>
      </mn-modal-action>
    </mn-modal>
  </div>
</template>

<script>
  import { modal } from '@humans/modal'
  import { card } from '@humans/card'
  import { scroller } from '@humans/scroller'
  import { section } from '@humans/section'
  import { btn } from '@humans/btn'

  export default {
    components: {
      ...modal,
      ...card,
      ...scroller,
      ...section,
      ...btn
    },
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      openModal () {
        this.showModal = true
      },
      closeModal () {
        this.showModal = false
      }
    }
  }
</script>
