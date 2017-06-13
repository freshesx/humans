<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Loading Mask</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-btn theme="primary" block @click="onOpenLoadingMask">Open loading mask</mn-btn>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
      <mn-section-note>
        此 LoadingMask 打开后，会在 3s 后自动关闭。
      </mn-section-note>
    </mn-section>
  </page>
</template>

<script>
  import LoadingMask from 'vue-human/utils/LoadingMask'

  export default {
    methods: {
      onOpenLoadingMask () {
        this.loadingMaskLayer = LoadingMask.create().show()

        setTimeout(() => {
          this.destroyLoadingMask()
        }, 3000)
      },
      destroyLoadingMask () {
        if (this.loadingMaskLayer) this.loadingMaskLayer.destroy()
      }
    },
    beforeDestroy () {
      this.destroyLoadingMask()
    }
  }
</script>
