<template>
  <div class="container">
    <mn-swipe
      :repeat-item="pictures"
      :start-index="startIndex"
      :loop="loop"
      :auto-play="autoPlay"
      :interval="interval"
      :threshold="threshold"
      :speed="speed"
      :before-scroll-start-fn="beforeScrollStartFn"
      :scroll-start-fn="scrollStartFn"
      :scroll-end-fn="scrollEndFn">
      <mn-swipe-item v-for="(item, index) in pictures" :key="index">
        <img :src="item.src" style="width: 100%;">
      </mn-swipe-item>
    </mn-swipe>
  </div>
</template>
<script>
import { swipe } from '@humans/swipe'

export default {
  components: {
    ...swipe
  },
  data () {
    return {
      pictures: [
        { src: 'https://ois1yok9v.qnssl.com/home-banner-1.jpg' }
      ],
      loop: true,
      autoPlay: true,
      interval: 4000,
      threshold: 0.3,
      speed: 400,
      startIndex: 1
    }
  },
  methods: {
    beforeScrollStartFn () {
      console.log('Before Scroll Start.')
    },
    scrollStartFn () {
      console.log('Scroll Start.')
    },
    scrollEndFn () {
      console.log('Scroll End.')
    }
  },
  mounted () {
    setTimeout(() => {
      this.pictures = [
        { src: 'https://ois1yok9v.qnssl.com/home-banner-1.jpg' },
        { src: 'https://ois1yok9v.qnssl.com/home-banner-2.jpg' },
        { src: 'https://ois1yok9v.qnssl.com/home-banner-3.jpg' }
      ]
    }, 3000)
  }
}
</script>
<style>
.container {
  /* transform: translateZ(0px); */
  box-shadow: 0 2px 9px #ffffff;
}
</style>


