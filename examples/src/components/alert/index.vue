<template>
  <mn-page>
    <mn-scroller>
      <mn-container>
        <mn-section>
          <mn-card>
            <mn-card-item>
              <mn-card-body>
                <mn-btn theme="warning" block @click="onOpenAlert">Open alert</mn-btn>
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
  import Alert from 'vue-human/util/Alert'

  export default {
    components: {
      ...coreSuits.map()
    },
    methods: {
      onOpenAlert () {
        Alert.create().show()
      }
    }
  }
</script>
