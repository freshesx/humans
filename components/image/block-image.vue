<template>
  <div :class="[ `${cssPrefix}block-image` ]" ref="container">
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
          ? $(this.$refs.container).width() / scale
          : 'auto'

        $(this.$refs.container).height(height)
      }
    },
    mounted () {
      readyAndResize(() => {
        this.setDefaultHeight()
      })
    }
  }
</script>
