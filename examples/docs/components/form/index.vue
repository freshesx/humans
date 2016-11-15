<template>
  <mn-scroller
    save
    scrollToTop>
    <div class="section">
      <mn-letter>
        <h1>Form</h1>
        <small>input, radio, switch, select</small>
      </mn-letter>

      <mn-cols>
        <mn-col query="sm-6">
          <form-radio></form-radio>
          <form-basic></form-basic>
          <form-switch></form-switch>
          <form-select></form-select>
          <mn-btn type="primary" block>Submit</mn-btn>
        </mn-col>
      </mn-cols>
    </div>
  </mn-scroller>
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
