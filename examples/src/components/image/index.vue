<template>
  <mn-scroller>
    <mn-section>
      <mn-cols>
        <mn-col tablet="ten, one" desktop="eight, two">
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
        </mn-col>
      </mn-cols>
    </mn-section>
  </mn-scroller>
</template>

<script>
  import scroller from 'vue-human/components/scroller/scroller'
  import section from 'vue-human/components/section/section'
  import cols from 'vue-human/components/column/cols'
  import col from 'vue-human/components/column/col'
  import letter from 'vue-human/components/letter/letter'
  import letterBody from 'vue-human/components/letter/letter-body'
  import card from 'vue-human/components/card/card'
  import cardMedia from 'vue-human/components/card/card-media'
  import image from 'vue-human/components/image/image'

  export default {
    components: {
      ...scroller.inject(),
      ...section.inject(),
      ...cols.inject(),
      ...col.inject(),
      ...letter.inject(),
      ...letterBody.inject(),
      ...card.inject(),
      ...cardMedia.inject(),
      ...image.inject()
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
