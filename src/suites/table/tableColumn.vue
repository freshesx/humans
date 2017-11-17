<template>
  <div class="mn-table-column">
    <div class="mn-table-column-control" @click="onOpenModal">
      <mn-icon :name="icon" :scale="0.8"></mn-icon>
    </div>

    <mn-modal :visible.sync="showModal">
      <mn-scroller>
        <mn-section>
          <mn-card>
            <mn-card-item>
              <h5>调整表格列的显示</h5>
            </mn-card-item>
            <mn-card-item v-for="(column, key) in computedColumns" :key="key">
              <mn-card-prefix>
                <mn-table-check :checked="isOneSelected(column)" @click="onOneSelected(column)"></mn-table-check>
              </mn-card-prefix>
              <mn-card-body>
                {{ column.title }}
              </mn-card-body>
            </mn-card-item>
          </mn-card>
        </mn-section>
      </mn-scroller>
    </mn-modal>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import modal from 'vue-human/suites/modal'
  import tableCheck from './_tableCheck'

  export default new Element({
    name: 'mn-table-column',
    components: {
      ...modal.map(),
      ...tableCheck.insert()
    },
    props: {
      icon: {
        default () {
          return require('vue-human-icons/js/android/options')
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        showModal: false
      }
    },
    computed: {
      computedColumns () {
        return this.columns.filter(column => column.name !== '$action')
      }
    },
    methods: {
      onOpenModal () {
        this.showModal = true
      },
      onCloseModal () {
        this.showModal = false
      },
      onOneSelected (column) {
        this.$emit('changeHide', !column.hide, column)
      },
      isOneSelected (column) {
        return !column.hide
      }
    }
  })
</script>

<style lang="scss">
  .mn-table-column {
    display: flex;
  }

  .mn-table-column-control {
    width: 2.25rem;
    height: 2.25rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition-duration: 500ms;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.075);
  }
</style>
