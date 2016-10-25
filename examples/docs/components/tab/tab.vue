<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Tab Bar</div>
    </div>
    <mn-tab-bar :defaultIndex="0">
      <mn-tab-pane title="首页" icon="ios-home" link="/"></mn-tab-pane>
      <mn-tab-pane title="首页" link="/"></mn-tab-pane>
      <mn-tab-pane icon="ios-home" link="/"></mn-tab-pane>
    </mn-tab-bar>
    <mn-tab-bar :defaultIndex="0">
      <mn-tab-pane title="首页" icon="ios-home" show>
        <p class="example">hello</p>
      </mn-tab-pane>
      <mn-tab-pane title="首页" show>
        <p class="example">world</p>
      </mn-tab-pane>
      <mn-tab-pane icon="ios-home" show>
        <p class="example">!</p>
      </mn-tab-pane>
    </mn-tab-bar>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .example{
    font-size: 0.8rem;
    color: #999;
  }
</style>
