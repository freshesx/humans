<template>
  <mn-card-wrapper>
    <strong slot="header">Input Number</strong>
    <mn-card slot="body">
      <mn-card-item>
        <div slot="body">
          nihao: {{ counter }}
        </div>
        <mn-form-counter slot="action" :min="1" :max="16" :step="2" v-model="counter"></mn-form-counter>
      </mn-card-item>
    </mn-card>
  </mn-card-wrapper>
</template>

<script>
  export default {
    data () {
      return {
        counter: 1
      }
    }
  }
</script>
