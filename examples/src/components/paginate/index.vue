<template>
  <mn-columns>
    <mn-column desktop="6, 3">
      <mn-card>
        <mn-card-item><h5>total 20</h5></mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-paginate v-model="models.pageNumber" :total="20"></mn-paginate>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item><h5>total 1</h5></mn-card-item>
        <mn-card-item>
          <mn-card-body>
            <mn-paginate v-model="models.pageNumber2" :total="1"></mn-paginate>
          </mn-card-body>
        </mn-card-item>
        <mn-card-item>
          <mn-card-body>
            {{ models }}
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-column>
  </mn-columns>
</template>

<script>
  import core from 'vue-human/suites/core'
  import paginateSuits from 'vue-human/suites/paginate'

  export default {
    components: {
      ...core.map(),
      ...paginateSuits.map()
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
