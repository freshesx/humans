<template>
  <mn-page>
    <mn-scroller>
      <mn-container>
        <mn-columns>
          <mn-column tablet="8, 2" desktop="6, 3">
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
      </mn-container>
    </mn-scroller>
  </mn-page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import carouselSuits from 'vue-human/suites/carousel'

  export default {
    components: {
      ...core.map(),
      ...carouselSuits.map()
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
