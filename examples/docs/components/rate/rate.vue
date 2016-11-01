<template>
  <div class="section">
    <mn-card>
      <mn-card-item>Read only rate component. Support for half-star.</mn-card-item>
      <mn-card-item>
        <mn-rate :default="3.5" disable></mn-rate>
        <mn-rate :default="6" disable :max="7"></mn-rate>
      </mn-card-item>
    </mn-card>
    <mn-card>
      <mn-card-item>Clickable rate</mn-card-item>
      <mn-card-item>
        <mn-rate></mn-rate>
        <mn-rate
          :colors="['#eee', 'rgb(255, 45, 85)']"
          :default="3.5"
          @change="show"
          ></mn-rate>
      </mn-card-item>
    </mn-card>
  </div>
</template>

<script>
  export default {
    methods: {
      show: function (val) {
        console.log(val)
      }
    }
  }
</script>
