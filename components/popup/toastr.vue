<template>
  <mn-popup :show="show" animation="slideInUp" position="top" :masked="false">
    <div class="card m-b-1">
      <div class="card-block is-center-text">
        <small>{{ description }}</small>
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
        description: 'Toastr Message',
        cancelText: 'Close'
      }
    }
  }
</script>
