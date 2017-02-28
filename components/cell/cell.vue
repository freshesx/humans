<template>
  <mn-card>
    <mn-card-item>
      <mn-card-prefix>
        全选 (0)
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
