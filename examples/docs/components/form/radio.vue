<template>
  <mn-card-wrapper>
    <strong slot="header">Radio input</strong>
    <mn-form-radio slot="body" :options="radio" v-model="radioValue"></mn-form-radio>
    <template slot="footer">
      <mn-icon name="ios-information-outline"></mn-icon>
      Your choose: {{ radioValue }}
    </template>
  </mn-card-wrapper>
</template>

<script>
  export default {
    data () {
      return {
        radio: [
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' }
        ],
        radioValue: 'one'
      }
    }
  }
</script>
