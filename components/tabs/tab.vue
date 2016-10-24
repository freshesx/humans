<template>
  <div class="bar-tab">
    <div class="bar-tab-lists">
      <div class="bar-tab-items">
        <mn-tab-item v-for="tab in tabs" :tab="tab"></mn-tab-item>
      </div>
    </div>
    <div class="bar-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: []
      }
    },
    mounted: function () {
      this.$children.forEach(tab => this.tabs.push(tab))
      console.log(this.tabs)
    }
  }
</script>
