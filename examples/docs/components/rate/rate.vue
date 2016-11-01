<template>
  <div class="section">
    <mn-card>
      <mn-card-item>Read only rate component. Support for half-star.</mn-card-item>
      <mn-card-item>
        <mn-rate :default="3" disable></mn-rate>
        <mn-rate :default="3.5" disable></mn-rate>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Clickable rate</mn-card-item>
      <mn-card-item>
        <mn-rate @rate-click="hello"></mn-rate>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {
    methods: {
      hello: function (i) {
        console.log(i)
      }
    }
  }
</script>
