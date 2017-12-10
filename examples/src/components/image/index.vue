<template>
  <div>
    <div style="width: 200px; margin: 2rem auto;">
      <mn-image :ratio="1"
        source="https://picpro-sz.34580.com/sz/ImageUrl/30557/300.jpeg"
        thumb="https://picpro-sz.34580.com/sz/ImageUrl/30557/20.jpeg"></mn-image>
    </div>
  </div>
</template>

<script>
  import image from '@humans/image'

  export default {
    components: Object.assign({}, image)
  }
</script>
