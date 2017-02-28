<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        全选 (0)
      </mn-card-prefix>
    </mn-card-item>
    <mn-loading-icon v-if="loading"></mn-loading-icon>
    <slot v-if="!loading">没有找到合适的记录</slot>
  </mn-card>
</template>

<script>
  import Element from '../../util/element'

  export default new Element({
    name: 'mn-cell',
    data () {
      return {
        loading: false
      }
    },
    methods: {
      update (callback) {
        this.loading = true
        callback.apply(this, [this.next])
      },
      next () {
        this.loading = false
      }
    }
  })
</script>

<style lang="scss">
  // component scss
</style>
