<template>
  <div>
    <section class="section">
      <div class="cols">
        <div class="col is-sm-6">
          <form-radio></form-radio>
          <form-basic></form-basic>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import FormRadio from './radio'
  import FormBasic from './basic'

  export default {
    components: {
      FormRadio,
      FormBasic
    }
  }
</script>
