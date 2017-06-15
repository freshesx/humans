<template>
  <page>
    <mn-letter>
      <mn-letter-body><h1>Slide Bar</h1></mn-letter-body>
    </mn-letter>

    <mn-section>
      <mn-slide-bar>
        <mn-slide-bar-item v-for="(picture, key) in pictures" :key="key">
          <img :src="picture.src">
        </mn-slide-bar-item>
      </mn-slide-bar>
    </mn-section>
  </page>
</template>

<script>
  import slideBar from 'vue-human/suites/slideBar'

  export default {
    components: {
      ...slideBar.map()
    },
    data () {
      return {
        pictures: [
          { src: 'https://ois1yok9v.qnssl.com/home-banner-1.jpg' },
          { src: 'https://ois1yok9v.qnssl.com/home-banner-2.jpg' },
          { src: 'https://ois1yok9v.qnssl.com/home-banner-3.jpg' }
        ]
      }
    }
  }
</script>
