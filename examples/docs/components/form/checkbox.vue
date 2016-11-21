<template>
  <mn-card-wrapper>
    <strong slot="header">Checkbox</strong>
    <mn-form-checkbox-card slot="body" :options="radio" v-model="radioValue"></mn-form-checkbox-card>
    <template slot="footer">
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
        radioValue: []
      }
    }
  }
</script>
