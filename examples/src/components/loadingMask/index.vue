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
    </mn-section>
  </page>
</template>

<script>
  import LoadingMask from 'vue-human/utils/LoadingMask'

  export default {
    methods: {
      onOpenLoadingMask () {
        const loadingMask = LoadingMask.create().show()
        setTimeout(() => {
          loadingMask.close()
        }, 5000)
      }
    }
  }
</script>
