<template>
  <div>
    <h5>Total 20 (Current {{ models.pageNumber }})</h5>
    <mn-paginate v-model="models.pageNumber" :total="20"></mn-paginate>

    <h5>Total 1 (Current {{ models.pageNumber2 }})</h5>
    <mn-paginate v-model="models.pageNumber2" :total="1"></mn-paginate>
  </div>
</template>

<script>
  import { paginate } from '@humans/paginate'

  export default {
    components: {
      ...paginate
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
