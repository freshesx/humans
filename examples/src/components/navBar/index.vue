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
    </mn-nav-bar>
  </page>
</template>

<script>
  import core from 'vue-human/suites/core'
  import navBar from 'vue-human/suites/navBar'
  import page from '../base/page'

  export default {
    components: {
      ...core.map(),
      ...navBar.map(),
      page
    }
  }
</script>
