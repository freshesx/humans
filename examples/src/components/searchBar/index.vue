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
  import searchBar from 'vue-human/suites/searchBar'
  import input from 'vue-human/suites/input'

  export default {
    components: {
      ...searchBar.map(),
      ...input.map()
    },
    data () {
      return {
        searchText: undefined
      }
    }
  }
</script>
