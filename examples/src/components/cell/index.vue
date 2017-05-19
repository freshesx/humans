<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Cell</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-cell :contents="contents" :selections.sync="selections">
        <mn-card-suffix slot="action" action>
          <mn-btn theme="secondary" size="sm">删除</mn-btn>
        </mn-card-suffix>
        <template scope="scope">
          <mn-cell-item type="link" :item="scope.item">
            <mn-card-body>
              <h2>{{ scope.item.name }} <small>{{ scope.item.zip }}</small></h2>
            </mn-card-body>
          </mn-cell-item>
        </template>
      </mn-cell>
    </mn-section>
  </page>
</template>

<script>
  import cell from 'vue-human/suites/cell'
  import { getDistrict } from './api'

  export default {
    components: {
      ...cell.map()
    },
    data () {
      return {
        contents: undefined,
        selections: []
      }
    },
    methods: {
      update () {
        getDistrict().then(response => {
          this.contents = response
        })
      }
    },
    mounted () {
      this.update()
    }
  }
</script>
