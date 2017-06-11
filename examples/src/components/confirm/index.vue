<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Confirm</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="warning" block @click="onOpenConfirm">Open confirm</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import Confirm from 'vue-human/utils/Confirm'

  export default {
    methods: {
      onOpenConfirm () {
        this.confirmLayer = Confirm.create().show()
      }
    },
    beforeDestroy () {
      this.confirmLayer.destroy()
    }
  }
</script>
