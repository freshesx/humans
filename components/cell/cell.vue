<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        <cell-icon></cell-icon> 全选 (0)
      </mn-card-prefix>
    </mn-card-item>
    <!-- Loading -->
    <mn-card-item v-if="loading">
      <mn-card-body :class="'has-center-text'">
        <mn-loading-icon></mn-loading-icon>
      </mn-card-body>
    </mn-card-item>
    <mn-card-item v-if="contents.length === 0 && !loading">
      <mn-card-body :class="'has-center-text'">
        <p>没有找到合适的记录</p>
      </mn-card-body>
    </mn-card-item>

    <mn-cell-item type="link" v-for="item in contents" :key="item.id" @click="clickItem($event, item)">
      <mn-card-body>{{ item.name }}</mn-card-body>
      <mn-card-suffix>
        suffix
      </mn-card-suffix>
    </mn-cell-item>
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
    props: {
      contents: {
        type: Array,
        default: () => []
      }
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
      },
      clickItem (event, item) {
        console.log('item')
        this.$emit('clickItem', event, item)
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
