<template>
  <div class="full-page">
    <mn-slide-box>
      <mn-slide-box-item>
        <div class="list">1</div>
      </mn-slide-box-item>
      <mn-slide-box-item>
        <div class="list">2</div>
      </mn-slide-box-item>
      <mn-slide-box-item>
        <div class="list">3</div>
      </mn-slide-box-item>
      <mn-slide-box-item>
        <div class="list">4</div>
      </mn-slide-box-item>
      <mn-slide-box-item>
        <div class="list">5</div>
      </mn-slide-box-item>
    </mn-slide-box>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .full-page{
    width: 100vw;
    margin: 0 -1rem;
  }
  .list{
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 3px;
    line-height: 200px;
    text-align: center;
    color: #999;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
</style>
