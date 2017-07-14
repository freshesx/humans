<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Table</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-table :columns="tableColumns"></mn-table>
  </page>
</template>

<script>
  import table from 'vue-human/suites/table'
  import tableColumns from './tableColumns'

  export default {
    components: {
      ...table.map()
    },
    data () {
      return {
        tableColumns
      }
    }
  }
</script>
