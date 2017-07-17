<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-table :items="tableItems | updateItems"
      :columns="tableColumns"
      :selections.sync="selections"
      @changeSort="onSort"
      @changeHighlight="onHighlight">
      <template scope="scope" slot="cover">
        <img :src="scope.item.cover" alt="scope.cover.title" height="80" style="display: block;">
      </template>
      <template scope="scope" slot="tags">
        <mn-tag bg="#ddd" v-for="(tag, key) in scope.item.tags" :key="key">{{ tag }}</mn-tag>
      </template>
    </mn-table>
  </page>
</template>

<script>
  import table from 'vue-human/suites/table'
  import tag from 'vue-human/suites/tag'
  import tableColumns from './tableColumns'
  import axios from 'axios'
  import isUndefined from 'lodash/isUndefined'

  export default {
    components: {
      ...table.map(),
      ...tag.map()
    },
    data () {
      return {
        tableColumns,
        tableItems: undefined,
        selections: []
      }
    },
    methods: {
      async fetchMovie (start, count) {
        const response = await axios.get('/api/movie/in_theaters')
        this.tableItems = response.data.subjects
      },
      onSort (sortName, column) {
        this.$set(column, 'sort', sortName)
      },
      onHighlight (highlight, column) {
        this.$set(column, 'highlight', highlight)
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
            $key: item.id,
            cover: item.images.small,
            title: item.title,
            director: item.directors.map(item => item.name).join(', '),
            actor: item.casts.map(item => item.name).join(', '),
            rating: item.rating.average,
            tags: item.genres,
            year: item.year
          }
        })
      }
    }
  }
</script>
