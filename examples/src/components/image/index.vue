<template>
  <page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Hi</h1>
          <small>I am Vue Human!</small>
        </mn-letter-body>
      </mn-letter>

      <mn-columns>
        <mn-column mobile="2" tablet="4" desktop="3" v-for="i in 100">
          <mn-card>
            <mn-card-media>
              <mn-image :ratio="1"
                source="https://picpro-sz.34580.com/sz/ImageUrl/30557/300.jpeg"
                thumb="https://picpro-sz.34580.com/sz/ImageUrl/30557/20.jpeg"></mn-image>
            </mn-card-media>
          </mn-card>
        </mn-column>
      </mn-columns>
    </mn-section>
  </page>
</template>

<script>
  import image from 'vue-human/suites/image'

  export default {
    components: {
      ...image.map()
    }
  }
</script>
