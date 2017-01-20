<template>
  <docs-layout-page>
    <mn-section>
      <mn-letter>
        <mn-letter-body>
          <h1>Popup</h1>
          <small>popup, confirm, alerts, activity sheets</small>
        </mn-letter-body>
      </mn-letter>

      <mn-card>
        <mn-card-item>Confirm extend popup</mn-card-item>
        <mn-card-item>
          <mn-btn type="warning" block @click="openConfirm">Confirm</mn-btn>
        </mn-card-item>
      </mn-card>

      <mn-card>
        <mn-card-item>Alert extend popup</mn-card-item>
        <mn-card-item>
          <mn-btn type="error" block @click="openAlert">Alert</mn-btn>
        </mn-card-item>
      </mn-card>

      <mn-card>
        <mn-card-item>Toastr Message extend popup</mn-card-item>
        <mn-card-item>
          <mn-btn type="primary" block @click="openToastr">Toastr Message</mn-btn>
        </mn-card-item>
      </mn-card>

      <mn-card>
        <mn-card-item>Custom popup (Activity sheets)</mn-card-item>
        <mn-card-item>
          <mn-btn type="secondary" block @click="openPopup">Open activity sheets</mn-btn>
        </mn-card-item>
      </mn-card>
    </mn-section>
  </docs-layout-page>
</template>

<script>
  import popupConfig from './popup'
  import popup from 'vue-human/util/popup'
  import confirm from 'vue-human/util/confirm'
  import alert from 'vue-human/util/alert'
  import message from 'vue-human/util/message'

  export default {
    methods: {
      openPopup () {
        popup(popupConfig, { show: true })
      },
      openConfirm () {
        confirm({ show: true })
          .$on('confirm', () => {
            console.log('成功')
          })
      },
      openAlert () {
        alert({ show: true })
      },
      openToastr () {
        message({ show: true })
      }
    }
  }
</script>
