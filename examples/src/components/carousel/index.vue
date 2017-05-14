<template>
  <page>
    <mn-columns>
      <mn-column tablet="8, 2" desktop="6, 3">
        <mn-letter>
          <mn-letter-body>
            <h1>Carousel</h1>
          </mn-letter-body>
        </mn-letter>

        <mn-card>
          <mn-card-media>
            <mn-carousel>
              <mn-carousel-item v-for="item in pictures" :key="item">
                <img :src="item.src" style="width: 100%; display: block;">
              </mn-carousel-item>
            </mn-carousel>
          </mn-card-media>
        </mn-card>

        <mn-card>
          <mn-card-item>
            <mn-card-body>
              @todo How to use image component
            </mn-card-body>
          </mn-card-item>
        </mn-card>
      </mn-column>
    </mn-columns>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import carousel from 'vue-human/suites/carousel'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...carousel.map(),
      page
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
