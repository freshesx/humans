<template>
  <div>
    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>Button</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <mn-btn type="primary"><mn-icon name="menu"></mn-icon> Confirm</mn-btn>
          <mn-btn type="warning">Are you sure?</mn-btn>
          <mn-btn type="error">Cancel</mn-btn>
          <mn-btn type="secondary">Help</mn-btn>
          <mn-btn type="inverse" loading>Off</mn-btn>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>Block Button</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <mn-btn type="primary" block>Confirm</mn-btn>
          <mn-btn type="warning" block>Sure?</mn-btn>
          <mn-btn type="error" block loading>Off</mn-btn>
        </mn-card-block>
      </mn-card>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>
