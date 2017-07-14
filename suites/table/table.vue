<template>
  <div>nihao</div>
</template>

<script>
  import Element from '../utils/Element'

  export default new Element({
    name: 'mn-table',
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
