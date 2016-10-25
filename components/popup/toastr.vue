<template>
  <mn-popup :show="show" animation="slideInUp" position="top">
    <div class="card m-b-1">
      <div class="card-block is-center-text">
        <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
      </div>
    </div>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.show = false
        this.$emit('cancel')
      }
    },
    data () {
      return {
        show: false,
        title: 'Toastr Message',
        description: '',
        cancelText: 'Close'
      }
    }
  }
</script>
