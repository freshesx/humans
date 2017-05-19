<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Paginate</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-card>
      <mn-card-item><h5>Total 20 (Current {{ models.pageNumber }})</h5></mn-card-item>
      <mn-card-item>
        <mn-card-body>
          <mn-paginate v-model="models.pageNumber" :total="20"></mn-paginate>
        </mn-card-body>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item><h5>Total 1 (Current {{ models.pageNumber2 }})</h5></mn-card-item>
      <mn-card-item>
        <mn-card-body>
          <mn-paginate v-model="models.pageNumber2" :total="1"></mn-paginate>
          <p class="has-center-text">When total pages is one, the paginate is hide.</p>
        </mn-card-body>
      </mn-card-item>
    </mn-card>
  </page>
</template>

<script>
  import paginate from 'vue-human/suites/paginate'

  export default {
    components: {
      ...paginate.map()
    },
    data () {
      return {
        models: {
          pageNumber: 1,
          pageNumber2: 1
        }
      }
    },
    methods: {
      onChangePage (pageNumber) {
        console.log(pageNumber)
      }
    }
  }
</script>
