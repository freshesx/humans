<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Tab Bar</div>
    </div>
    <mn-tabBar>
      <mn-tabItem title="首页" icon="ios-home" :thisRouter="router" thisLink="/"></mn-tabItem>
      <mn-tabItem title="首页" active @click="flag = 1"></mn-tabItem>
      <mn-tabItem icon="ios-home" @click="flag = 2"></mn-tabItem>
    </mn-tabBar>
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
        router: router,
        flag: 1
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
