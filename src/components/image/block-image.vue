<template>
  <div class="block-image" v-el:container>
    <img :src="link" :alt="alt" :title="title">
  </div>
</template>

<script>
  import Image from './image'
  import $ from 'jquery'
  import { readyAndResize } from '../util/dom'

  export default {
    mixins: [ Image ],
    methods: {
      setDefaultHeight () {
        const scale = this.getViewImage().scale
        const height = scale
          ? $(this.$els.container).width() / scale
          : 'auto'

        $(this.$els.container).height(height)
      }
    },
    ready () {
      readyAndResize(() => {
        this.setDefaultHeight()
      })
    }
  }
</script>

<style lang="scss">
  .block-image {
    overflow: hidden;
    background: #eee;
    > img {
      width: 100%;
      display: block;
    }
  }
</style>
