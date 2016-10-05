<template>
  <div class="section" transition="is-slide-left">

    <div class="letter">
      <div class="letter-body">
        <h1>Popup</h1>
        <small>popup, confirm, alerts, activity sheets</small>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Popup</div>
      </div>
      <div class="card-block">
        <button class="btn is-primary is-block" @click.prevent="openPopup">Open popup</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Center popup</div>
      </div>
      <div class="card-block">
        <button class="btn is-warning is-block" @click.prevent="openConfirm">Open center popup</button>
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
      },
      openConfirm () {
        this.confirm = this.$element(Confirm)
      }
    }
  }
</script>
