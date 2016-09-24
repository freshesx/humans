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

    <section class="section">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Block Button</div>
        </div>
        <div class="card-block">
          <div class="cols">
            <div class="col is-sm-6">
              <mn-btn type="primary" block>Confirm</mn-btn>
              <mn-btn type="warning" block>Sure?</mn-btn>
              <mn-btn type="error" block loading>Off</mn-btn>
            </div>
            <div class="col is-sm-6">
              <mn-pre :code="blockButtonCode"></mn-pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import blockButtonCode from '../codes/block-buttons'

  export default {
    data () {
      return {
        blockButtonCode
      }
    }
  }
</script>
