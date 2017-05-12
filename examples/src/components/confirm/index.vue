<template>
  <mn-page>
    <mn-scroller>
      <mn-container>
        <mn-section>
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <mn-btn theme="warning" block @click="onOpenConfirm">Open confirm</mn-btn>
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-container>
    </mn-scroller>
  </mn-page>
</template>

<script>
  import core from 'vue-human/components/core'
  import Confirm from 'vue-human/util/Confirm'

  export default {
    components: {
      ...core.map()
    },
    methods: {
      onOpenConfirm () {
        Confirm.create().show()
      }
    }
  }
</script>
