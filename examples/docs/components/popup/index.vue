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
        <div class="card-title">Confirm extend popup</div>
      </div>
      <div class="card-block">
        <mn-btn type="warning" block @click.native.prevent="openConfirm">Confirm</mn-btn>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Alert extend popup</div>
      </div>
      <div class="card-block">
        <mn-btn type="error" block @click.native.prevent="openAlert">Alert</mn-btn>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Toastr Message extend popup</div>
      </div>
      <div class="card-block">
        <mn-btn type="primary" block @click.native.prevent="openToastr">Toastr Message</mn-btn>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Custom popup (Activity sheets)</div>
      </div>
      <div class="card-block">
        <mn-btn type="secondary" block @click.native.prevent="openPopup">Open activity sheets</mn-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Popup from './popup'

  export default {
    methods: {
      openPopup () {
        this.popup = this.$human.popup(Popup, { show: true })
      },
      openConfirm () {
        const confirm = this.$human.confirm({ show: true })

        confirm.$on('confirm', () => {
          console.log('成功')
        })
      },
      openAlert () {
        this.$human.alert({ show: true })
      },
      openToastr () {
        this.$human.toastr({
          show: true,
          description: 'Hello World!', // description for ToastrMessage
          icon: 'aperture' // icon for ToastrMessage
        })
      }
    }
  }
</script>
