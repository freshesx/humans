<template>
  <div>
    <mn-nav-bar>
      <mn-nav-bar-back slot="prefix">返回</mn-nav-bar-back>
      <mn-nav-bar-title slot="body">Humans</mn-nav-bar-title>
      <div slot="suffix">
        Testing
      </div>
    </mn-nav-bar>
  </div>
</template>

<script>
  import { navBar } from '@humans/nav-bar'

  export default {
    components: {
      ...navBar
    },
    data () {
      return {
        icons: {
          keypad: require('vue-human-icons/js/ios/keypad')
        }
      }
    }
  }
</script>
