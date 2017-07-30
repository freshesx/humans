<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-table-tool>
      <mn-columns>
        <mn-column desktop="4">
          <mn-table-filter label="影片名称">
            <mn-input v-model="models.title" placeholder="搜索名称"></mn-input>
          </mn-table-filter>
        </mn-column>
        <mn-column desktop="8">
          <mn-table-filter label="标签">
            <div>
              <mn-tag :key="i" v-for="i in 2" :name="i === 2 ? 'black-lightest' : 'gray-darkest'">标签 {{ i }}</mn-tag>
            </div>
          </mn-table-filter>
        </mn-column>
      </mn-columns>
      <template slot="action">
        <mn-btn theme="primary" size="sm">查询</mn-btn>
        <mn-btn theme="secondary-link" size="sm">导出 EXCEL</mn-btn>
      </template>
    </mn-table-tool>

    <mn-table-group>
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

      <template slot="action">
        <mn-btn theme="primary" size="sm">新建影片</mn-btn>
        <mn-btn theme="secondary-link" size="sm">批量导入</mn-btn>
      </template>

      <template slot="view">
        <mn-table-count :count="count" @changeCount="onCount"></mn-table-count>
        <mn-table-column :columns="tableColumns" @changeHide="onHide"></mn-table-column>
        <mn-table-view :size.sync="tableSize"></mn-table-view>
      </template>

      <template slot="paginate">
        <mn-table-paginate :currentPage="currentPage" :totalPages="totalPages" @changePage="onPage"></mn-table-paginate>
      </template>
    </mn-table-group>
  </page>
</template>

<script>
  import table from 'vue-human/suites/table'
  import tag from 'vue-human/suites/tag'
  import input from 'vue-human/suites/input'
  import tableColumns from './tableColumns'
  import axios from 'axios'
  import isUndefined from 'lodash/isUndefined'

  export default {
    components: {
      ...table.map(),
      ...tag.map(),
      ...input.map()
    },
    data () {
      return {
        tableColumns,
        tableItems: undefined,
        tableSize: 'sm',
        selections: [],
        start: 0,
        total: 0,
        count: 20,
        models: {
          title: undefined
        }
      }
    },
    computed: {
      currentPage () {
        return Math.ceil(this.start / this.count) + 1
      },
      totalPages () {
        return Math.ceil(this.total / this.count)
      }
    },
    methods: {
      async fetchMovie (start, count) {
        console.log('start', start, count)
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
      onCount (count) {
        this.fetchMovie(0, count)
      },
      onPage (currentPage) {
        // start 为 查询的下标数
        // count 为 查询多少条结果
        // currentPage 为当前页数，所以 currentPage 要转化成相应的 start
        this.fetchMovie((currentPage - 1) * this.count, this.count)
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
