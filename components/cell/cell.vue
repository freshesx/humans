<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        <cell-icon></cell-icon> 全选 (0)
      </mn-card-prefix>
    </mn-card-item>
    <mn-card-item v-if="loading">
      <mn-card-body :class="'has-center-text'">
        <mn-loading-icon></mn-loading-icon>
      </mn-card-body>
    </mn-card-item>
    <mn-card-item v-if="!$slots.default && !loading">
      <mn-card-body :class="'has-center-text'">
        <p>没有找到合适的记录</p>
      </mn-card-body>
    </mn-card-item>
    <slot v-if="$slots.default && !loading"></slot>
  </mn-card>
</template>

<script>
  import Element from '../../util/element'
  import CellIcon from './cell-icon'

  export default new Element({
    name: 'mn-cell',
    components: {
      CellIcon
    },
    data () {
      return {
        loading: false,
        selections: []
      }
    },
    mounted () {
      console.log(this._uid)
    },
    methods: {
      update (callback) {
        this.loading = true
        callback.apply(this, [this.next])
      },
      next () {
        this.loading = false
      },
      toggleSelection (id) {
        console.log('id', id)
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
