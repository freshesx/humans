<template>
  <div class="section">

    <div class="letter">
      <div class="letter-body">
        <h1 class="letter-title">Popup</h1>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Popup</div>
      </div>
      <div class="card-block">
        <mn-btn class="is-primary is-block" @click.prevent="openPopup">Open popup</mn-btn>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Confirm</div>
      </div>
      <div class="card-block">
        <mn-btn class="is-warning is-block" @click.prevent="openConfirm">Open confirm</mn-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Popup from './popup'
  import Confirm from './confirm'

  export default {
    methods: {
      openPopup () {
        this.popup = this.$element(Popup)
        this.popup.$set('show', true)
      },
      openConfirm () {
        this.confirm = this.$element(Confirm)
        this.confirm.$set('show', true)
      }
    }
  }
</script>
