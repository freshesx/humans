<template>
  <transition name="has-slide">
    <mn-rows>
      <mn-row>
        <mn-scroller>
          <mn-section>
            <mn-letter>
              <h1>Popup</h1>
              <small>popup, confirm, alerts, activity sheets</small>
            </mn-letter>

            <mn-card>
              <mn-card-item>Confirm extend popup</mn-card-item>
              <mn-card-item>
                <mn-btn type="warning" block @click.native.prevent="openConfirm">Confirm</mn-btn>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Alert extend popup</mn-card-item>
              <mn-card-item>
                <mn-btn type="error" block @click.native.prevent="openAlert">Alert</mn-btn>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Toastr Message extend popup</mn-card-item>
              <mn-card-item>
                <mn-btn type="primary" block @click.native.prevent="openToastr">Toastr Message</mn-btn>
              </mn-card-item>
            </mn-card>

            <mn-card>
              <mn-card-item>Custom popup (Activity sheets)</mn-card-item>
              <mn-card-item>
                <mn-btn type="secondary" block @click.native.prevent="openPopup">Open activity sheets</mn-btn>
              </mn-card-item>
            </mn-card>
          </mn-section>
        </mn-scroller>
      </mn-row>
    </mn-rows>
  </transition>
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
        this.$human.toastr({ show: true })
      }
    }
  }
</script>
