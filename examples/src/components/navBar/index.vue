<template>
  <page>
    <mn-letter>
      <mn-letter-body>
        <h1>Nav Bar</h1>
      </mn-letter-body>
    </mn-letter>

    <mn-nav-bar>
      <mn-nav-bar-back slot="prefix">返回</mn-nav-bar-back>
      <mn-nav-bar-title slot="body">HumanUI</mn-nav-bar-title>
      <div slot="suffix">
        <mn-icon :name="icons.keypad"></mn-icon>
      </div>
    </mn-nav-bar>
  </page>
</template>

<script>
  import navBar from 'vue-human/suites/navBar'

  export default {
    components: {
      ...navBar.map()
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
