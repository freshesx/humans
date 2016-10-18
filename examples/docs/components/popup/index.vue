<template>
  <div class="section">

    <div class="letter">
      <div class="letter-body">
        <h1>Popup</h1>
        <small>popup, confirm, alerts, activity sheets</small>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Pure popup</div>
      </div>
      <div class="card-block">
        <button class="btn is-primary is-block" @click.prevent="openPopup">Open popup</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Confirm extend popup</div>
      </div>
      <div class="card-block">
        <button class="btn is-warning is-block" @click.prevent="openConfirm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Popup from './popup'

  export default {
    methods: {
      openPopup () {
        this.popup = this.$human.createElement(Popup)
      },
      openConfirm () {
        const confirm = this.$human.confirm({ show: true })

        confirm.$on('confirm', () => {
          console.log('成功')
        })
      }
    }
  }
</script>
