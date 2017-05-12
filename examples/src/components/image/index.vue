<template>
  <mn-scroller>
    <mn-container>
      <mn-section>
        <mn-columns>
          <mn-column tablet="10, 1" desktop="8, 2">
            <mn-letter>
              <mn-letter-body>
                <h1>Hi</h1>
                <small>I am Vue Human!</small>
              </mn-letter-body>
            </mn-letter>

            <mn-card>
              <mn-card-media>
                <mn-image :srcset="imageSets"></mn-image>
              </mn-card-media>
            </mn-card>
          </mn-column>
        </mn-columns>
      </mn-section>
    </mn-container>
  </mn-scroller>
</template>

<script>
  import core from 'vue-human/suites/core'
  import image from 'vue-human/suites/image'

  export default {
    components: {
      ...core.map(),
      ...image.map()
    },
    data () {
      return {
        imageSets: [
          { max: 768, src: 'https://ois1yok9v.qnssl.com/test-mobile.jpg', scale: 400 / 600 },
          { min: 768, src: 'https://ois1yok9v.qnssl.com/test-desktop.jpg', scale: 1200 / 600 }
        ]
      }
    }
  }
</script>
