<template>
  <mn-page>
    <mn-scroller>
      <mn-container>
        <mn-section>
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <mn-btn theme="primary" block @click="onOpenLoadingMask">Open loading mask</mn-btn>
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
  import LoadingMask from 'vue-human/util/LoadingMask'

  export default {
    components: {
      ...coreSuits.map()
    },
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
