<template>
  <div class="scoped-stage">
    <section class="p-x-2">
      <div class="card">
        <div class="card-block scoped-e-1">
          card block
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .scoped-stage {
    height: 600px;
    background: url(../../assets/bg.jpg) no-repeat 0 bottom;
    background-size: 100% auto;
  }
  .scoped-e-1 {
    height: 300px;
  }
</style>
