<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Tab Bar</div>
    </div>
    <mn-tab-bar>
      <mn-tab-item title="首页" icon="ios-home" @tab-click="router('/')"></mn-tab-item>
      <mn-tab-item title="首页" active @tab-click="flag = 1"></mn-tab-item>
      <mn-tab-item icon="ios-home" @tab-click="flag = 2"></mn-tab-item>
    </mn-tab-bar>
    <div class="tab-card" v-if="flag == 1">
      <p>
        hello
      </p>
    </div>
    <div class="tab-card" v-if="flag == 2">
      <p>
        world
      </p>
    </div>
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
