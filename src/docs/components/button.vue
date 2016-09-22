<template>
  <div>
    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>Button</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <mn-btn type="primary">Confirm</mn-btn>
          <mn-btn type="warning">Are you sure?</mn-btn>
          <mn-btn type="error">Cancel</mn-btn>
          <mn-btn type="secondary">Help</mn-btn>
          <mn-btn type="inverse">Off</mn-btn>
        </mn-card-block>
      </mn-card>
    </section>

    <section class="section">
      <mn-card>
        <mn-card-heading>
          <mn-card-title>Inline Button</mn-card-title>
        </mn-card-heading>
        <mn-card-block>
          <mn-btn type="primary" inline>Confirm</mn-btn>
          <mn-btn type="warning" inline>Sure?</mn-btn>
          <mn-btn type="error" inline loading>Off</mn-btn>
        </mn-card-block>
      </mn-card>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>
