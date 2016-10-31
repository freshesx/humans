<template>
  <div class="section">
    <mn-card>
      <mn-card-item>Tabs with router</mn-card-item>
      <mn-card-item>
        <mn-tab-bar @tab-click="routerpush">
          <mn-tab-pane title="Home" icon="ios-home" link="/"></mn-tab-pane>
          <mn-tab-pane title="Icon" link="/components/icon"></mn-tab-pane>
          <mn-tab-pane icon="social-buffer" link="/components/popup"></mn-tab-pane>
        </mn-tab-bar>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Tabs with contents</mn-card-item>
      <mn-card-item>
        <mn-tab-bar :selected="2">
          <mn-tab-pane title="Home" icon="ios-home" show>
            <p class="example">This is title & icon.</p>
          </mn-tab-pane>
          <mn-tab-pane title="Home" show>
            <p class="example">This is only title.</p>
          </mn-tab-pane>
          <mn-tab-pane icon="ios-home" show>
            <p class="example">This is only icon.</p>
          </mn-tab-pane>
        </mn-tab-bar>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  import router from '../../../router'
  export default {
    methods: {
      routerpush: function (tab) {
        router.push({ path: tab.link })
      }
    }
  }
</script>

<style scoped>
  .example{
    font-size: 0.8rem;
    color: #999;
  }
</style>
