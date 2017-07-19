<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <div class="table-tools">
      <div>
        <mn-table-column :columns="tableColumns" @changeHide="onHide"></mn-table-column>
      </div>
      <div style="flex: 1; margin-left: 0.5rem;">
        <mn-table-view :size.sync="tableSize"></mn-table-view>
      </div>
      <div>
        <mn-table-paginate :start="start" :total="total" :count="count" @change="onPaginate"></mn-table-paginate>
      </div>
    </div>

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
        start: 0,
        total: 0,
        count: 20
      }
    },
    methods: {
      async fetchMovie (start, count) {
        this.tableItems = undefined
        const response = await axios.get('/api/movie/in_theaters', {
          params: { start, count }
        })
        this.tableItems = response.data.subjects
        this.total = response.data.total
        this.start = response.data.start
        this.count = response.data.count
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
      onPaginate (start, count) {
        console.log(start, count)
        this.fetchMovie(start, count)
      }
    },
    created () {
      this.fetchMovie(this.start, this.count)
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

<style lang="scss" scoped>
  .table-tools {
    display: flex;
    justify-content: space-between;
  }
</style>
