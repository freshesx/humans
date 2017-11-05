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
            <mn-carousel ref="carousel">
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
  import carousel from 'vue-human/suites/carousel'

  export default {
    components: {
      ...carousel.map()
    },
    data () {
      return {
        pictures: [
          { src: 'https://ois1yok9v.qnssl.com/home-banner-1.jpg' }
        ]
      }
    },
    mounted () {
      setTimeout(() => {
        // 异步修改图片数量，修改后重新设定 length
        this.pictures = [
          { src: 'https://ois1yok9v.qnssl.com/home-banner-1.jpg' },
          { src: 'https://ois1yok9v.qnssl.com/home-banner-2.jpg' },
          { src: 'https://ois1yok9v.qnssl.com/home-banner-3.jpg' }
        ]
        this.$refs.carousel.length = 3
      }, 2000)
    }
  }
</script>
