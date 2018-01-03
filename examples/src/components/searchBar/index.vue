<template>
  <mn-section>
      <mn-card>
        <mn-card-item>
          <mn-card-body>
            <mn-search-bar>
              <mn-input v-model="searchText" size="sm" placeholder="Search"></mn-input>
            </mn-search-bar>
          </mn-card-body>
        </mn-card-item>
      </mn-card>
    </mn-section>
</template>

<script>
  import { searchBar } from '@humans/search-bar'
  import { input } from '@humans/input'
  import { section } from '@humans/section'
  import { card } from '@humans/card'

  export default {
    components: {
      ...searchBar,
      ...input,
      ...section,
      ...card
    },
    data () {
      return {
        searchText: undefined
      }
    }
  }
</script>
