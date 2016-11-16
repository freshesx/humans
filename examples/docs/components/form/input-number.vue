<template>
  <mn-card-wrapper>
    <strong slot="header">Input Number</strong>
    <mn-card slot="body">
      <mn-card-item>
        <mn-input-number :min="3" :max="16" @change="change" :step="2"></mn-input-number>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    methods: {
      change: function (value) {
        console.log(value)
      }
    }
  }
</script>
