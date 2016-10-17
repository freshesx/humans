<template>
  <mn-popup :show="show" animation="slideInDown" @close="cancel">
    <div class="card m-b-1">
      <div class="card-block is-center-text">
        <small>This photo will be deleted from iCloud Photo Library on all your devices.</small>
      </div>
      <div class="card-btns">
        <button class="is-red-text">Delete Photo</button>
      </div>
    </div>
    <div class="card m-b-0">
      <div class="card-btns">
        <button class="is-blue-text" @click="cancel"><strong>Cancel</strong></button>
      </div>
    </div>
  </mn-popup>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.show = false
      }
    },
    data () {
      return {
        show: false
      }
    },
    mounted () {
      this.show = true
    }
  }
</script>
