<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Search Bar</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-search-bar>
              <mn-input v-model="searchText" placeholder="Search"></mn-input>
            </mn-search-bar>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import searchBar from 'vue-human/suites/searchBar'
  import input from 'vue-human/suites/input'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...searchBar.map(),
      ...input.map(),
      page
    },
    data () {
      return {
        searchText: undefined
      }
    }
  }
</script>
