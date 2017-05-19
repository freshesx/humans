<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Counter <small>计数器</small></h1>
        </mn-letter-body>
      </mn-letter>
    </mn-section>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <h5>基本用法</h5>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-counter v-model="models.counter" :min="5"></mn-counter>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import counter from 'vue-human/suites/counter'

  export default {
    components: {
      ...counter.map()
    },
    data () {
      return {
        icons: {
          home: require('vue-human-icons/js/ios/home')
        },
        models: {
          counter: 2
        }
      }
    }
  }
</script>
