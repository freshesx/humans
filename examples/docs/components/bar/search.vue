<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Search Bar</div>
    </div>
    <mn-seachBar :keyEnter="search"></mn-seachBar>
  </div>
</template>

<script>
  export default {
    methods: {
      search: function () {
        console.log(1)
      }
    }
  }
</script>
