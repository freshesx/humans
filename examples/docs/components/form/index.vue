<template>
  <div class="section">

    <div class="letter letter-bottom-bordered">
      <div class="letter-body">
        <h1>Form</h1>
        <small>input, radio, switch, select</small>
      </div>
    </div>

    <div class="cols">
      <div class="col is-sm-6">
        <form-radio></form-radio>
        <form-basic></form-basic>
        <form-switch></form-switch>
        <form-select></form-select>
        <mn-btn class="is-primary is-block">Submit</mn-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import FormRadio from './radio'
  import FormBasic from './basic'
  import FormSwitch from './switch'
  import FormSelect from './select'

  export default {
    components: {
      FormRadio,
      FormBasic,
      FormSwitch,
      FormSelect
    }
  }
</script>

<style lang="scss" scoped>
  .letter-bottom-bordered {
    border-bottom: solid 1px #e5e5e5;
    margin-bottom: 1rem;
  }
</style>
