<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Rate</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-section-note>Read only rate component. Support for half-star.</mn-section-note>
      <mn-card>
        <mn-card-item>
          <mn-card-body><mn-rate :value="3" disabled></mn-rate></mn-card-body>
          <mn-card-suffix>Disabled 3</mn-card-suffix>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body><mn-rate :value="3.6" disabled></mn-rate></mn-card-body>
          <mn-card-suffix>Disabled 3.6</mn-card-suffix>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body><mn-rate v-model="rate" @input="onChange"></mn-rate></mn-card-body>
          <mn-card-suffix>Writable Rate: {{ rate }}</mn-card-suffix>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import rate from 'vue-human/suites/rate'

  export default {
    components: {
      ...rate.map()
    },
    data () {
      return {
        rate: 3
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
      }
    }
  }
</script>
