<template>
  <section class="section">
    <div class="card">
      <div class="card-header">
        <div class="card-title">Block Button</div>
      </div>
      <div class="card-block">
        <div class="cols">
          <div class="col is-sm-6">
            <mn-btn class="is-primary is-block">Confirm</mn-btn>
            <mn-btn class="is-warning is-block">Sure?</mn-btn>
            <mn-btn class="is-error is-block" loading>Off</mn-btn>
          </div>
          <div class="col is-sm-6">
            <mn-pre :code="code"></mn-pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import code from './block-code'

  export default {
    data () {
      return {
        code
      }
    }
  }
</script>
