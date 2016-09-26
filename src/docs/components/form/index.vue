<template>
  <div>
    <section class="section">
      <div class="cols">
        <div class="col is-sm-6">
          <form-radio></form-radio>
          <form-basic></form-basic>
          <form-switch></form-switch>
          <form-select></form-select>
        </div>
      </div>
    </section>
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
