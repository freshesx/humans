<template>
  <mn-card>
    <mn-card-item>Outline Button</mn-card-item>
    <mn-card-item>
      <mn-card-body>
        <mn-btn :icon="iosNaviconRound" class="has-two-margin-bottom" type="primary-outline" margin>Confirm</mn-btn>
        <mn-btn :icon="iosNaviconRound" class="has-two-margin-bottom" type="warning-outline" loading margin></mn-btn>
        <mn-btn class="has-two-margin-bottom" type="primary-outline" size="sm" margin>Confirm</mn-btn>
        <mn-btn type="error-outline" block loading margin>Error</mn-btn>
      </mn-card-body>
    </mn-card-item>
  </mn-card>
</template>

<script>
  import iosNaviconRound from 'vue-human-icons/js/iconic/navicon-round'

  export default {
    data () {
      return {
        iosNaviconRound
      }
    }
  }
</script>
