<template>
  <div>
    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Button</div>
        </div>
        <div class="card-block">
          <mn-btn type="primary"><mn-icon name="menu"></mn-icon> Confirm</mn-btn>
          <mn-btn type="warning">Are you sure?</mn-btn>
          <mn-btn type="error">Cancel</mn-btn>
          <mn-btn type="secondary">Help</mn-btn>
          <mn-btn type="inverse" loading>Off</mn-btn>
        </div>
      </div>
    </section>

    <demo-block></demo-block>

    <demo-size></demo-size>
  </div>
</template>

<script>
  import DemoBlock from './block'
  import DemoSize from './size'

  export default {
    components: {
      DemoBlock,
      DemoSize
    }
  }
</script>
