<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-table :items="tableItems | updateItems" :columns="tableColumns">
      <template scope="scope" slot="cover">
        <img :src="scope.item.cover" alt="scope.cover.title" height="80">
      </template>
    </mn-table>
  </page>
</template>

<script>
  import table from 'vue-human/suites/table'
  import tableColumns from './tableColumns'
  import axios from 'axios'
  import isUndefined from 'lodash/isUndefined'

  export default {
    components: {
      ...table.map()
    },
    data () {
      return {
        tableColumns,
        tableItems: undefined
      }
    },
    methods: {
      async fetchMovie (start, count) {
        const response = await axios.get('/api/movie/in_theaters')
        this.tableItems = response.data.subjects
      }
    },
    created () {
      this.fetchMovie()
    },
    filters: {
      updateItems (items) {
        if (isUndefined(items)) return undefined
        return items.map(item => {
          return {
            cover: item.images.small,
            id: item.id,
            title: item.title,
            rating: item.rating.average,
            tags: item.genres.join(', '),
            year: item.year
          }
        })
      }
    }
  }
</script>
