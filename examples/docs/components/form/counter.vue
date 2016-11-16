<template>
  <mn-card-wrapper>
    <strong slot="header">Input Number</strong>
    <mn-card slot="body">
      <mn-card-item>
        <mn-cols slot="body">
          <mn-col query="xs-4">nihao</mn-col>
          <mn-col query="xs-6">
            <mn-form-counter :min="3" :max="16" :step="2" @change="change"></mn-form-counter>
          </mn-col>
        </mn-cols>
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
