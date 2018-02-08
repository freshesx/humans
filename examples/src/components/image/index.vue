<template>
  <div>
    <div style="width: 200px; margin: 2rem auto;">
      <mn-image
        :ratio="1"
        source="https://picpro-sz.34580.com/sz/ImageUrl/30557/300.jpeg"
        thumb="https://picpro-sz.34580.com/sz/ImageUrl/30557/20.jpeg"
      />
    </div>
  </div>
</template>

<script>
  import { MnImage } from '@freshes/human'

  export default {
    components: {
      MnImage
    }
  }
</script>
