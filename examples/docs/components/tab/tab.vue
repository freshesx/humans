<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Tab Bar</div>
    </div>
    <mn-tab-bar>
      <mn-tab-pane title="首页" icon="ios-home" link="/"></mn-tab-pane>
      <mn-tab-pane title="首页" link="/"></mn-tab-pane>
      <mn-tab-pane icon="ios-home" link="/"></mn-tab-pane>
    </mn-tab-bar>
    <mn-tab-bar>
      <mn-tab-pane title="首页" icon="ios-home">1</mn-tab-pane>
      <mn-tab-pane title="首页">2</mn-tab-pane>
      <mn-tab-pane icon="ios-home">3</mn-tab-pane>
    </mn-tab-bar>
  </div>
</template>

<script>
  import router from '../../../router'
  export default {
    data () {
      return {
        flag: 1
      }
    },
    methods: {
      router: function (link) {
        router.push({ path: link })
      }
    }
  }
</script>

<style scoped>
  .tab-card{
    padding-left: 1rem;
    font-size: 0.8rem;
    color: #999;
  }
</style>
