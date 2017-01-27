<template>
  <div class="full-page">
    <mn-slide-bar>
      <mn-slide-bar-item>
        <div class="list one">1</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list one">2</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list one">3</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list one">4</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list one">5</div>
      </mn-slide-bar-item>
    </mn-slide-bar>
    <mn-slide-bar type="full" :maxWidth="500">
      <mn-slide-bar-item>
        <div class="list two">1</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list two">2</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list two">3</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list two">4</div>
      </mn-slide-bar-item>
      <mn-slide-bar-item>
        <div class="list two">5</div>
      </mn-slide-bar-item>
    </mn-slide-bar>
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
  .list.one{
    width: 200px;
  }
  .list.two{
    width: 100%;
  }
</style>
