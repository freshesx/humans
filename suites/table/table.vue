<template>
  <div class="mn-table">
    <mn-table-header :columns="columns"></mn-table-header>
  </div>
</template>

<script>
  import Element from '../../utils/Element'
  import tableHeader from './tableHeader'

  export default new Element({
    name: 'mn-table',
    components: {
      ...tableHeader.inject()
    },
    props: {
      // undefined 为加载状态、空数组为无数据、非空数组展示内容
      items: Array,
      choices: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      emitActions () {

      },
      emitChoices () {

      }
    }
  })
</script>

<style lang="scss">

</style>
