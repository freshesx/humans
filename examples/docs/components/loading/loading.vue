<template>
  <div class="">
    <mn-card>
      <mn-card-item>Loading in wrap</mn-card-item>
      <mn-card-item v-mn-loading="true">
        <div class="demo"></div>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Loading in full screen, will stop after 3s.</mn-card-item>
      <mn-card-item v-mn-loading.fullscreen="loading">
        <mn-btn type="primary" block @click.native="openFullScreen">Add Loading</mn-btn>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      openFullScreen: function () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
      }
    }
  }
</script>

<style scoped>
  .demo{
    height: 200px;
  }
</style>
