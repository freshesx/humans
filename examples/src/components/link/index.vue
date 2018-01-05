<template>
  <div>
    <h5>Hypertext link</h5>
    <mn-link theme="primary" :to="{ name: 'icon' }" :icon="icons.cart" block margin>Link</mn-link>
    <mn-link theme="warning" href="http://github.com/freshesx" :icon="icons.github" size="sm">Github Small Link</mn-link>
  </div>
</template>

<script>
  import { link } from '@humans/link'

  export default {
    components: {
      ...link
    },
    data () {
      return {
        icons: {
          cart: require('@freshes/icons/js/ios/cart'),
          github: require('@freshes/icons/js/iconic/social-github')
        }
      }
    }
  }
</script>
