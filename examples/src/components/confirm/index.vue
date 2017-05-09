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
  import coreSuits from 'vue-human/components/coreSuits'
  import Confirm from 'vue-human/util/Confirm'

  export default {
    components: {
      ...coreSuits.map()
    },
    methods: {
      onOpenConfirm () {
        Confirm.create().show()
      }
    }
  }
</script>
