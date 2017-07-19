<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-table-view :size.sync="tableSize"></mn-table-view>

    <mn-table-column :columns="tableColumns" @changeHide="onHide"></mn-table-column>

    <mn-table :items="tableItems | updateItems"
      :columns="tableColumns"
      :selections.sync="selections"
      :size="tableSize"
      @clickRow="onRow"
      @clickAction="onAction"
      @changeSort="onSort"
      @changeHighlight="onHighlight">
      <template scope="scope" slot="cover">
        <img :src="scope.item.cover" alt="scope.cover.title" height="80" style="display: block;">
      </template>
      <template scope="scope" slot="tags">
        <mn-tag bg="#ddd" v-for="(tag, key) in scope.item.tags" :key="key">{{ tag }}</mn-tag>
      </template>
    </mn-table>

    <mn-paginate :total="total" v-model="page" @input="onPaginate"></mn-paginate>
  </page>
</template>

<script>
  import table from 'vue-human/suites/table'
  import tag from 'vue-human/suites/tag'
  import paginate from 'vue-human/suites/paginate'
  import tableColumns from './tableColumns'
  import axios from 'axios'
  import isUndefined from 'lodash/isUndefined'

  export default {
    components: {
      ...table.map(),
      ...tag.map(),
      ...paginate.map()
    },
    data () {
      return {
        tableColumns,
        tableItems: undefined,
        tableSize: 'sm',
        selections: [],
        page: 1,
        total: 1,
        rows: 20
      }
    },
    methods: {
      async fetchMovie (page, rows) {
        this.tableItems = undefined
        const response = await axios.get('/api/movie/in_theaters', {
          params: {
            start: (page - 1) * rows
          }
        })
        const { count, start, total, subjects } = response.data
        this.tableItems = subjects
        this.page = Math.ceil((start + 1) / count)
        this.total = Math.ceil(total / count)
      },
      onSort (sortName, column) {
        this.$set(column, 'sort', sortName)
      },
      onHighlight (highlight, column) {
        this.$set(column, 'highlight', highlight)
      },
      onHide (hide, column) {
        this.$set(column, 'hide', hide)
      },
      onAction (name, item) {
        console.log('onAction', name, item)
      },
      onRow (item, event) {
        console.log('onRow', item)
      },
      onPaginate (page) {
        this.fetchMovie(page, this.rows)
      }
    },
    created () {
      this.fetchMovie(this.page, this.rows)
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
