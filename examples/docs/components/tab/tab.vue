<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Tab Bar</div>
    </div>
    <mn-tab-bar>
      <mn-tab-pane title="Home" icon="ios-home" link="/"></mn-tab-pane>
      <mn-tab-pane title="Home" link="/components/icon"></mn-tab-pane>
      <mn-tab-pane icon="ios-home" link="/components/popup"></mn-tab-pane>
    </mn-tab-bar>
    <mn-tab-bar :index="2">
      <mn-tab-pane title="Home" icon="ios-home" show>
        <p class="example">hello</p>
      </mn-tab-pane>
      <mn-tab-pane title="Home" show>
        <p class="example">world</p>
      </mn-tab-pane>
      <mn-tab-pane icon="ios-home" show>
        <p class="example">my friend</p>
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
